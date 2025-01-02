// import React from 'react';

// const Contact = () => {
//   return (
//     <div 
//     id='contact'
//     className='w-full bg-cover bg-center mt-[-40px]'
//     style={{ backgroundImage: "url('/src/portf.avif')" }}>
      
//       <h1 className='py-4 text-4xl font-bold text-center text-sky-700'>
//       𝘾𝙊𝙉𝙏𝘼𝘾𝙏
//       </h1>
//       <form
//         action='https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5'
//         method='POST'
//         encType='multipart/form-data'
//       >
//         <div className='ml-[500px]'>
//         <div className='grid md:grid-cols-2 gap-4 w-full py-2 pl-40'>
//           <div className='flex flex-col w-[300px]'>
//             <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Name</label>
//             <input
//               className='border-2 rounded-lg p-3 flex border-gray-300'
//               type='text'
//               name='name'
//             />
//           </div>
//           <div className='flex flex-col w-[300px] ml-[-250px]'>
//             <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Phone Number</label>
//             <input
//               className='border-2 rounded-lg p-3 flex border-gray-300'
//               type='text'
//               name='phone'
//             />
//           </div>
//         </div>
//         <div className='flex flex-col py-2 w-[850px] pl-40'>
//           <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Email</label>
//           <input
//             className='border-2 rounded-lg p-3 flex border-gray-300'
//             type='email'
//             name='email'
//           />
//         </div>

//         <div className='flex flex-col py-2 w-[850px] pl-40'>
//           <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Subject</label>
//           <input
//             className='border-2 rounded-lg p-3 flex border-gray-300'
//             type='text'
//             name='subject'
//           />
//         </div>
//         <div className='flex flex-col py-2 w-[850px] pl-40'>
//           <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Message</label>
//           <textarea
//             className='border-2 rounded-lg p-3 border-gray-300'
//             rows='10'
//             name='message'
//           ></textarea>
//         </div>
//         <div className='pl-80'>
//         <button className='bg-[#001b5e] text-gray-100 mt-4 w-[300px] p-4 rounded-lg mb-4 font-bold'>
//           Send Message
//         </button></div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';

const Contact = () => {
  return (
    <div 
      id='contact'
      className='w-full bg-cover bg-center mt-[-40px] bg-gradient-animation  bg-gray-600 top-0 left-0  border-2 border-black-900 '
      // style={{ backgroundImage: "url('/src/portf.avif')" }} 
      >
      <h1 className='py-4 text-4xl font-bold text-center text-sky-700'>
        𝘾𝙊𝙉𝙏𝘼𝘾𝙏
      </h1>
      <form
        action='https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='ml-[300px]'>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2 pl-40'>
            <div className='flex flex-col w-[300px]'>
              <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Name</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300'
                type='text'
                name='name'
              />
            </div>
            <div className='flex flex-col w-[300px] ml-[-200px]'>
              <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Phone Number</label>
              <input
                className='border-2 rounded-lg p-3 flex border-gray-300'
                type='text'
                name='phone'
              />
            </div>
          </div>
          <div className='flex flex-col py-2 w-[850px] pl-40'>
            <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Email</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='email'
              name='email'
            />
          </div>

          <div className='flex flex-col py-2 w-[850px] pl-40'>
            <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Subject</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='subject'
            />
          </div>
          <div className='flex flex-col py-2 w-[850px] pl-40'>
            <label className='uppercase text-sm py-2 text-red-200 italic font-bold'>Message</label>
            <textarea
              className='border-2 rounded-lg p-3 border-gray-300'
              rows='10'
              name='message'
            ></textarea>
          </div>
          <div className='pl-80'>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-[300px] p-4 rounded-lg mb-4 font-bold'>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;



