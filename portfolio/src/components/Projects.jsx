


import React from 'react';
import Pitem from './Pitem.jsx';
import flipcartImg from '../assets/flipcart.jpg';
import instaImg from '../assets/insta.jpg';
import olxImg from '../assets/olx.jpg';
import bookmyshowImg from '../assets/bookmyshow.webp';
import bloodImg from '../assets/blood.jpg';
import weatherImg from '../assets/weather.avif';
import backgroundImg from '../assets/port3.avif'; 

const Projects = () => {
  return (
    <div 
      id='projects' 
      className='w-full m-auto md:pl-20 p-4 py-16 mb-10'
      style={{
        backgroundImage: `url(${backgroundImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        𝑷𝑹𝑶𝑱𝑬𝑪𝑻𝑺
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className='pl-80 grid sm:grid-cols-2 gap-12 w-[1200px] h-full'>
        <Pitem img={instaImg} title='Instagram' githubLink='https://github.com/Athilathesni/reactinsta.git'/>
        <Pitem img={flipcartImg} title='Flipcart' githubLink='https://github.com/Athilathesni/productreact.git' />
        <Pitem img={olxImg} title='OLX' githubLink='https://github.com/Athilathesni/olxreact.git'/>
        <Pitem img={bookmyshowImg} title='Book My Show' githubLink='https://github.com/Athilathesni/bookms.git'/>
        <Pitem img={bloodImg} title='Blood Bank' githubLink='https://github.com/Athilathesni/blood-bank.git'/>
        <Pitem img={weatherImg} title='Weather' githubLink='https://github.com/Athilathesni/weather.git'/>
      </div>
    </div>
  );
};

export default Projects;


