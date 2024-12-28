
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
              {/* <p className="text-xl mt-3">{skill.level}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
