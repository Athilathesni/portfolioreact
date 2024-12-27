
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer= () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center">
          <h1 className="text-2xl font-bold">𝐌𝐘 𝐏𝐑𝐎𝐓𝐅𝐎𝐋𝐈𝐎</h1>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +91 8848307913</p>
          <p>Email: usmanchusman606@gmail.com</p>
          <p>Address: Wayanad</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl 
                            hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">
              Web Development</a></li>
            <li><a href="#" className="hover:underline">
              Web Designer</a></li>
          </ul>
        </div>
        {/* <div class="relative  h-10 w-10 ">
    <div class="relative mx-auto ms-5 h-20 w-20  animate-bounce rounded-full border-2">
      <div class="absolute bottom-0 right-10">
        <div class="relative h-10 animate-bounce">
          <div class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  </div> */}
      </div>
    </footer>
  );
};

export default Footer;