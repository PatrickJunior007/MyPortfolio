import React from "react";
import Logo from "../assets/main.webp"

function Footer() {
  return (
    <div>
      <div className="footer-container shadow">
        <footer className="px-md-5 pt-md-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md">
                <img
                  className="mb-2"
                  src={Logo}
                  style={{width: '80px'}}
                />
                <small className="d-block mb-3 text-muted">
                  &copy; 2019–Present
                </small>
              </div>
              <div className="col-6 col-md">
                <h5>About</h5>
                <a href="index.php" className="text-white">
                  <img id="logo_img_2" src="system_image/shop2.png" alt="" />
                </a>
                <small className="d-block mb-3 text-muted">
                  &copy; 2021-Present
                </small>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Team
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Locations
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Cool stuff
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Random feature
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Team feature
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Stuff for developers
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Another one
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Last time
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <form>
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
                    <button className="btn btn-primary" type="button">
                      Send
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
