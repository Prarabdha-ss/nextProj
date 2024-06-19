 'use client';
 import React from 'react';
import Footer from '../components/footer';
import Image from 'next/image'; // Import next/image component

export default function Home() {
  return (
    <div className="page-container">
      {/* <Header /> */}
      <main>
        <h1>Welcome to Our Blogs</h1>
        {/* Add Image component with src pointing to the image in the public directory */}
        {/* <div className="image-container">
          <Image src="/idea 2 (no bg).png" alt="Your Image" width={500} height={300} />
        </div> */}
        {/* Additional content can be added here */}
      </main>
      {/* <Footer /> */}
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 84vh;
        }
        main {
          flex: 1;
          padding: 2rem;
          text-align: center; /* Center the image */
        }
        .image-container {
          margin-top: 2rem; /* Add margin to separate the image from the heading */
        }
        h1 {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}

//  import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
//  export default function Home() {
//   return (
//     <div className="page-container">
//       <Header />
//       <main>
//         <h1>Welcome to Our Blogs</h1>
//         {/* Additional content can be added here */}
//       </main>
//       <Footer />
//       <style jsx>{`
//         .page-container {
//           display: flex;
//           flex-direction: column;
//           min-height: 100vh;
//         }
//         main {
//           flex: 1;
//           padding: 2rem;
//         }
//         h1 {
//           margin-bottom: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// }

