'use client'
import React from "react";
import { motion } from "motion/react";
import { FaDiscord, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative p-10 mx-auto max-w-xl bg-black my-10 rounded-lg flex flex-col gap-8">
      <motion.div className="relative top-5 " variants={itemVariants}>
        <div className="h-90 bg-black rounded-3xl">
          <h3 className="flex flex-col gap-4 justify-center items-center text-6xl font-bold text-white mb-4 font-sora">
            CONTACT ME
          </h3>
          <div className="space-y-10 flex flex-col justify-center items-center text-sm">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 border text-white rounded flex items-center justify-center text-2xl">
                <FaDiscord />
              </div>
              <a
                href="https://discord.com/invite/1242544103586267228"
                className="text-pink-500 hover:text-pink-400 text-2xl"
              >
                Discord
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 border text-white rounded flex items-center justify-center text-2xl">
                <FaLinkedin />
              </div>
              <a
                href="https://www.linkedin.com/in/himanshi-gupta3005"
                className="text-pink-500 hover:text-pink-400 text-2xl"
              >
                LinkedIn
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 border text-white rounded flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>
              <a
                href="mailto:himanshigupta3005@gmail.com"
                className="text-pink-500 hover:text-pink-400 text-2xl"
              >
                Gmail
              </a>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 border text-white rounded flex items-center justify-center text-2xl">
                <FaGithub />
              </div>
              <a
                href="https://github.com/Himanshi305"
                className="text-pink-500 hover:text-pink-400 text-2xl"
              >
                Github
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default contact;
