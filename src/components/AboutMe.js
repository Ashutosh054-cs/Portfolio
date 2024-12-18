import React from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "../useInView";

export default function AboutMe() {
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
      className="about-me-section py-5"
      id="about-me"
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
            <h2 className="fw-bold display-6 mb-4">About Me</h2>
            <p className="lead text-muted">
              Hi! My name is <strong>Ashutosh Pradhan</strong>. I am currently
              pursuing my graduation from <abbr title="Lakshya Institute of Technology">LIT</abbr>.
              This portfolio showcases my skills and projects. A big shout-out to my friend <strong>SKETU</strong> for supporting me in completing this website!
            </p>
            <p className="mt-3">
              I'm passionate about learning new technologies and constantly
              improving my skills to build efficient and innovative solutions.
              Let's create something amazing together!
            </p>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          className="row justify-content-center"
          variants={fadeIn("up", 0.4)}
        >
          <div className="col-md-8">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-gradient text-dark fw-medium">
                Skills I have learned so far
              </div>
              <ul className="list-group list-group-flush">
                {/* Example skills */}
                <motion.li
                  className="list-group-item"
                  variants={fadeIn("up", 0.6)}
                >
                  <i className="bi bi-code-slash text-primary me-2"></i> HTML 5
                </motion.li>
                <motion.li
                  className="list-group-item"
                  variants={fadeIn("up", 0.8)}
                >
                  <i className="bi bi-filetype-css text-success me-2"></i> CSS
                </motion.li>
                <motion.li
                  className="list-group-item"
                  variants={fadeIn("up", 1.0)}
                >
                  <i className="bi bi-lightbulb text-warning me-2"></i> JavaScript
                </motion.li>
                <motion.li
                  className="list-group-item"
                  variants={fadeIn("up", 1.2)}
                >
                  <i className="bi bi-grid-1x2 text-info me-2"></i> React
                </motion.li>
                <motion.li
                  className="list-group-item"
                  variants={fadeIn("up", 1.4)}
                >
                  <i className="bi bi-bootstrap text-purple me-2"></i> Bootstrap
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
