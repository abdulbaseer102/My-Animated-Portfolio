"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {

    const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
        I&apos;m a Full Stack Software Engineer with extensive experience in Website,
        Mobile, and Software development. I specialize in creating responsive, user-friendly applications 
        that solve real-world problems. My skill set includes a deep understanding of front-end and back-end 
        technologies, allowing me to bring projects to life from concept to deployment.
      </motion.p>

      {showMore && (
        <motion.div
          variants={slideInFromLeft(1.0)}
          initial="hidden"
          animate="visible"
          className="text-md text-gray-400 my-3 max-w-[600px]"
        >
          <p>
            Throughout my career, I have developed a keen eye for detail and a passion for learning the latest 
            technologies. Whether it&apos;s building a complex mobile app or designing a scalable backend system, 
            I thrive on challenges and am committed to delivering high-quality software solutions.
          </p>
          <p>
            Check out my portfolio to see examples of my work, ranging from single-page applications to comprehensive 
            software solutions. I am proficient in languages and frameworks such as JavaScript, React, Node.js, 
            and Python, and I continuously strive to expand my skill set.
          </p>
          <p>
            Beyond coding, I enjoy contributing to open-source projects, mentoring junior developers, and staying 
            active in tech communities. I believe in the power of collaboration and the importance of sharing 
            knowledge to foster innovation and growth within the industry.
          </p>

        </motion.div>
      )}

     <motion.a

      variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5"
     >

     <button
        onClick={() => setShowMore(!showMore)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]"
      >
        {showMore ? 'Show Less' : 'Read More'}
      </button>
     </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent