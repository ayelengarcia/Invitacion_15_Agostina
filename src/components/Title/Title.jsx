import { Title } from "./Title.styled";
import "animate.css";

const title = () => {
  return (
    <Title
      id="title"
      className="d-flex justify-content-center fondo-presentacion m-0 py-5"
    >
      <div className="presentacion d-flex flex-column align-items-center mt-5 px-1 pt-5">
        <div className="mt-5 ">
          <h1 className="d-flex justify-content-center mt-5 animate__animated animate__zoomIn">
            15
          </h1>
          <p className="años d-flex justify-content-center animate__animated animate__backInUp">
            años
          </p>
          <p className="agos d-flex justify-content-center agos animate__animated animate__fadeInRight">
            DE AGOSTINA
          </p>
        </div>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      </div>
    </Title>
  );
};

export default title;
