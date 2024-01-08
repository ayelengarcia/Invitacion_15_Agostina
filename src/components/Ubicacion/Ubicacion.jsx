import { Ubicacion } from "./Ubicacion.styled";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ubicacion = () => {
  //CUENTA REGRESIVA
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date("2024-02-10T17:00:00"); // Fecha objetivo

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [days, setDays] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hours, setHours] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minutes, setMinutes] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [seconds, setSeconds] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        // cuando el contador llega a cero hacer algo acá si es necesario
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Ubicacion
      id="ubicacion"
      className="container-fluid d-flex justify-content-center align-items-center  m-0 pb-5"
    >
      <div className="container-ubica d-flex flex-column justify-content-center align-items-center pb-1 py-5 gap-1">
        <div data-aos="fade-down" data-aos-duration="1500">
          <h1>Faltan</h1>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="d-flex contador py-3 px-5 gap-4"
        >
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{days} : </p>
            <span className="text">Días</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{hours} :</p>
            <span className="text">Hrs</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{minutes} :</p>
            <span className="text">Min</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="cont">{seconds}</p>
            <span className="text">Seg</span>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-delay="250"
          data-aos-offset="200"
          className="ubica d-flex flex-column justify-content-center align-items-center pt-4"
        >
          <p className="text m-0">Ubicación</p>
          <p className="text-2 m-0">
            {" "}
            <i className="bi bi-geo-alt-fill pe-1"></i>Quinta Amancay{" "}
          </p>
          <p className="text-3 m-0"> Juana Manuela Gorriti 3615, Hurlingham</p>

          <p className="text-4 mt-3 mb-3">¿Cómo llegar?</p>

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6168.093406240825!2d-58.67510156637705!3d-34.58806226795952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe98580f133d%3A0xda2d5c0107667df0!2sJuana%20Manuela%20Gorriti%203615%2C%20William%20C.%20Morris%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1704685114301!5m2!1ses-419!2sar"
            display="initial"
            position="relative"
            className="iframe"
          />
        </div>
      </div>
    </Ubicacion>
  );
};

export default ubicacion;
