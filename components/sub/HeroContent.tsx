'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utlis/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
// Assuming that the correct module path is '@utils/motion/slideInFromTop'
// and the module is installed in your project.


const HeroContent = ()  => {
  return (
    <><motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-11 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center mb-10 m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7024f88b] opacity-[0.9]"
        >

          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>FulstackDevloper Portfolio</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-4 font-6x1 font-bold text-white text-max-w-[600px] w-auto h-auto text-[50px]'
        >
          <span>
            Providing 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {" "}
            the best {" "}</span>

          Project exeperience
        </span>
      </motion.div><motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
      >
        i&apos;m Abdulbaseer A FulstackDevloper with exeperience in Website,
        and Software development. check out my projects and skills.

      </motion.p><motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
      >
        Learn More
      </motion.a>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center mt-11'
      >
         <Image
            src = '/mainIconsdark.svg'
            alt = 'work icon'
            height ={650}
            width ={650}
            />


      </motion.div>
    </motion.div>
    </>
  )
}

export default HeroContent
