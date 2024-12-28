
import React from 'react';

const Skills = () => {
  const skills = [
    {
      name:"HTML",
      logo: "logo-html5",
      count: 70,
    },
    {
      name:"CSS",
      logo: "logo-css3",
      count: 70,
    },
    {
      name:"JAVASCRIPT",
      logo:"logo-javascript",
      count:70,
    },
    {
      name:"REACT",
      logo: "logo-react",
      count: 60,
    },
    {
      name:"MONGODB",
      logo:"logo-angular",
      count:50,
    },
    {
      name:"BOOTSTRAP",
      logo: "logo-firebase",
      count: 40,
    },
    {
      name:"NODE JS",
      logo: "logo-nodejs",
      count: 40,
    },
    {
        name:"EXPRESS",
        logo: "logo-nodejs",
        count: 40,
      },
      {
        name:"TAILWIND CSS",
        logo: "logo-nodejs",
        count: 40,
      }
  ];

  return (
    <section
      id="skills"
      className="bg-gray-100 flex items-center justify-center min-h-screen"
    >
      <div className="max-w-[1060px] text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        <span className=" text-[#001b5e]">𝙎𝙆𝙄𝙇𝙇𝙎</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[100px] max-w-[160px] bg-gray-900 p-4 rounded-xl"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


// import { useTrail, animated } from "react-spring";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaNodeJs,
//   FaNpm,
//   FaBootstrap,
// } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiTailwindcss,
//   SiJavascript,
//   SiVite,
// } from "react-icons/si";
// import { DiGithubBadge } from "react-icons/di";

// const skills = [
//   { id: "html", Component: FaHtml5 },
//   { id: "css", Component: FaCss3Alt },
//   { id: "javascript", Component: SiJavascript },
//   { id: "bootstrap", Component: FaBootstrap },
//   { id: "react", Component: FaReact },
//   { id: "tailwind", Component: SiTailwindcss },
//   { id: "node", Component: FaNodeJs },
//   { id: "npm", Component: FaNpm },
//   { id: "mongodb", Component: SiMongodb },
//   { id: "vite", Component: SiVite },
//   { id: "github", Component: DiGithubBadge },
// ];

// export default function Skills() {
//   const trail = useTrail(skills.length, {
//     from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
//     to: { transform: "translate3d(0,0px,0)", opacity: 1 },
//   });

//   return (
//     <div
//       id="skills"
//       className="bg-lightDesert rounded-lg shadow-md flex items-center justify-center min-h-screen"
//     >
//       <div className="text-center max-w-2xl w-full mx-auto">
//         <h2 className="text-4xl font-bold text-darkDesert mb-6">Skills</h2>
//         <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
//           {trail.map((props, index) => {
//             const { Component } = skills[index];
//             return (
//               <animated.div
//                 style={props}
//                 className="text-5xl text-goldDesert transition-all duration-2000 transform hover:scale-110 hover:text-darkDesert"
//                 key={skills[index].id}
//               >
//                 <Component />
//               </animated.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }





