import { Asistencia } from "./Asistencia.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const asistencia = () => {
  return (
    <Asistencia id="asistencia" className="row container-fluid m-0 py-5">
      <div className="box mt-5">
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="floating texto mt-3 d-flex justify-content-center"
        >
          ¡Te invito a ser parte
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="floating texto d-flex justify-content-center"
        >
          de una noche única y mágica,
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="floating texto d-flex justify-content-center"
        >
          llena de alegría y momentos
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="floating texto mb-3 d-flex justify-content-center"
        >
          inolvidables!
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="d-flex justify-content-center"
        >
          <a
            className="d-flex flex-column justify-content-center align-items-center py-3"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4Lh5H5Xw6GAFteWA1UtGUvdGsZGkthDCA7xx3lz44IB3UbQ/viewform?usp=pp_url"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn px-4 pulse">CONFIRMAR ASISTENCIA</button>
          </a>
        </div>
      </div>
    </Asistencia>
  );
};

export default asistencia;
