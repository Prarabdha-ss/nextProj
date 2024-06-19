'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const CreateBlog: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/blogs', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      router.push('/dasboard');
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError('Failed to create blog post');
    }
  };

  return (
    <div>
      <h1>Create a New Blog Post</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </label>
        <button type="submit">Create Blog Post</button>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          
        }
      `}</style>
    </div>
  );
};

export default CreateBlog;




// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const CreateBlog: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: '', // You can set this dynamically based on the logged-in user
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }

//       // Redirect to the blogs page after successful creation
//       router.push('/blogs');
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       setError('Failed to create blog post');
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={formData.title} onChange={handleChange} />
//         </label>
//         <label>
//           Content:
//           <textarea name="content" value={formData.content} onChange={handleChange} />
//         </label>
//         <button type="submit">Create Blog Post</button>
//       </form>
//       <style jsx>{`
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CreateBlog;

// import React from 'react';
// import {SessionProvider, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import BlogForm from '../../components/BlogForm';

// const WrappedCreateBlog: React.FC = () => {
//   return (
//     <SessionProvider>
//       <CreateBlog />
//     </SessionProvider>
//   );
// };

// const CreateBlog: React.FC = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === 'loading') return <p>Loading...</p>;
//   if (!session) {
//     router.push('/signin');
//     return null;
//   }

//   const handleCreateBlog = async (title: string, content: string) => {
//     try {
//       const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title,
//           content,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }

//       const data = await response.json();
//       console.log('Blog created:', data);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       <BlogForm onSubmit={handleCreateBlog} />
//       <style jsx>{`
//         div {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 2em;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WrappedCreateBlog;

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { SessionProvider, useSession } from 'next-auth/react';
// import BlogForm from '@/components/BlogForm';

// const WrappedCreateBlog: React.FC = () => {
//   return (
//     <SessionProvider>
//       <CreateBlog />
//     </SessionProvider>
//   );
// };

// const CreateBlog: React.FC = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === 'loading') return <p>Loading...</p>;
//   if (!session) {
//     router.push('/signin');
//     return null;
//   }

//   const handleCreateBlog = async (title: string, content: string) => {
//     try {
//       const response = await fetch('/api/auth/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title,
//           content,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }

//       const data = await response.json();
//       console.log('Blog created:', data);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       <BlogForm onSubmit={handleCreateBlog} />
//       <style jsx>{`
//         div {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 2em;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WrappedCreateBlog;

// const WrappedCreateBlog: React.FC = () => {
//   return (
//     <SessionProvider>
//       <CreateBlog />
//     </SessionProvider>
//   );
// };

// const CreateBlog: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
  
//     try {
//       console.log('Form Data:', formData);
//       const response = await fetch('/api/auth/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       console.log('Response:', response);
  
//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }
  
//       // Redirect to the blogs page after successful creation
//       router.push('/');
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       setError('Failed to create blog post');
//     }
//   };
 

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={formData.title} onChange={handleChange} />
//         </label>
//         <label>
//           Content:
//           <textarea name="content" value={formData.content} onChange={handleChange} />
//         </label>
//         <button type="submit">Create Blog Post</button>
//       </form>
//       <style jsx>{`
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WrappedCreateBlog;
// export default CreateBlog;




// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const CreateBlog: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: '', // You can set this dynamically based on the logged-in user
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }

//       // Redirect to the blogs page after successful creation
//       router.push('/blogs');
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       setError('Failed to create blog post');
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" value={formData.title} onChange={handleChange} />
//         </label>
//         <label>
//           Content:
//           <textarea name="content" value={formData.content} onChange={handleChange} />
//         </label>
//         <button type="submit">Create Blog Post</button>
//       </form>
//       <style jsx>{`
//         form {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CreateBlog;

// import React from 'react';
// import {SessionProvider, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import BlogForm from '../../components/BlogForm';

// const WrappedCreateBlog: React.FC = () => {
//   return (
//     <SessionProvider>
//       <CreateBlog />
//     </SessionProvider>
//   );
// };

// const CreateBlog: React.FC = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === 'loading') return <p>Loading...</p>;
//   if (!session) {
//     router.push('/signin');
//     return null;
//   }

//   const handleCreateBlog = async (title: string, content: string) => {
//     try {
//       const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           title,
//           content,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create blog post');
//       }

//       const data = await response.json();
//       console.log('Blog created:', data);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       throw error;
//     }
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       <BlogForm onSubmit={handleCreateBlog} />
//       <style jsx>{`
//         div {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 2em;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WrappedCreateBlog;
 // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/blogs', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to create blog post');
  //     }

  //     // Redirect to the blogs page after successful creation
  //     router.push('/blogs');
  //   } catch (error) {
  //     console.error('Error creating blog post:', error);
  //     setError('Failed to create blog post');
  //   }
  // };