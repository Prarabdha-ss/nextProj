import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/utils/mongoodb';
import Blog from '@/models/Blog';
import { NextRequest, NextResponse } from 'next/server';

// Handler for GET method
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  try {
    const blogs = await Blog.find({}).lean();
    if (!Array.isArray(blogs)) {
      throw new Error('Blogs data is not an array');
    }
    return NextResponse.json({blogs}, {status:200});
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}

// Handler for POST method
export async function POST(req: NextRequest, res: NextResponse) {
  console.log(req.method);
  if (req.method === 'POST') {
    // const { title, content, author } = req.body;
    const title = 'test'
    const content = 'test'
    const author = 'test'
    const createdAt = new Date();

    await dbConnect();
    try {
      const newBlog = new Blog({ title, content, author, createdAt });
      await newBlog.save();
      console.log(newBlog);
      return NextResponse.json({ message: 'Blog created successfully', blog: newBlog }, { status: 201 });
    } catch (error) {
      console.error('Error creating blog:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  } 
}

// Only export the functions if they are not already exported
// if (!module.exports.getBlogs) {
//   module.exports.getBlogs = getBlogs;
// }
// if (!module.exports.createBlog) {
//   module.exports.createBlog = createBlog;
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '@/utils/mongoodb';
// import Blog from '@/models/Blog';

// // Handler for GET method
// export async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();
//   try {
//     const blogs = await Blog.find({}).lean();
//     res.status(200).json(blogs);
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// // Handler for POST method
// export async function createBlog(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, content, author } = req.body;

//     await dbConnect();
//     try {
//       const newBlog = new Blog({ title, content, author });
//       await newBlog.save();
//       res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '../../../utils/mongoodb';
// import Blog from '../../../models/Blog';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, content, author } = req.body;

//     try {
//       await dbConnect();

//       const newBlog = new Blog({
//         title,
//         content,
//         author,
//       });

//       await newBlog.save();

//       res.status(201).json(newBlog);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).end();
//   }
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '@/utils/mongoodb';
// import Blog from '@/models/Blog';

// // Handler for GET method
// export async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();
//   try {
//     const blogs = await Blog.find({}).lean();
//     res.status(200).json(blogs);
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// // Handler for POST method
// export async function createBlog(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, content, author } = req.body;

//     await dbConnect();
//     try {
//       const newBlog = new Blog({ title, content, author });
//       await newBlog.save();
//       res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


//export { getBlogs, createBlog };
// Only export the functions if they are not already exported
// if (!module.exports.getBlogs) {
//   module.exports.getBlogs = getBlogs;
// }
// if (!module.exports.createBlog) {
//   module.exports.createBlog = createBlog;
// }


// import { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '@/utils/mongoodb';
// import Blog from '@/models/Blog';

// // Handler for GET method
// export async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();
//   try {
//     const blogs = await Blog.find({}).lean();
//     res.status(200).json(blogs);
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// // Handler for POST method
// export async function createBlog(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, content, author } = req.body;

//     await dbConnect();
//     try {
//       const newBlog = new Blog({ title, content, author });
//       await newBlog.save();
//       res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import { dbConnect } from '../../../utils/mongoodb';
// import Blog from '../../../models/Blog';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { title, content, author } = req.body;

//     try {
//       await dbConnect();

//       const newBlog = new Blog({
//         title,
//         content,
//         author,
//       });

//       await newBlog.save();

//       res.status(201).json(newBlog);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).end();
//   }
// }
