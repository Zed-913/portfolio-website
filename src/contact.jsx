import React, { useRef, useState } from 'react';
import mail from "./assets/mail.png"
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const handlelinkedin = ( ) => {
    window.open("https://www.linkedin.com/in/zakaria-djebbar-465b762a7/")
  }

  const handleinsta = () => {
    window.open("https://www.instagram.com/zed._.913/")
  }


    const form = useRef();
    const [status , setStatus] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_so0v5oh', 'template_y1mirql', form.current, 'IQaVj3kVkzqKjZzbF'  )
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success')
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error')

        },
      );
  };


  return (
    <div className="mt-[80px]">
            <div className='flex justify-center'>
                <div id="vb" className='animate-bounce bg-[#14142B]  text-[#7B4AE2] font-semibold  w-[160px] h-[35px] rounded-[16px] flex items-center gap-x-2 justify-center'>
                        <img src={mail} className='w-[20px]'/>
                          Contactos
                      </div>
            <div className='mt-[20px]'>


            </div>

            
            </div>
<div className='flex flex-wrap justify-center items-center  mt-[80px] gap-x-48'>

    <div id="socials" className='mt-[-50px]'>
        <div onClick={handlelinkedin} className='animate-bounce hover:text-white duration-1000 hover:bg-[#090E16]   mt-[40px] flex items-center w-[220px] bg-[#14142B] justify-center h-[40px] rounded-[6px] font-medium text-[#7B4AE2] gap-x-3'>
        <FontAwesomeIcon icon={faLinkedin} className='h-[20px]'/>
        <h1 className='font-font2'>DJEBBAR Zakaria</h1>
        </div>

        <div onClick={handleinsta} className='animate-bounce hover:text-white duration-700 hover:bg-[#090E16]   mt-[40px] flex items-center w-[220px] bg-[#14142B] justify-center h-[40px] rounded-[6px] font-medium text-[#7B4AE2] gap-x-3'>
        <FontAwesomeIcon icon={faInstagram} className='h-[20px]'/>
        <h1 className='font-font2'>zed._.913</h1>
        </div>

        <div className='animate-bounce hover:text-white duration-700 hover:bg-[#090E16]   mt-[40px] flex items-center w-[220px] bg-[#14142B] justify-center h-[40px] rounded-[6px] font-medium text-[#7B4AE2] gap-x-3'>
        <FontAwesomeIcon icon={faEnvelope} className='h-[20px]'/>
        <h1 className='font-font2 text-[14px]'>z.djebbar@esi-sba.dz</h1>
        </div>


    </div>


    <div className='flex flex-col justify-center '>
    {status=== "success" && (<div className='ml-[-14px] flex pl-[10px]  mt-[20px] mb-[20px] w-[380px] h-[50px] items-center rounded-[10px] bg-[#1C4E3A] text-[#4AE290] gap-x-6'>
        <FontAwesomeIcon icon={faCircleCheck} className='h-[20px] pl-[10px]'/> 
    <div className='font-font3'>
        <h1 className='text-[18px]  font-regular '>Email have been sent Successfully</h1>
    </div>
    </div>) }

    {status === "error" && ( 
        <div className='flex pl-[10px]  mt-[20px] mb-[20px] w-[350px] h-[55px] items-center rounded-[10px] bg-[#1C4E3A] text-[#4AE290] gap-x-6'>
        <FontAwesomeIcon icon={faCircleCheck} className='h-[20px] pl-[10px]'/> 
    <div className='font-font1'>
        <h1 className='text-[18px] mb-[-4px] font-semibold '>We Faced </h1>
        <h1 className='text-[13px] font-regular'>Thank you for contacting us</h1>
    </div>
    </div>


    )}

                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col'>
                            <label className='font-bold text-[#7B4AE2] ml-[5px] '>Name</label>
                            <input type='text' name='user-name' className='bg-[#14142B] w-[350px] mt-[5px] h-[38px] items-center rounded-[5px] appearance-none outline-none border-none pl-[10px] text-white font-semibold' required/>
                        </div>

                        <div className='flex flex-col mt-[20px]'>
                            <label className='font-bold text-[#7B4AE2] ml-[5px]'>Email</label>
                            <input  type='email' name='user-email' className='bg-[#14142B] w-[350px] mt-[5px] h-[38px] items-center rounded-[5px] appearance-none outline-none border-none pl-[10px] text-white font-semibold' required/>
                        </div>
                        <div className='flex flex-col mt-[20px]'>
                            <label className='font-bold text-[#7B4AE2] ml-[5px]'>Message</label>
                            <textarea type='' name='message' className=' appearance-none outline-none border-none resize-none focus:ring-2 focus:ring-[#7b4ae2] duration-1000 bg-[#14142B] w-[350px] h-[150px]  rounded-[5px] appearance-none outline-none border-none pl-[10px] text-white font-semibold' required/>
                        </div>

                        <button className='flex justify-center items-center bg-[#14142B] text-[#7B4AE2] font-bold w-[350px] hover:bg-[#271D4F] hover:text-white duration-700 h-[40px] mt-[30px] lg:mb-[40px] rounded-[10px] max-lg:mb-[100px]'>Send</button>
    
                    </form>
    </div>
</div>



    </div>
  )
}

export default Contact