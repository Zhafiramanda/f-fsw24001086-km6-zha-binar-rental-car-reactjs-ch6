import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container-fluid">
        <h2 className="text-center">Testimonial</h2>
        <p className="text-center mb-5">
          Berbagai review positif dari para pelanggan kami
        </p>
        <div className="loop owl-carousel owl-theme">
          <div className="item">
            <div
              className="card p-lg-5 p-4 border-light"
              style={{ backgroundColor: "#f1f3ff" }}
            >
              <div className="card-body d-flex align-items-center">
                <div className="row justify-content-center">
                  <div className="col-lg-2 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/img_photo_2.png"
                      alt="photo"
                      style={{ width: "80px", height: "80px" }}
                      className="justify-content-center"
                    />
                  </div>
                  <div className="col-lg-10 col-12">
                    <img
                      src="assets/img/Rate.png"
                      alt="rate"
                      className="my-2"
                      id="rate"
                    />
                    <p style={{ fontSize: "14px" }}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fw-bold">Yuri 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="card p-lg-5 p-4 border-light"
              style={{ backgroundColor: "#f1f3ff" }}
            >
              <div className="card-body d-flex align-items-center">
                <div className="row justify-content-center">
                  <div className="col-lg-2 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/img_photo_2.png"
                      alt="photo"
                      style={{ width: "80px", height: "80px" }}
                      className="justify-content-center"
                    />
                  </div>
                  <div className="col-lg-10 col-12">
                    <img
                      src="assets/img/Rate.png"
                      alt="rate"
                      className="my-2"
                      id="rate"
                    />
                    <p style={{ fontSize: "14px" }}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fw-bold">Yuri 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="card p-lg-5 p-4 border-light"
              style={{ backgroundColor: "#f1f3ff" }}
            >
              <div className="card-body d-flex align-items-center">
                <div className="row justify-content-center">
                  <div className="col-lg-2 d-flex align-items-center justify-content-center">
                    <img
                      src="assets/img/img_photo.png"
                      alt="photo"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-lg-10 col-12">
                    <img
                      src="assets/img/Rate.png"
                      alt="rate"
                      className="my-2"
                      id="rate"
                    />
                    <p style={{ fontSize: "14px" }}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="fw-bold">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
