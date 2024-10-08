import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Image from "../assets/PJr.webp";
import CV from "../assets/CV12.pdf";
import Me from "../assets/me.jpg";
import "../css/popularity.css";
import CardProject from "../components/card/CardProject";
import { Data } from "../assets/data";
import emailjs from "@emailjs/browser";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const el = useRef(null);
  const el2 = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98z5ohn",
        "template_os6j44i",
        form.current,
        "u-qJqDWGdBvWaaZwR"
      )
      .then(
        (result) => {
          e.target.reset();
          setLoading(false);
          notyf.success("Your message was sent, I'll get back to you.");
        },
        (error) => {
          notyf.error("It seems an error occured, try again!");
        }
      );
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Graphic Designer",
        "Mobile App Developer",
        "Freelancer",
        "Gamer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    const typed2 = new Typed(el2.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Graphic Designer",
        "Mobile App Developer",
        "Freelancer",
        "Gamer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${Image})` }}
        className="home"
        id="home"
      >
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Patrick Jr.</div>
            <div className="text-3">
              And I'm a <span className="typing" ref={el2}></span>
            </div>
            <a href="#contact">Hire me</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={Me} alt="Ogamba Patrick Junior" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Patrick Junior and I'm a{" "}
                <span className="typing-2" ref={el}></span>
              </div>
              <p>
                With three years of experience and graduated from the University
                of Golf of Guinee having a Professional Bachelor in Software
                Engineering, I successfully combined my studies, job and
                other commitments showing myself to be self-motivated, organized
                and capable of working in collaboration with others. In addition
                to that I’m very hardworking, learn quickly and easily...
              </p>
              <a download href={CV}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text text-white">Web Development</div>
                <p className="text-white">
                  Well-versed in web programming tools, CMS and frameworks like
                  React, Nuxt/Vue, SpringBoot, Laravel and many others.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text text-white">Graphic Design</div>
                <p className="text-white">
                  Got skills in development of flyers, logos and other graphic
                  features like UI/UX Designing Schemes.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text text-white">Apps Development</div>
                <p className="text-white">
                  Mobile Application developement with React Native for both iOs
                  and Android Operating Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                <span style={{ fontWeight: "600" }}>1.</span> Have skills in{" "}
                <strong style={{ color: "#0E5092" }}>
                  {" "}
                  Graphic Designing And UI/UX developement
                </strong>
                . <br />
                <span style={{ fontWeight: "600" }}>2.</span> Experienced in
                modeling of applications.
                <br />
                <span style={{ fontWeight: "600" }}>3.</span> Well-versed in web
                development tools including
                <strong style={{ color: "#0E5092" }}> HTML</strong>,
                <strong style={{ color: "#0E5092" }}> CSS</strong>,{" "}
                <strong style={{ color: "#0E5092" }}> JQuery</strong>,
                <strong style={{ color: "#0E5092" }}> WordPress</strong>,
                <strong style={{ color: "#0E5092" }}> Tailwind CSS</strong> and
                <strong style={{ color: "#0E5092" }}> Bootstrap</strong>{" "}
                framework.
                <br />
                <span style={{ fontWeight: "600" }}>4.</span> Experienced in
                Search Engine Optimization |{" "}
                <strong style={{ color: "#0E5092" }}>SEO</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>6.</span> Skilled in
                programming languages such as
                <strong style={{ color: "#0E5092" }}> PHP</strong>,
                <strong style={{ color: "#0E5092" }}> JAVA</strong>,
                <strong style={{ color: "#0E5092" }}> SQL</strong> and
                <strong style={{ color: "#0E5092" }}> JavaScript</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>7.</span> Skilled in some JS
                Frameworks like
                <strong style={{ color: "#0E5092" }}> React</strong>,
                <strong style={{ color: "#0E5092" }}> Next JS</strong> and
                <strong style={{ color: "#0E5092" }}> Nuxt/Vue</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>8.</span> Mobile Development with
                <strong style={{ color: "#0E5092" }}> React Native</strong> and
                <strong style={{ color: "#0E5092" }}> Flutter</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>9.</span> Clear and
                understanding knowledge in the versioning tools{" "}
                <strong style={{ color: "#0E5092" }}> Git </strong> and{" "}
                <strong style={{ color: "#0E5092" }}>GitHub</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>10.</span> Skilled web application and REST APIs development with{" "}
                <strong style={{ color: "#0E5092" }}>SpringBoot</strong> and 
                <strong style={{ color: "#0E5092" }}> Laravel</strong>.
                <br />
                <span style={{ fontWeight: "600" }}>11.</span> Other Skills
                include:
                <strong style={{ color: "#0E5092" }}>
                  {" "}
                  Node, Express, MongoDB, TypeScript, FireBase, Testing, Cucumber, Cypress
                </strong>
                .
              </p>
              <a href="#contact">Contact for more</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML & CSS</span>
                  <span>95%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>PHP</span>
                  <span>85%</span>
                </div>
                <div className="line php"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JAVA</span>
                  <span>70%</span>
                </div>
                <div className="line java"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>SQL</span>
                  <span>85%</span>
                </div>
                <div className="line mysql"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Graphic Designing</span>
                  <span>75%</span>
                </div>
                <div className="line js"></div>
              </div>
              {/* <div className="bars">
                <div className="info">
                  <span>Java</span>
                  <span>70%</span>
                </div>
                <div className="line java"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="contact teams" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Contact me for your web apps, flyers and mobile apps and more at a very reasonable price Or to see some of my work
                samples.
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-phone"></i>
                  <div
                    className="info"
                    style={{ position: "relative", top: "-30px" }}
                  >
                    <div className="head">Phone Number</div>
                    <div className="sub-title">+237 670 15 75 64</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div
                    className="info"
                    style={{ position: "relative", top: "-30px" }}
                  >
                    <div className="head">Address</div>
                    <div className="sub-title">Calgary, Alberta</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div
                    className="info"
                    style={{ position: "relative", top: "-30px" }}
                  >
                    <div className="head">Email</div>
                    <div className="sub-title">
                      ogambapatrickjunior@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="column right">
              <div className="text">Message me</div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div className="button-area">
                  <button
                    name="submit"
                    className="d-flex align-items-center justify-content-center"
                    type="submit"
                  >
                    Send message
                    {loading && (
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
        </div>
      </section>

      <section className="projecting" id="projecting">
        <div className="container">
          <h2 className="title">My Works</h2>
          <div class="row">
            <div class="col-lg-12">
              <div class="projects">
                <div class="row">
                  {Data.map((item, index) => {
                    return <CardProject item={item} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a className="btn btn-primary btn-lg mt-3" href="#contact">
              Contact for more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
