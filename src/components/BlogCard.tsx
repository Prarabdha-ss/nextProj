'use client';
import React from 'react';

interface BlogCardProps {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ _id, title, content, author }) => {
  return (
    <div className="blog-card" id={_id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p><small>By {author}</small></p>
      <style jsx>{`
        .blog-card {
          border: 1px solid #ddd;
          padding: 1em;
          margin: 1em 0;
          border-radius: 4px;
          background: #fff;
        }
        h2 {
          margin-bottom: 0.5em;
        }
        p {
          margin-bottom: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default BlogCard;
