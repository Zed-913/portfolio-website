import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import me from "./assets/Group 68.png"
import red from "./assets/Red.png"
import blue from "./assets/Blue.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import bga from "./assets/Line 6.png";
import logo from "./assets/vite.svg";
import pedri from "./assets/ProfilePic.png";
import skull from "./assets/Skull.png";
import lap from "./assets/Laptop.png";
import designer from "./assets/nah.png";
import Ticket from "./assets/Ticket.png";
import mnyk from "./assets/pii.png"
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Projects from "./projects";
import Contact from "./contact"
function App() {

  const handlegith = () => {
      window.open("https://github.com/Zed-913")
  }
  const handlelink = () => {
    window.open("https://www.linkedin.com/in/zakaria-djebbar-465b762a7/")
  }
  return (


    
      <div className='bg-[#090E16] lg:min-h-[210vh] xl:min-h-[220vh] 2xl:min-h-[200vh]  max-lg:min-h-[230vh]    pt-[40px]   overflow-hidden'>
      <div className='flex justify-end mt-[-200px] mr-[-420px]'>
        <img src={bga} className='max-w-screen-lg -rotate-45  h-[800px] z-0'/>
      </div>

          <div className='z-1 mt-[-570px] relative'>
            <div id="navbar" className='flex items-center bg-[#0F1120] h-[46px]   ml-[250px] mr-[250px] rounded-[23px]' >
              <img src={logo} className='w-[70px] ml-[60px] '/>
            </div>
            
            <div id="maiin" className='flex  xl:gap-x-32 justify-center items-center mt-[80px] '>
              <div id="me" className='text-white flex flex-col  sm:ml-[-300px]' >
                  <div id="vb" className='animate-bounce bg-[#14142B]  text-[#7B4AE2] font-semibold  w-[160px] h-[35px] rounded-[16px] flex items-center gap-x-1 justify-center'>
                    <img src={red} className='w-[20px]'/>
                    <img src={blue} className='w-[20px]'/>
                      Visca Barca
                  </div>
                  <div className='font-extrabold text-[36px] mt-[20px]'>
                    <h1>DJEBBAR Zakaria</h1>
                    <h1 className='text-white opacity-50 text-[15px] font-light mb-[10px]'>Front-end developer · UI/UX designer</h1>
                    <div className='flex gap-x-5  '>
                      <FontAwesomeIcon onClick={handlegith} className="opacity-50 w-[22px] hover:opacity-100  duration-500 " icon={faGithub} />
                      <FontAwesomeIcon onClick={handlelink} className="opacity-50 w-[22px] hover:opacity-100 duration-500  " icon={faLinkedin} />
                    </div>
                  </div>
              </div>
              <div id='pic'>
                <img src={me} alt='ProfilePicture ' className='hidden xl:block w-[400px] duration-700 hover:scale-105  '/>
            
              </div>
              <div id="cv">
              </div>
            </div>
          </div>


<div className='z-1 relative'>
  
            <hr className='border-[3px] mt-[160px] border-[#0F1120]'/>
            <hr className='border-[3px] mt-[-px] border-[#14142B] '/>
</div>





          <div id="AboutHim" className='mt-[150px]  xl:ml-[-100px] flex justify-center gap-x-32'>
            <img src={pedri} className='hidden xl:block w-[350px] '/>

            <div id="info">
            <div id="him" className='animate-bounce bg-[#14142B]  text-[#7B4AE2] font-semibold  w-[200px] h-[35px] rounded-[16px] flex items-center gap-x-2 justify-center'>
                    <img src={skull} className='w-[20px]'/>
                    Meet  z3D_x10.
                  </div>

                  <h1 className='mt-[15px] text-white text-[40px] font-extrabold flex items-center'>z<div className='text-[#303067]'>3</div>D<div className=' text-[35px] text-[#303067]' >_x10</div></h1>

              <div className='mt-[40px] '>
                
                <div className='flex gap-x-5 items-center '>
                  <img src={lap} className='w-[20px] h-[20px] '/>
                  
                  <h1 className='text-white font-medium text-[18px] text-[#84878B] '>3rd Year computer Science Student  </h1>
                </div>
                <div className='flex gap-x-5 items-center mt-[30px]'>
                  <img src={designer} className='w-[20px] h-[20px] '/>
                  
                  <h1 className='text-white font-medium text-[18px] text-[#84878B]'>Passionate Front-end developer and UI/UX designer </h1>
                </div>
                <div className='flex gap-x-5 items-center mt-[30px]'>
                  <img src={Ticket} className='w-[20px] h-[20px] '/>
                  
                  <h1 className='text-white font-medium text-[18px] text-[#84878B]'>Creating user-friendly, visually engaging applications.</h1>
                </div>



              </div>

            </div>

          </div>


          <div id="skills" className='mt-[50px] mb-[50px]'>

             <div className='flex flex-col items-center '>
               <div id="him" className='animate-bounce bg-[#14142B]  text-[#7B4AE2] font-bold  w-[150px] h-[35px] rounded-[16px] flex items-center gap-x-2 justify-center'>
                      <img src={mnyk} className='w-[20px]'/>
                      Skillset
                    </div>

                    <h1 className='mt-[20px] justify-center text-[36px] font-extrabold text-[#422C7C]'>Tecnologias e habilidades</h1>

                    <div className='flex flex-wrap justify-center  text-[#422c7c] gap-x-20 mt-[40px] '>
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faReact} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faJs} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faHtml5} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faCss3} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faFigma} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faGitAlt} />
                    <FontAwesomeIcon className='h-[40px] hover:text-white duration-1000 hover:scale-125 ' icon={faGithub} />



                    </div>
             </div>


          </div>


          <Projects/>
          <Contact/>

        </div>
    
  )
}

export default App
