import React from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "../useInView";
import MyImage from "../assets/images/port.webp";
import MyImage2 from "../assets/images/opa.webp";
import MyImage3 from "../assets/images/uxui.webp";

// Projects data
const projects = [
  {
    image: MyImage,
    title: "Portfolio",
    description:
      "I have created this website with the use of HTML, CSS, and JavaScript. Using vanilla CSS and some basic JavaScript. This is my first website I have made. It might be basic, but I have learned a lot from it and created an updated version using React.",
    explanation:
      "This project helped me understand the basics of web development and sparked my interest in front-end development. Over time, I improved the website by implementing React and other modern web technologies.",
    link: "#",
  },
  {
    image: MyImage2,
    title: "Telegram Bot",
    description:
      "In this project, I have created a Telegram bot using Python. This bot takes a link from YouTube and extracts the audio file of that video. It also has the capability to extract audio from Instagram links. This is my second project.",
    explanation:
      "This bot demonstrates my knowledge of Python and web scraping. I used libraries like `requests` and `BeautifulSoup` to interact with websites and download media. I am constantly improving this bot to add more features and optimize it.",
    link: "#",
  },
  {
    image: MyImage3,
    title: "Auto Generate Qr code",
    description:
      "I have created a website that generates QR codes. Users can input any text or URL and the website will generate a QR code for them. This project is built using HTML, CSS, and JavaScript. I have also added a feature to download the QR code as an image.Share the qr code with your friends and family via whatsapp or any share app.",
    explanation:
      "This project helped me understand the basics of web development and sparked my interest in front-end development. Over time, I improved the website by implementing React and other modern web technologies.",
    link: "https://qr-code-eta-virid.vercel.app/",
  },
];

export default function Project() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    // Whenever the section comes into view, reset and animate it again
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="project-section py-5"
      id="projects"
      ref={ref}
      initial="hidden" // Initial state is hidden
      animate={controls} // Animation will trigger based on inView state
    >
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="row justify-content-center mb-4"
          variants={fadeIn("up", 0.2)}
        >
          <div className="col-md-8 text-center">
            <h2 className="fw-bold display-6 mb-4">Projects</h2>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="row justify-content-center"
          variants={fadeIn("up", 0.4)}
        >
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <motion.div
                className="card shadow-lg border-0"
                variants={fadeIn("up", index * 0.2 + 0.6)}
              >
                <img
                  src={project.image}
                  className="card-img-top img-fluid"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                  <p className="text-muted">{project.explanation}</p>
                </div>
                <a href="#" class="btn btn-primary">
                  {project.link}
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
