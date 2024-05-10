import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-2">
            <p>
              <a href="#our-services">Our Services</a>
            </p>
            <p>
              <a href="#why-us"> Why Us</a>
            </p>
            <p>
              <a href="#testimonial"> Testimonial</a>
            </p>
            <p>
              <a href="#faq"> FAQ </a>
            </p>
          </div>
          <div className="col-lg-3">
            <p>Connect with us</p>
            <div className="mb-3">
              <a href="https://www.facebook.com" target="_blank">
                <img
                  src="assets/img/icon_facebook.png"
                  alt="facebook"
                  width="32px"
                  height="32px"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src="assets/img/icon_instagram.png"
                  alt="instagram"
                  width="32px"
                  height="32px"
                />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img
                  src="assets/img/icon_twitter.png"
                  alt="twitter"
                  width="32px"
                  height="32px"
                />
              </a>
              <a href="https://www.gmail.com" target="_blank">
                <img
                  src="assets/img/icon_mail.png"
                  alt="mail"
                  width="32px"
                  height="32px"
                />
              </a>
              <a href="https://www.twitch.tv" target="_blank">
                <img
                  src="assets/img/icon_twitch.png"
                  alt="twitch"
                  width="32px"
                  height="32px"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <p>Copyright Binar 2022</p>
            <button className="logo mb-30"></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
