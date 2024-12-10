import React, { useState } from 'react'
import link from "./assets/Link.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import projectos from "./projectos"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const[clicked1 , setClicked1] = useState(true);
    const[filter , setFilter] = useState("All")
 

    const[clicked2 , setClicked2] = useState(true);


    const handleclick1 = () => {
        setFilter((prevFilter) => (prevFilter === "UI/UX" ? "All" : "UI/UX"));
        setClicked2(false);

      };
    
        
      const handleclick2 = () => {
        setFilter((prevFilter) => (prevFilter === "Front End" ? "All" : "Front End"));
        setClicked1(false);
    };
     

    const filterProjects = filter === "All" ? projectos : projectos.filter((project) => project.type.includes(filter));

    const handlegithub = () => {
        window.open("https://github.com/Zed-913")

    }



    return (
    <div className='mt-[100px]'>

        <div className='flex flex-col w-full items-center'>

        <div id="him" className='animate-bounce bg-[#14142B]  text-[#7B4AE2] font-bold  w-[150px] h-[35px] rounded-[16px] flex items-center gap-x-2 justify-center'>
        <img src={link} className='w-[20px]'/>
        Projectos
        </div>

        <div className='flex mt-[20px] gap-x-10'>
            <div onClick={handleclick1} className={`gap-x-5 font-medium border-2 flex rounded-[15px] justify-center items-center border-[#7B4AE2] w-[150px] h-[40px] duration-1000 cursor-pointer ${filter !== "UI/UX"  ? "text-[#7b4Ae2]  " : "text-white bg-[#14142B] border-none" }  `}><FontAwesomeIcon icon={faPenNib} /> UI/UX</div>
            <div onClick={handleclick2} className={`gap-x-5 font-medium border-2 flex rounded-[15px] justify-center items-center border-[#7B4AE2] w-[150px] h-[40px] duration-1000 cursor-pointer ${filter !== "Front End"  ? "text-[#7b4Ae2] " : "text-white bg-[#14142B] border-none" }  `}><FontAwesomeIcon icon={faCode} /> Front-End</div>

        </div>

        <div className='mt-[40px] flex flex-wrap gap-x-20 gap-y-10 items-center justify-center mb-[50px]  '>
            {filterProjects.map((project, index) => (
            <div className={` rounded-[20px] w-[280px] h-[420px] flex flex-col justify-around
                ${index === 1 || index === 5 ? "bg-[#14142B]" : "border-2 border-[#7B4AE2]"}
            `}>
                <h1 className='mt-[0px] ml-[30px] text-white  text-[16px] font-bold'>{project.projectName}</h1>
                <h1 className='mt-[-20px] ml-[30px] mr-[15px] text-white opacity-50 font-regular text-[14px]'>{project.description}</h1>

                    <div className='flex justify-center gap-x-2'>
                        {project.type.map((type,ind) => (
                        <div
                        key={ind}
                        className={`w-[106px] h-[30px]  font-bold rounded-[8px] flex items-center justify-center 
                        
                        ${project.type.length > 1 ? "" : "ml-[-90px]" }
                        ${(index === 1 || index === 5) && type != "Online" ? "border-2 border-[#7B4AE2]" : "" }
                        ${type === "Online" ? " w-[83px] bg-[#1C4E3A] text-[#4AE290]" : "text-[#7B4AE2]"}

                        bg-[#14142B] `}>
                        {type}
                        </div>
                        )) }
                    </div>

                <div className='flex justify-center mt-[-20px] rounded-[10px] '><img src={project.img} alt={project.projectName} className='w-[240px] '/></div>
            </div>))
}
        </div>
        </div>

        <div className='flex justify-end'>
            <h1 className='flex items-center text-right text-[#7B4AE2] mr-[100px] font-semibold cursor-pointer duration-700 hover:text-white' onClick={handlegithub}>Check my projects on my GitHub &nbsp; &nbsp;<FontAwesomeIcon icon={faArrowRight} className='   '/> </h1>
        </div>
    </div>
  )
}

export default Projects