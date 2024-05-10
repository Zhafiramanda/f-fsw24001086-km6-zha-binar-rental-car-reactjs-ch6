import React from "react";

const OurServices = () => {
  return (
    <section id="our-services">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12">
            <img
              src="assets/img/img_service.png"
              alt="services"
              className="mb-4 img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="mt-4">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="d-flex">
              <img
                src="assets/img/icon.png"
                alt="icon"
                width="24px"
                height="24px"
              />
              <p className="ms-2">Sewa mobil dengan Supir di Padang 12 Jam</p>
            </div>
            <div className="d-flex">
              <img
                src="assets/img/icon.png"
                alt="icon"
                width="24px"
                height="24px"
              />
              <p className="ms-2">Sewa Mobil Lepas Kunci di Padang 24 Jam</p>
            </div>
            <div className="d-flex">
              <img
                src="assets/img/icon.png"
                alt="icon"
                width="24px"
                height="24px"
              />
              <p className="ms-2">Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="d-flex">
              <img
                src="assets/img/icon.png"
                alt="icon"
                width="24px"
                height="24px"
              />
              <p className="ms-2">Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="d-flex">
              <img
                src="assets/img/icon.png"
                alt="icon"
                width="24px"
                height="24px"
              />
              <p className="ms-2">Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
