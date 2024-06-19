'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Define a type for the blog objects
interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string; // Add other fields as necessary
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/signin');
    }
  }, [session, status]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/auth/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (status === 'loading' || !session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p><em>by {blog.author}</em></p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .dashboard-container {
          padding: 2rem;
          background-color: #f0f0f0;
        }
        h1 {
          color: #333;
          text-align: center;
        }
        .blogs-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
        .blog-card {
          background: #fff;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .blog-card:hover {
          transform: translateY(-5px);
        }
        .blog-card h2 {
          margin: 0 0 0.5rem 0;
          color: #0070f3;
        }
        .blog-card p {
          margin: 0.5rem 0;
        }
        .blog-card em {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
