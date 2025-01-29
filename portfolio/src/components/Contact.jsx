import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Contact = () => {
  return (
    <div
      className="w-full m-auto md:pl-20 p-4 py-16 mb-[-10px] mt-[-100px] relative   bg-gray-600 top-0 left-0  border-2 border-black-900"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center ml-[400px] shadow-2xl  motion-preset-bounce motion-duration-2000">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">Feel free to reach out through any of the following platforms:</p>

        <div className="flex justify-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/AthilaThesni c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition duration-200"
            aria-label="LinkedIn"
            title="Connect with me on LinkedIn - AthilaThesni c"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Athilathesni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition duration-200"
            aria-label="GitHub"
            title="Follow me on GitHub - Athilathesni"
          >
            <FaGithub className="w-8 h-8" />
          </a>

          {/* Email */}
          <a
            href="mailto:usmanchusman606@gmail.com"
            className="text-red-600 hover:text-red-800 transition duration-200"
            aria-label="Email"
            title="Email me at AthilaThesni.com"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;