

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer

const About = () => {
  // State to control the visibility of each content section
  const [showHeading, setShowHeading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);

  // Repeating effect function
  const startSequence = () => {
    setShowHeading(false);
    setShowText(false);
    setShowResumeButton(false);

    setTimeout(() => setShowHeading(true), 500);
    setTimeout(() => setShowText(true), 1500);
    setTimeout(() => setShowResumeButton(true), 2500);
  };

  useEffect(() => {
    // Start sequence initially
    startSequence();

    // Set an interval to repeat the sequence every 5 seconds (for example)
    const interval = setInterval(() => {
      startSequence();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Intersection observer hook
  const { ref: aboutRef, inView: inViewAbout } = useInView({
    triggerOnce: true, // Trigger only once when the element enters the view
    threshold: 0.5, // 50% of the element should be in view
    onChange: (inView) => {
      if (inView) {
        startSequence(); // Trigger the animation sequence when the About section is in view
      }
    },
  });

  return (
    <section
      id="about"
      ref={aboutRef} // Attach ref to the section you want to observe
      className="py-10 text-white h-[700px] relative bg-gray-600 top-0 left-0 border-2 border-black-900"
    >
      {/* Bubbles Animation */}
      <div className="absolute top-[20%] left-[10%] w-8 h-8 rounded-full bg-white opacity-60 animate-float-bubble"></div>
      <div className="absolute top-[40%] left-[50%] w-12 h-12 rounded-full bg-white opacity-60 animate-float-bubble"></div>
      <div className="absolute top-[60%] left-[80%] w-16 h-16 rounded-full bg-white opacity-60 animate-float-bubble"></div>
      <div className="absolute top-[70%] left-[20%] w-8 h-8 rounded-full bg-white opacity-60 animate-float-bubble"></div>
      <div className="absolute top-[50%] left-[70%] w-12 h-12 rounded-full bg-white opacity-60 animate-float-bubble"></div>

      <div className="text-center h-screen p-40">
        {showHeading && (
          <h3 className="text-4xl font-semibold">
            <span className="text-4xl font-bold text-center text-sky-700">
              𝘼𝘽𝙊𝙐𝙏 𝙈𝙀
            </span>
          </h3>
        )}

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            {showText && (
              <div className="text-gray-200 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  Hi, I’m Athila Thesni C, a passionate and results-driven Full-Stack Developer with expertise in
                  building dynamic and scalable web applications using the MERN stack. With a deep understanding of both front-end and back-end technologies,
                  I thrive in creating seamless user experiences and efficient server-side architectures.
                </p>
                <br />
                <br />
              </div>
            )}

            {showResumeButton && (
              <div className="ml-96">
                <a
                  href="/src/resume.pdf"
                  className="bg-gray-900 rounded-lg w-48 h-10 flex justify-center items-center text-white"
                >
                  Check Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;








