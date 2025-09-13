import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

function generateTOC(markdown) {
    const lines = markdown.split('\n');
    const toc = [];
    lines.forEach(line => {
        const match = line.match(/^(#{1,6})\s+([^#\n]+?)(?:\s+#*)?\s*$/);
        if (match) {
            const level = match[1].length;
            if (level <= 3) {
                const text = match[2].trim();
                const slug = text.toLowerCase().replace(/[^\w]+/g, '-');
                toc.push({ level, text, slug });
            }
        }
    });
    return toc;
}

const createHeadingRenderer = (level) => {
    return ({ children, ...props }) => {
        const textContent = React.Children.toArray(children)
            .map(child => (typeof child === 'string' ? child : ''))
            .join('');
        const slug = textContent.toLowerCase().replace(/[^\w]+/g, '-');
        const Tag = `h${level}`;
        return <Tag id={slug} {...props}>{children}</Tag>;
    };
};

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState({ content: '', title: '', date: '', author: '' });
    const [toc, setToc] = useState([]);
    const [tocVisible, setTocVisible] = useState(false);
    const tocRef = useRef(null);
    const hoverAreaRef = useRef(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                // First fetch the metadata from _index.json
                const indexResponse = await fetch('/blogs/_index.json');
                const indexData = await indexResponse.json();
                const postInfo = indexData.posts.find(p => p.slug === slug);

                if (!postInfo) {
                    throw new Error('Post not found');
                }

                // Then fetch the markdown content
                const response = await fetch(`/blogs/${slug}.md`);
                const content = await response.text();

                setPost({
                    content: content,
                    title: postInfo.title,
                    date: postInfo.date,
                    author: postInfo.author
                });
                setToc(generateTOC(content));
            } catch (error) {
                console.error('Error loading markdown:', error);
            }
        };

        loadPost();
    }, [slug]);

    useEffect(() => {
        // This effect sets up event handlers for showing/hiding TOC
        const handleMouseOver = () => setTocVisible(true);
        const handleMouseOut = (e) => {
            // Check if the mouse is leaving to an element outside TOC area
            if (!tocRef.current?.contains(e.relatedTarget) &&
                !hoverAreaRef.current?.contains(e.relatedTarget)) {
                setTocVisible(false);
            }
        };

        const tocElement = tocRef.current;
        const hoverAreaElement = hoverAreaRef.current;

        if (hoverAreaElement) {
            hoverAreaElement.addEventListener('mouseenter', handleMouseOver);
            hoverAreaElement.addEventListener('mouseleave', handleMouseOut);
        }

        if (tocElement) {
            tocElement.addEventListener('mouseenter', handleMouseOver);
            tocElement.addEventListener('mouseleave', handleMouseOut);
        }

        // Implement smooth scrolling for TOC links
        const handleTocLinkClick = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Adjust for header
                        behavior: 'smooth'
                    });

                    // Update URL without scrolling - fix the global history usage
                    window.history.pushState(null, '', href);

                    // Hide TOC after a slight delay
                    setTimeout(() => setTocVisible(false), 500);
                }
            }
        };

        // Add click handlers to all TOC links
        const tocLinks = tocElement?.querySelectorAll('a[href^="#"]');
        tocLinks?.forEach(link => {
            link.addEventListener('click', handleTocLinkClick);
        });

        return () => {
            if (hoverAreaElement) {
                hoverAreaElement.removeEventListener('mouseenter', handleMouseOver);
                hoverAreaElement.removeEventListener('mouseleave', handleMouseOut);
            }
            if (tocElement) {
                tocElement.removeEventListener('mouseenter', handleMouseOver);
                tocElement.removeEventListener('mouseleave', handleMouseOut);

                // Remove click handlers
                tocLinks?.forEach(link => {
                    link.removeEventListener('click', handleTocLinkClick);
                });
            }
        };
    }, [toc]); // Depend on toc to reattach handlers when TOC content changes

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const countWords = (text) => {
        // Remove markdown syntax and count words
        const cleanText = text
            .replace(/#{1,6}\s+/g, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
            .replace(/`([^`]+)`/g, '$1') // Remove inline code
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
            .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
            .replace(/\n+/g, ' ') // Replace newlines with spaces
            .trim();

        return cleanText.split(/\s+/).filter(word => word.length > 0).length;
    };

    const showToc = () => {
        setTocVisible(true);
    };

    return (
        <div className="blog-container">
            {/* Hover area to activate TOC */}
            <div ref={hoverAreaRef} className="toc-hover-area"></div>

            {/* TOC wrapper with visible class conditionally applied */}
            <div ref={tocRef} className={`toc-wrapper ${tocVisible ? 'visible' : ''}`}>
                <nav className="toc">
                    <h2>Contents</h2>
                    <ul>
                        {toc.map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    marginLeft: `${(item.level - 1) * 12}px`,
                                    fontSize: item.level === 1 ? '0.95rem' : '0.9rem',
                                    opacity: item.level === 1 ? 1 : 0.9
                                }}
                            >
                                <a
                                    href={`#${item.slug}`}
                                    className={item.level === 1 ? 'toc-level-1' : ''}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* TOC Toggle Button */}
            <button
                className="toc-button"
                onClick={showToc}
                aria-label="Show table of contents"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3 13h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0-6h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 12h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
                </svg>
            </button>

            <article className="blog-post">
                <div className="blog-header">
                    <div className="blog-title-section">
                        <h1>{post.title}</h1>
                        <span className="word-count">{countWords(post.content)} Words</span>
                    </div>
                    <div className="blog-meta">
                        <span className="blog-author">By {post.author}</span>
                        <span className="blog-date">{formatDate(post.date)}</span>
                    </div>
                </div>
                <ReactMarkdown
                    components={{
                        h1: createHeadingRenderer(1),
                        h2: createHeadingRenderer(2),
                        h3: createHeadingRenderer(3),
                        h4: createHeadingRenderer(4),
                        h5: createHeadingRenderer(5),
                        h6: createHeadingRenderer(6),
                    }}
                    rehypePlugins={[rehypeRaw]}
                >
                    {post.content}
                </ReactMarkdown>
                <hr />
            </article>
        </div>
    );
}

export default BlogPost;