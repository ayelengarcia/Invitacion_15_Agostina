/* eslint-disable react/jsx-no-target-blank */
import { Footer } from "./Footer.styled";

const footer = () => {
  return (
    <Footer className="d-flex  flex-column">
      <div className="dev d-flex justify-content-between align-items-center">
        <p className="dev-text  m-0 p-2">© Copyright - 2023</p>

        <p className="dev-text d-flex justify-content-between align-items-center m-0 p-2">
          Desarrollo Web:{" "}
          <a
            className="dev-text d-flex align-items-center no-wrap ms-1"
            href="https://brujulaportfolio.netlify.app/"
            target="_blank"
          >
            <i className="bi bi-suitcase-lg pe-1"></i>
            brujula
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default footer;
