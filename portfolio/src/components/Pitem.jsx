import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const ProjectItem = ({ img, title, githubLink }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center mb-2'>
          {title}
        </h3>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-blue-500 border border-white bg-white mt-5 hover:underline flex items-center justify-center space-x-2'
        >
          <FaGithub className='text-black' />
          <span>GitHub</span> 
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
