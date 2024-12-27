import React from 'react';
import Pitem from './Pitem.jsx';
import flipcartImg from '../assets/flipcart.jpg';
import instaImg from '../assets/insta.jpg';
import olxImg from '../assets/olx.jpg';
import bookmyshowImg from '../assets/bookmyshow.webp';
import bloodImg from '../assets/blood.jpg'
import weatherImg from '../assets/weather.avif'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className='grid sm:grid-cols-2 gap-12 w-full h-full'>
        <Pitem img={instaImg} title='Insatgram'/>
        <Pitem img={flipcartImg} title='Flipcart'/>
        <Pitem img={olxImg} title='OLX' />
        <Pitem img={bookmyshowImg} title='Book My Show'/>
        <Pitem img={bloodImg} title='Blood Bank'/>
        <Pitem img={weatherImg} title='Weather'/>
      </div>
    </div>
  );
};

export default Projects;