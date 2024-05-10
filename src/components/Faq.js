import React from "react";

const Faq = () => {
    return(
        <section id="faq">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-sm-12 text-center">
            <h2 className="text-lg-start">Frequently Asked Question</h2>
            <p className="text-lg-start">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div className="col-lg-7 col-12">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item mb-4" >
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed border border-secondary rounded-2" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae esse asperiores veritatis et aperiam maiores tempora corrupti adipisci aspernatur voluptatem reprehenderit ducimus, cum itaque dolores sapiente vero nulla, non ut.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed border border-secondary rounded-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illum aliquid harum ab perspiciatis facere debitis, dolores esse suscipit, at amet quae quasi quo eligendi! Cupiditate illum maiores consectetur veritatis.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed border border-secondary rounded-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet, earum quis similique distinctio fugit sed provident, laborum error corporis cum rem tenetur cumque ad libero blanditiis fuga. Voluptatibus, accusamus!
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="flush-headingFor">
                  <button
                    className="accordion-button collapsed border border-secondary rounded-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFor"
                    aria-expanded="false"
                    aria-controls="flush-collapseFor"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="flush-collapseFor"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFor"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sed provident deserunt vero reprehenderit libero, dolorem odit nemo eligendi, consequatur cum. Odio eum adipisci ullam eaque odit earum quae porro?
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed border border-secondary rounded-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores reprehenderit nisi, hic doloribus culpa voluptatum totam sit, quidem repudiandae sapiente maxime! Assumenda quos ipsum inventore in commodi neque quas!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Faq