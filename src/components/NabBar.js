import React from "react";

export default function NabBar() {
  return (
    <header>
      <div className="container-fluid shadow-lg bg-light luo " id="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg py-3 sticky-top ">
                <a className="navbar-brand px-2 fw-bold logo" href="#home">
                  ASHUZ'S PORTFOLIO
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link lit text-dark fw-medium mx-3"
                        aria-current="page"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link lit text-dark fw-medium mx-3"
                        href="#about-me"
                      >
                        About Me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link lit text-dark fw-medium mx-3"
                        href="#projects"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link lit text-dark fw-medium mx-3"
                        href="#contact"
                      >
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
