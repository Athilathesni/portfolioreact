
import React from 'react';


const Footer= () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12 ml-80">

        <div className="flex items-center ml-40">
          <h1 className="text-2xl font-bold">𝐌𝐘 𝐏𝐑𝐎𝐓𝐅𝐎𝐋𝐈𝐎</h1>
        </div>

        <div className='ml-40'>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +91 8848307913</p>
          <p>Email: usmanchusman606@gmail.com</p>
          <p>Address: Wayanad</p>
        </div>

        <div className='ml-40'>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">
              Web Development</a></li>
            <li><a href="#" className="hover:underline">
              Web Designer</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;