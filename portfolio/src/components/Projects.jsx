import React from 'react';
import Pitem from './Pitem.jsx';
import flipcartImg from '../assets/flipcart.jpg';
import instaImg from '../assets/insta.jpg';
import olxImg from '../assets/olx.jpg';
import bookmyshowImg from '../assets/bookmyshow.webp';
import bloodImg from '../assets/blood.jpg';
import weatherImg from '../assets/weather.avif';
// import backgroundImg from '../assets/port3.avif';

const Projects = () => {
  return (
    <div 
      id="projects"
      className="w-full m-auto md:pl-20 p-4 py-16 mb-10 relative   bg-gray-600 top-0 left-0  border-2 border-black-900"
      // style={{
      //   backgroundImage: `url(${backgroundImg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* Background Dots Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full w-2 h-2 opacity-0 animate-blink-dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center text-sky-700">
        𝑷𝑹𝑶𝑱𝑬𝑪𝑻𝑺
      </h1>
      <p className="text-center py-8 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!<br />
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className="pl-[400px] grid sm:grid-cols-2 gap-12 w-[1000px] h-full">
        <Pitem img={instaImg} title="Instagram" githubLink="https://github.com/Athilathesni/reactinsta.git" />
        <Pitem img={flipcartImg} title="Flipcart" githubLink="https://github.com/Athilathesni/productreact.git" />
        <Pitem img={olxImg} title="OLX" githubLink="https://github.com/Athilathesni/olxreact.git" />
        <Pitem img={bookmyshowImg} title="Book My Show" githubLink="https://github.com/Athilathesni/bookms.git" />
        <Pitem img={bloodImg} title="Blood Bank" githubLink="https://github.com/Athilathesni/blood-bank.git" />
        <Pitem img={weatherImg} title="Weather" githubLink="https://github.com/Athilathesni/weather.git" />
      </div>
    </div>
  );
};

export default Projects;



