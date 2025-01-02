import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
      𝘾𝙊𝙉𝙏𝘼𝘾𝙏
      </h1>
      <form
        action='https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2 pl-40'>
          <div className='flex flex-col w-[200px]'>
            <label className='uppercase text-sm py-2 text-red-900 italic'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col w-[200px]'>
            <label className='uppercase text-sm py-2 text-red-900 italic'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2 w-[500px] pl-40'>
          <label className='uppercase text-sm py-2 text-red-900 italic'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
          />
        </div>

        <div className='flex flex-col py-2 w-[500px] pl-40'>
          <label className='uppercase text-sm py-2 text-red-900 italic'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2 w-[500px] pl-40'>
          <label className='uppercase text-sm py-2 text-red-900 italic'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-[300px]p-4 rounded-lg pl-20'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;


