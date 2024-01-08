import { Title } from "./Title.styled";
import "animate.css";

const title = () => {
  return (
    <Title
      id="title"
      className="d-flex justify-content-center fondo-presentacion m-0 py-5"
    >
      <div className="col-12 presentacion d-flex flex-column align-items-center mt-5 px-1 pt-5">
        <div className="mt-5">
          <h1 className="d-flex justify-content-center mt-5 animate__animated animate__zoomIn">
            15
          </h1>
          <p className="d-flex justify-content-center años animate__animated animate__backInUp">
            años
          </p>
          <p className="d-flex justify-content-center agos animate__animated animate__fadeInRight">
            DE AGOSTINA
          </p>
        </div>
        <div className="snow"></div>
      </div>
    </Title>
  );
};

export default title;
