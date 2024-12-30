
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
           <span className="text-4xl font-bold text-center text-[#001b5e]">𝘼𝘽𝙊𝙐𝙏 𝙈𝙀</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-500 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am currently pursuing b.tech in IT, As a Developer specializing in web development With hands-on experience in crafting dynamic user interfaces, I bring a blend of creativity and technical expertise to my role.
                <br />Having secured an internship as a Frontend Developer at a reputable company, I've dived headfirst into Angular development, harnessing the power of Bootstrap for responsive and visually appealing designs. Additionally, my journey has acquainted me with Node.js, empowering me to contribute to server-side functionalities as well.
                <br />
                Beyond Angular, I possess a versatile skill set. I am proficient in javascript, TypeScript, React.js, Bootstrap, Firebase, and GitHub, ensuring that I am well-equipped to adapt to diverse project requirements.
                <br /> My focus lies in delivering exceptional user experiences through intuitive and scalable UI components.I have honed my skills in crafting impressive user interfaces, ensuring seamless navigation and optimal performance across devices.
              </p>
              <br />
              <br />
            </div>
              <button className="bg-red-900 rounded-lg w-48 h-10">
                Check Resume
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



