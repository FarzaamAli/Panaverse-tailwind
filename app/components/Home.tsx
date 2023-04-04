import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='  bg-[url("/bg2.jpg")]  bg-cover bg-fixed text-center md:px-[130px] px-[14px] md:py-40 py-28 md:rounded-b-[40%] rounded-b-[20%]'>
        <h1 className=' text-black md:text-6xl text-3xl font-extrabold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
        <p className=' md:text-xl text-md mt-5 md:px-[150px]'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
        <button className='px-6 py-2 bg-green-600 hover:bg-green-900 rounded-xl text-xl font-semibold text-white mt-5'>More Info</button>
    </div>
   
    <div className=' flex md:flex-row flex-col  shadow-2xl w-[70%] justify-around md:py-[60px] py-[50px] space-y-14 items-center m-auto rounded-3xl -mt-[80px] bg-white'>
        <Image src={"/Logo.webp"} alt={"Panaverse"} width={150} height={150}/>
        <Image src={"/logo.svg"} alt={"PanaCloud"} width={150} height={150}/>
        <Image src={"/saylani.png"} alt={"Saylani"} width={150} height={150}/>
    </div>

    <div className=' w-[80%] flex md:flex-row flex-col m-auto mt-10'>
        <div className=' md:w-1/2'><Image src={"/meta2.jpg"} alt={"Metaverse"} width={500} height={420} /></div>
        
        <div className=' md:w-1/2 pt-8'>
        <h1 className=' text-black md:text-5xl text-3xl font-semibold font-serif border-l-[7px] border-l-green-700 pl-3'>Program Of Studies</h1>
        <p className=' md:text-md text-base mt-4 text-justify '>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
        <button className='px-6 py-2 bg-green-600 hover:bg-green-900 rounded-xl md:text-xl text-base font-semibold text-white mt-5'>Read More</button>
        </div>
    </div>


    <div className=' flex md:flex-row flex-col m-auto my-20'>
      <div className=' bg-[url("/bootcamp3.jpg")] bg-cover bg-center h-[11cm] md:w-1/2'></div>
      <div className='bg-[url("/bg123.avif")] bg-fixed bg-center md:w-1/2 -my-6 md:py-20 py-10 px-10 justify-center'>
      <h1 className=' text-black md:text-5xl text-3xl font-semibold font-serif border-l-[7px] border-l-green-700 pl-3'>Bootcamp 2023</h1>
        <p className=' md:text-md text-base mt-4 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!.</p>
        <button className='px-6 py-2 bg-green-600 hover:bg-green-900 rounded-xl md:text-xl text-base font-semibold text-white mt-5'>Read More</button>
      </div>
    </div>

    </>
  )
}
