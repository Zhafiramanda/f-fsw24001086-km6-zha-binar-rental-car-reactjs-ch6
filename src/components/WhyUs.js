import React from "react";

const WhyUs = () => {
    return (
        <section id="why-us" className="bg-white" style={{ width: "100%" }}>
      <div className="container">
        <div className="container-fluid text-center">
          <h2 className="text-lg-start">Why Us?</h2>
          <p className="text-lg-start">Mengapa harus pilih Binar Car Rental?</p>  
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-12 mb-2">
            <div className="card p-2" style={{ height: "196px" }}>
              <div className="card-body">
                <img src="assets/img/icon_complete.png" alt="icon" />
                <h3>Mobil Lengkap</h3>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-2">
            <div className="card p-2" style={{ height: "196px" }}>
              <div className="card-body">
                <img src="assets/img/icon_price.png" alt="icon" />
                <h3>Harga Murah</h3>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-2">
            <div className="card p-2" style={{ height: "196px" }}>
              <div className="card-body">
                <img src="assets/img/icon_24hrs.png" alt="icon" />
                <h3>Layanan 24 Jam</h3>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mb-2">
            <div className="card p-2" style={{ height: "196px" }}>
              <div className="card-body">
                <img src="assets/img/icon_professional.png" alt="icon" />
                <h3>Sopir Profesional</h3>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default WhyUs