import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; // Animation helper
import { useInView } from "../useInView"; // Scroll observer helper

export default function HeroSection() {
  const [setRef, inView] = useInView({ threshold: 0.3 });

  // Dynamic content
  const dynamicContent = {
    title: "Hello, I'm",
    name: "Ashuz",
    subtitle: [
      "passionate developer.",
      "Web Developer.",
      "problem solver.",
      "innovative thinker.",
    ],
    description:
      "I specialize in creating modern, user-friendly web applications. My goal is to transform innovative ideas into reality with efficient and scalable solutions. Let’s build something amazing together!",
    resumeLink: "./public/storage/Ashutosh_Pradhan_Resume.pdf", // Update path to your CV
  };

  return (
    <motion.div
      className="main-body position-relative overflow-hidden"
      initial="hidden"
      animate="show"
    >
      {/* Background SVG Top */}
      <motion.svg
        className="background-svg top-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        variants={fadeIn("down", 0.2)}
      >
        <path
          fill="#FF6B6B"
          fillOpacity="0.6"
          d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,69.3C672,43,768,53,864,74.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </motion.svg>

      {/* Hero Section */}
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center py-5 px-3"
        ref={setRef} // Observer reference
      >
        <motion.h1
          className="display-4 fw-bold mb-4"
          style={{ lineHeight: "1.5", fontSize: "clamp(2rem, 5vw, 4rem)" }}
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {dynamicContent.title} <span>{dynamicContent.name}</span> 👋
        </motion.h1>
        <motion.p
          className="lead fw-normal mb-4"
          style={{
            maxWidth: "600px",
            lineHeight: "1.8",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          }}
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          I’m a&nbsp;
          <span style={{ fontWeight: "bold" }}>
            <Typewriter
              words={dynamicContent.subtitle}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.p>
        <motion.p
          className="fs-6"
          style={{
            maxWidth: "700px",
            lineHeight: "1.8",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
          }}
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {dynamicContent.description}
        </motion.p>
        <motion.a
          href={dynamicContent.resumeLink}
          download="Ashutosh_Pradhan_Resume.pdf"
          className="btn btn-outline-dark btn-lg mt-3 shadow-lg custom-button"
          variants={fadeIn("up", 1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          Download CV
        </motion.a>
      </div>

      {/* Background SVG Bottom */}
      <motion.svg
        className="background-svg bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        variants={fadeIn("up", 0.2)}
      >
        <path
          fill="#48CAE4"
          fillOpacity="0.4"
          d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,133.3C672,149,768,171,864,170.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </motion.svg>
    </motion.div>
  );
}
