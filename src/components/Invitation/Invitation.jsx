import { Invitation } from "./Invitation.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const certificate = () => {
  return (
    <Invitation
      id="invitacion"
      className=" row container-fluid d-flex justify-content-center py-5 px-1 mx-0 gap-3"
    >
      <div className="box d-flex flex-column align-items-center gap-1 p-2 ">
        <div
          className="d-flex flex-column align-items-center content_box"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src="/assets/mariposa.png" alt="Logo" className="logo mb-3" />

          <img src="/assets/fecha.png" alt="Logo" className="img_fecha" />

          <p className="texto mt-1">Será una noche mágica de ensueños,</p>
          <p className="texto ">por eso te invito a compartir</p>
          <p className="texto mb-5">esa magia conmigo.</p>
        </div>
      </div>
    </Invitation>
  );
};

export default certificate;
