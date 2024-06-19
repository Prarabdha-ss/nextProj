import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Our blogs. All Rights Reserved.</p>
      <style jsx>{`
        footer {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
          margin-top: auto;
        }
        p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
