import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/main.webp";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

function Footer() {
  const [fLoading, setFLoading] = useState(false);
  const form2 = useRef();

  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const sendFEmail = (e) => {
    setFLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98z5ohn",
        "template_os6j44i",
        form2.current,
        "u-qJqDWGdBvWaaZwR"
      )
      .then(
        (result) => {
          e.target.reset();
          setFLoading(false);
          notyf.success("You've registered to my NewsLetter Successfully");
        },
        (error) => {
          notyf.error("It seems an error occured, try again!");
        }
      );
  };
  return (
    <div>
      <div className="footer-container shadow">
        <footer className="px-md-5 pt-md-4 pt-sm-4 pt-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <img className="mb-2" src={Logo} style={{ width: "80px" }} />
                <small className="d-block mb-3 text-muted">
                  &copy; 2019–Present
                </small>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    I'm Ogamba Patrick Junior an experienced Software Engineer,
                    FullSatck and Mobile Developer with a demonstrated history
                    of working in the information technology and services
                    industry.
                  </li>
                </ul>
                <div
                  id="user_mini_box"
                  className="d-flex align-items-center mb-4"
                >
                  <a
                    className="me-3"
                    target="_blank"
                    href="https://www.linkedin.com/in/patrick-junior-a75365233"
                    rel="noreferrer"
                  >
                    <BsLinkedin color="#0E5092" size={22} />
                  </a>
                  <a
                    className="me-3"
                    target="_blank"
                    href="https://github.com/PatrickJunior007"
                    rel="noreferrer"
                  >
                    <BsGithub color="#0E5092" size={22} />
                  </a>
                  <a className="me-3" href="tel:+237670157564">
                    <BsTelephoneFill color="#0E5092" size={22} />
                  </a>
                  <a
                    className="me-3"
                    href="mailto:ogambapatrickjunior@gmail.com"
                  >
                    <AiFillMail color="#0E5092" size={25} />
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <h5>Quick Navigation</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="link-secondary text-decoration-none"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="link-secondary text-decoration-none"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="link-secondary text-decoration-none"
                      href="#skills"
                    >
                      Skills Highlight
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                <form ref={form2} onSubmit={sendFEmail}>
                  <h5>Sign Up </h5>
                  <p>To my NewsLetter</p>
                  <div className="w-100">
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control mb-3"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      Send
                      {fLoading && (
                        <div
                          class="spinner-border text-light ms-2 spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between py-4 pb-0 mb-0 my-4 border-top">
              <p>&copy; 2023 Patrick Junior, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
