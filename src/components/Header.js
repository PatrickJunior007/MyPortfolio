import React from "react";
import Logo from "../assets/pjr.png"
import {BsGithub, BsLinkedin, BsMailbox, BsPhone, BsPhoneFill, BsTelephone, BsTelephoneFill} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const Header = () => {
  return (
    <div>
      <div className="first_header" id="bool">
        <div className="header_wrapper container">
          <a href="#" className="text-white">
            <img id="logo_img" src={Logo} alt="" />
          </a>
          <div id="user_mini_box" className="d-flex align-items-center">
            <a className="me-3" target="_blank" href="https://www.linkedin.com/in/patrick-junior-a75365233" rel="noreferrer"><BsLinkedin color="white" size={22}/></a>
            <a className="me-3" target="_blank"  href="https://github.com/PatrickJunior007" rel="noreferrer"><BsGithub color="white" size={22}/></a>
            <a className="me-3" href="tel:+237670157564"><BsTelephoneFill color="white" size={22}/></a>
            <a className="me-3" href="mailto:ogambapatrickjunior@gmail.com"><AiFillMail color="white" size={25}/></a>
          </div>
        </div>
      </div>
      <nav id="navigate-bar" className="">
        <div className="wrapper">
          <input type="radio" name="slide" id="menu-btn" />
          <input type="radio" name="slide" id="cancel-btn" />
          <ul style={{zIndex: "20"}} className="nav-links">
            <label for="cancel-btn" style={{color: 'white'}} className="btn cancel-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a style={{color: 'rgb(238, 173, 8)'}} href="#projecting">
                Projects
              </a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn text-white">
            <i className="fas fa-bars"></i>
          </label>

          {/* <div id="product_search_bar" className="boom">
            <form
              autocomplete="off"
              method="POST"
              action="search_result.php"
              style={{display: 'flex', padding: "0px"}}
              className="col-12 col-lg-auto mt-1 mb-lg-0 me-lg-3"
            >
              <input
                style={{display: 'block', marginRight: '10px'}}
                name="search_content"
                type="search"
                className="form-control mr-2"
                placeholder="Search..."
                aria-label="Search"
                required
              />
              <button
                style={{display: 'block', padding: '2px 12px', fontSize: '16px'}}
                name="search"
                type="submit"
                className="btn btn-outline-warning"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </div>
  );
};


export default Header;