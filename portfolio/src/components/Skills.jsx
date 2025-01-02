
import React from 'react';
import { motion } from 'framer-motion'; 

import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.webp';
import javascriptLogo from '../assets/js1.png';
import reactLogo from '../assets/reactjs.svg';
import mongodbLogo from '../assets/mongodb.png';
import bootstrapLogo from '../assets/bootstrap.webp';
import nodejsLogo from '../assets/node.png';
import expressLogo from '../assets/express-js.png';
import tailwindLogo from '../assets/tailwind.png';
import backgroundImage from '../assets/skill1.avif';

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JAVASCRIPT", logo: javascriptLogo },
    { name: "REACT", logo: reactLogo },
    { name: "MONGODB", logo: mongodbLogo },
    { name: "BOOTSTRAP", logo: bootstrapLogo },
    { name: "NODE JS", logo: nodejsLogo },
    { name: "EXPRESS", logo: expressLogo },
    { name: "TAILWIND CSS", logo: tailwindLogo }
  ];

  return (
    <section
      id="skills"
      className="relative flex items-center justify-center min-h-screen  bg-gray-600 top-0 left-0 border-2 border-black-900"
      // style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}

    >

<div
        className="absolute top-[20%] left-[10%] w-8 h-8 rounded-full bg-white opacity-60 animate-float-bubble"
      ></div>
      <div
        className="absolute top-[40%] left-[50%] w-12 h-12 rounded-full bg-white opacity-60 animate-float-bubble"
      ></div>
      <div
        className="absolute top-[60%] left-[80%] w-16 h-16 rounded-full bg-white opacity-60 animate-float-bubble"
      ></div>
      <div
        className="absolute top-[70%] left-[20%] w-8 h-8 rounded-full bg-white opacity-60 animate-float-bubble"
      ></div>
      <div
        className="absolute top-[50%] left-[70%] w-12 h-12 rounded-full bg-white opacity-60 animate-float-bubble"
      ></div>

      {/* Background bubbles animation */}
      <div className="absolute inset-0 z-0 bg-bubble-pattern bg-bubble-size animate-bubble-animation"></div>

      <div className="max-w-[1060px] text-gray-100 text-center z-10 relative">
        <h3 className="text-4xl font-semibold">
          <span className="text-sky-700">𝙎𝙆𝙄𝙇𝙇𝙎</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills?.map((skill, i) => (
            <motion.div
              key={i}
              className="group border-2 border-cyan-100 relative min-w-[100px] max-w-[160px] bg-gray-900 p-4 rounded-xl"
              whileHover={{
                scale: 1.05,  
                rotate: 5,    
                transition: {
                  type: "spring",  
                  stiffness: 300,  
                  damping: 20,     
                },
              }}
              whileTap={{ scale: 0.95 }} 
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                className="w-32 h-32 flex items-center justify-center rounded-full group-hover:rotate-[180deg] transition-transform duration-500 ease-in-out"
                style={{
                  background: `conic-gradient(rgb(8, 145, 170) 0%, rgb(8, 145, 170) 100%)`,
                }}
              >
                <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


