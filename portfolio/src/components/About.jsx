import React from "react";


const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8 ">
        <h3 className="text-4xl font-semibold">
          <span className="text-4xl font-bold text-center text-[#001b5e]">𝘼𝘽𝙊𝙐𝙏 𝙈𝙀</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-500 my-3 ">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hi, I’m Athila Thesni C, a passionate and results-driven Full-Stack Developer with expertise in
               building dynamic and scalable web applications using the MERN stack. With a deep understanding of both front-end and back-end technologies,
               I thrive in creating seamless user experiences and efficient server-side architectures.
              </p>
              <br />
              <br />
            </div>
            <a href="/src/resume.pdf" className="bg-red-900 rounded-lg w-48 h-10 flex justify-center items-center text-white">
              Check Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



