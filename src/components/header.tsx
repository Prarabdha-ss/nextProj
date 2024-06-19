'use client';
import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Header: React.FC = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {status === 'authenticated' ? (
            <>
              <li>
                <Link href="/create-blog">Create Blog</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signin">Sign In</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
        }
        nav ul {
          list-style-type: none;
          display: flex;
          justify-content: flex-start;
          gap: 1rem;
        }
        nav ul li a,
        nav ul li button {
          color: #fff;
          text-decoration: none;
          padding: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;

// import React from 'react';
// import Link from 'next/link';
// import LogoutButton from './LogoutButton';

// const Header: React.FC = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">
              
//             </Link>
//           </li>
//           <li>
//             <Link href="/blogs">
              
//             </Link>
//           </li>
//           <LogoutButton />
//         </ul>
//       </nav>
//       <style jsx>{`
//         header {
//           background-color: #333;
//           color: #fff;
//           padding: 1rem;
//         }
//         nav ul {
//           list-style-type: none;
//           display: flex;
//           justify-content: flex-start;
//           gap: 1rem;
//         }
//         nav ul li a {
//           color: #fff;
//           text-decoration: none;
//           padding: 0.5rem;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;
