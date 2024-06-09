// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-xl font-bold">
//           OJAY's SPA
//         </Link>
//         <nav className="flex space-x-4">
//           <Link to="/" className="text-white hover:text-gray-400">
//             Home
//           </Link>
//           <Link to="/about" className="text-white hover:text-gray-400">
//             About
//           </Link>
//           <Link to="/contact" className="text-white hover:text-gray-400">
//             Contact
//           </Link>
          
//         </nav>
        
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 container mx-auto flex justify-between items-center fixed top-0 left-0 right-0 w-full z-50 " >
        <Link to="/" className="text-white text-xl font-bold">
           OJAY's SPA
        </Link>
      <ul className="flex justify-around lex space-x-7">
        <li>
          <a href="#home" className="text-white">Home</a>
        </li>
        <li>
          <a href="#about" className="text-white">About</a>
        </li>
        <li>
          <a href="#contact" className="text-white">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;


