import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "../useInView";

const ContactMe = () => {
  const [setRef, inView] = useInView({ threshold: 0.3 });
  const [setSocialRef, socialInView] = useInView({ threshold: 0.3 });

  const socialLinks = [
    { name: "WhatsApp", link: "https://wa.me/123456789", icon: "bi-whatsapp" },
    { name: "Instagram", link: "https://instagram.com", icon: "bi-instagram" },
    { name: "Telegram", link: "https://t.me/username", icon: "bi-telegram" },
    { name: "Email", link: "mailto:example@email.com", icon: "bi-envelope" },
  ];

  return (
    <section>
      {/* Contact Form Section */}
      <section
        className="py-5 d-flex justify-content-center align-items-center bg-white"
        id="contact"
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          ref={setRef}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="container"
        >
          <h2
            className="text-center mb-5"
            style={{ color: "black", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Contact Me
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <form>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{ color: "black" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{ color: "black" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>
                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label" style={{ color: "black" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark btn-lg px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="py-5 bg-light" id="social-links">
        <motion.div
          ref={setSocialRef}
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={socialInView ? "show" : "hidden"}
          className="container text-center"
        >
          <h3
            className="mb-4"
            style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
          >
            Connect With Me
          </h3>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                style={{ fontSize: "2.5rem" }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <i className={`bi ${item.icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-dark text-center">
        <p className="text-white mb-0">
          Website made with ❤️ by <strong>@ashutosh</strong>
        </p>
      </footer>
    </section>
  );
};

export default ContactMe;
