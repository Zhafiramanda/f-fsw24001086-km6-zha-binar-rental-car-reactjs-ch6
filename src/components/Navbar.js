import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      style={{ fontWeight: 600 }}
    >
      <div className="container-md">
        <a href="/" className="navbar-brand">
          <button className="logo"></button>
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas-sm offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header mb-0">
            <h3 className="my-auto">BCR</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-md-end flex-lg-grow-1 align-items-sm-center">
              <li className="nav-item">
                <a href="#our-services" className="nav-link text-dark">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#why-us" className="nav-link text-dark">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonial" className="nav-link text-dark">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link text-dark">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <button>Register</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
