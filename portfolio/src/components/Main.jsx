// import React from "react";
// import { TypeAnimation } from 'react-type-animation';


// const Main = () => {
//     return (
//         <div id="main">
//             <img className="w-full h-screen object-cover" src="/src/portfolio.jpg" alt="Background" />
//             <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
//                 <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center text-blue-950'>
//                     {/* Profile Picture */}
//                     <img 
//                         className="w-64 h-64 rounded-full border-2 ms-[500px] border-gray-500 " 
//                         src="/src/me.jpeg" 
//                         alt="Athila Thesni" 
//                     />
                    
//                     <h1 className='animate-bounce sm:text-5xl text-4xl font-bold text-gray-800 font-serif '>
//                         I'm Athila Thesni
//                     </h1>
                    
//                     <h2 className='flex sm:text-3xl text-2xl pt-4 text-teal-900 text-opacity-50'>
//                         I'm a
//                         <TypeAnimation
//                             sequence={[
//                                 'Developer', 
//                                 2000, 
//                                 'Coder', 
//                                 2000, 
//                                 'Problem solver',
//                                 2000, 
//                             ]}
//                             wrapper='div'
//                             cursor={true}
//                             repeat={Infinity}
//                             style={{ fontSize: '1em', paddingLeft: '5px' }}
//                         />
//                     </h2>
                    
//             <div class="mt-[280px] flex">
//             <div class="relative mx-auto h-10 w-10">
//           <div class="relative ml-80 h-20 w-20 animate-bounce rounded-full border-2">
//           <div class="absolute bottom-0 right-10">
//           <div class="relative h-40 animate-bounce">
//           <div class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//                 </div>
//             </div> 
//         </div>
        
//     )
// }

// export default Main;





import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/portfolio.jpg"
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 flex flex-col justify-center items-center">
        <div className="max-w-[700px] w-full px-6 text-center lg:text-left">
          {/* Profile Picture (Right Side) */}
          <div className="flex justify-end">
            <img
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-gray-500"
              src="/src/me.jpeg"
              alt="Athila Thesni"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-serif">
            I'm Athila Thesni
          </h1>

          {/* Animated Text */}
          <h2 className="flex justify-center lg:justify-start items-center gap-2 text-lg sm:text-2xl lg:text-3xl pt-4 text-teal-900 text-opacity-50">
            I'm a
            <TypeAnimation
              sequence={["Developer", 2000, "Coder", 2000, "Problem solver", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-teal-900 font-semibold"
            />
          </h2>
        </div>

        {/* Bouncing Indicator (Centered Bottom) */}
        <div className="absolute bottom-10">
             <div className="relative h-10 w-10">
            <div className="relative h-20 w-20 animate-bounce rounded-full border-2">
            <div className="absolute bottom-0 right-10">
             <div className="relative h-20 animate-bounce">
             <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
</div>
         );
        }
        
        export default Main;
