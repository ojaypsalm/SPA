import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 SPA. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://www.twitter.com" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;