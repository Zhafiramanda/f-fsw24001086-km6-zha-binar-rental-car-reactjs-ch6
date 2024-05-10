import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    if (location.pathname === "/cars") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [location.pathname]);
  return (
    <section style={{ backgroundColor: "#f1f3ff" }} id="main">
      <div className="container-fluid" style={{ paddingTop: "80px" }}>
        <div className="row">
          <div
            className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start"
            id="text-main"
          >
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p style={{ fontSize: "14px" }}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {showButton ? (
              <a href="/cars">
                <button className="mb-5" id="btn-cari">
                  Mulai Sewa Mobil
                </button>
              </a>
            ) : (
              <></>
            )}
          </div>
          <div className="col-lg-6 col-md-12" style={{ padding: "0" }}>
            <img
              src="assets/img/img_car.png"
              alt="car"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
