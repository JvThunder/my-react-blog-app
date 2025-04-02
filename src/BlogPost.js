import React, { useState, useEffect } from 'react';
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

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="blog-container">
            <nav className="toc">
                <h2>Contents</h2>
                <ul>
                    {toc.map((item, index) => (
                        <li key={index} style={{ marginLeft: `${(item.level - 1) * 20}px` }}>
                            <a href={`#${item.slug}`}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <article className="blog-post">
                <div className="blog-header">
                    <h1>{post.title}</h1>
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