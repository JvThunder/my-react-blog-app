import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './HomePage.css';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch the index file
                const indexResponse = await fetch('/blogs/_index.json');
                const indexData = await indexResponse.json();

                // Fetch and parse each blog file
                // if visible is false, skip
                const fetchedPosts = await Promise.all(
                    indexData.posts.filter(post => post.visible).map(async (postInfo) => {
                        const response = await fetch(`/blogs/${postInfo.slug}.md`);
                        const content = await response.text();

                        return {
                            ...postInfo,
                            id: postInfo.slug,
                            content,
                            excerpt: content.split('\n').join(' ').slice(0, 200)
                        };
                    })
                );

                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const recentPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return <div className="loading">Loading posts...</div>;
    }

    return (
        <div className="home-page">
            <section className="recent-posts">
                <h2>Recently Added</h2>
                <div className="posts-grid">
                    {recentPosts.map(post => (
                        <Link to={`/post/${encodeURIComponent(post.id)}`} key={post.id} className="post-card recent">
                            <h1>{post.title}</h1>
                            <div className="post-excerpt">
                                <ReactMarkdown>
                                    {post.excerpt + "..."}
                                </ReactMarkdown>
                            </div>
                            <div className="post-meta">
                                <span className="post-author">{post.author}</span>
                                <span className="post-date">{formatDate(post.date)}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="all-posts">
                <h2>All Articles</h2>
                <div className="posts-list">
                    {posts
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map(post => (
                            <Link to={`/post/${encodeURIComponent(post.id)}`} key={post.id} className="post-item">
                                <span className="post-title">{post.title}</span>
                                <div className="post-meta-compact">
                                    <span className="post-author">{post.author}</span>
                                    <span className="post-date">{formatDate(post.date)}</span>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;