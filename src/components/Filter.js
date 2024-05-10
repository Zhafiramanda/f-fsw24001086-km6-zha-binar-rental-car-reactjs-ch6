import React, { useState, useEffect } from "react";

const Filter = () => {
  const [cars, setCars] = useState([]);
  const [displayCars, setDisplayCars] = useState([]);
  const [driverType, setDriverType] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const populatedCars = populateCars(data);
        setCars(populatedCars);
      })
      .catch((err) => {
        console.error("Error fetching cars", err);
      });
  }, []);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const populateCars = (cars) => {
    return cars.map((car) => {
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + mutator);

      return {
        ...car,
        availableAt,
      };
    });
  };

  const handleSearchCar = () => {
    const today = new Date();
    const newDateTime = new Date(`${date}T${time}`);
    if (!driverType) {
      alert("Please select driver type");
      return;
    } else if (!date || !time) {
      alert("Please select date and time");
      return;
    } else if (newDateTime < today) {
      alert("Please don't select a past time");
      return;
    }
    const filteredCars = cars.filter(
      (car) => car.capacity >= (capacity || 0) && car.availableAt >= newDateTime
    );
    setDisplayCars(filteredCars);
  };

  const handleReset = () => {
    setDisplayCars([]);
    setDriverType(null);
    setDate("");
    setTime("");
    setCapacity(null);
  };

  return (
    <section id="cariMobil">
      <div className="container px-lg-5">
        <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
          {/* Form for filters */}
          <div className="flex-fill">
            <div className="row me-2">
              {/* Dropdown for driver type */}
              <div className="col-sm-12 col-lg-3 mt-2">
                <label htmlFor="driver" className="form-label">
                  Tipe Driver
                </label>
                <select
                  className="form-select"
                  id="driver"
                  value={driverType}
                  onChange={(e) => setDriverType(e.target.value)}
                >
                  <option hidden> Pilih Tipe Driver </option>
                  <option value="1">Dengan Sopir</option>
                  <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
              {/* Input for date */}
              <div className="col-sm-12 col-lg-3 mt-2">
                <label htmlFor="filterDate" className="form-label">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={date}
                  className="form-control"
                  id="filterDate"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              {/* Input for time */}
              <div className="col-sm-12 col-lg-3 mt-2">
                <label htmlFor="filterTime" className="form-label">
                  Waktu Jemput/Ambil
                </label>
                <input
                  type="time"
                  value={time}
                  className="form-control"
                  id="filterTime"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              {/* Input for capacity */}
              <div className="col-sm-12 col-lg-3 mt-2">
                <label htmlFor="filterCapacity" className="form-label">
                  Jumlah Penumpang (optional)
                </label>
                <input
                  type="number"
                  value={capacity}
                  className="form-control"
                  id="filterCapacity"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Search button */}
          <div className="mt-3 align-self-end">
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary text-nowrap me-2"
                id="btn-search"
                onClick={handleSearchCar}
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
        {/* Displaying cars */}
        <div className="row mt-5" id="carContainerList">
          {displayCars.length > 0 ? (
            displayCars.map((item) => (
              <div
                className="col-lg-4 mt-2 d-flex align-items-stretch"
                key={item.id}
              >
                <div className="card p-4">
                  <img
                    src={item.image}
                    alt="car"
                    className="card-img-top m-3 rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.model}/{item.manufacture}
                    </h5>
                    <p className="card-text fw-bold fs-6">
                      Rp{item.rentPerDay.toLocaleString()}
                    </p>
                    <p className="card-text">{item.description}</p>
                    <p>
                      <i className="bi bi-people"></i>
                      {item.capacity} Orang
                    </p>
                    <p>
                      <i className="bi bi-people"></i>
                      {item.transmission}
                    </p>
                    <p>
                      <i className="bi bi-people"></i>
                      {item.year}
                    </p>
                    <button className="btn btn-primary">Pilih Mobil</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1>No Cars Available</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filter;
