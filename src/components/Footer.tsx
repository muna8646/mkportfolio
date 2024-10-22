import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Muna Kinyamal Sirkorei. All rights reserved.</p>
        <p className="mt-2 text-indigo-200">Crafted with ❤️ using React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;