"use client";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6  bg-gray-100">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold bg-blue-"
      >
        Mind Behind <span className="text-blue-400">TaskFlow</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-4 text-gray-600 text-lg max-w-2xl"
      >
        Hi, I m <strong className="text-black">Abeera Umair</strong>, a Fullstack
        Developer specializing in{" "}
        <span className="text-blue-400">Next.js</span>. I create seamless, scalable
        web applications with a strong focus on UI/UX and chatbot development.
      </motion.p>

      {/* Buttons */}
      <motion.div className="mt-6 flex space-x-6">
        <motion.a
          href="https://github.com/AbeeraUmair"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
        >
          View My Work
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/abeera-u-4377a8296/"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-700 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LandingPage;
