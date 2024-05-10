import React from "react";

const Banner = () => {
  return (
    <section id="get-start">
      <div className="container">
        <div
          className="container p-5 rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#0d28a6" }}
        >
          <h1 className="text-white">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <button>Mulai Sewa Mobil</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
