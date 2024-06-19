'use client';

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

// 'use client';
// import React from 'react';
// import axios from 'axios';

// const LogoutButton: React.FC = () => {
//   const handleLogout = async () => {
//     try {
//       await axios.post('/api/auth/logout');
//       window.location.href = '/'; // Redirect to home page after logout
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout} className="logout-button">
//       Logout
//       <style jsx>{`
//         .logout-button {
//           background-color: #333;
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .logout-button:hover {
//           background-color: #555;
//         }
//       `}</style>
//     </button>
//   );
// };

// export default LogoutButton;


