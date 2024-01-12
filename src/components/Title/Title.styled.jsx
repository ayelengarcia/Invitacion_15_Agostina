import styled from "styled-components";

export const Title = styled.div`
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(/assets/fondo.png);
  background-size: cover;

  .presentacion {
    color: black;
    padding-top: 30px !important;
  }

  h1 {
    font-family: "Lavishly Yours";
    line-height: 150% !important;
    font-size: 10rem !important;
    z-index: 10000;
    position: relative;
    color: white;
  }

  .años {
    position: relative;
    font-size: 7rem !important;
    top: -160px;
    z-index: 10001;
    color: #d2a84e;
  }

  .agos {
    position: relative;
    font-size: 7rem !important;
    top: -200px;
    z-index: 10001;
    color: white;
  }

  .animate__zoomIn {
    animation-duration: 4s;
  }

  .animate__backInUp {
    animation-duration: 4s;
  }

  .animate__fadeInRight {
    animation-duration: 3s;
    animation-delay: 3s;
  }

    @media (max-width: 1000px) {
    background-image: url(/assets/fondomobile.png);
    background-size: cover;
    padding: 0px !important;

    .presentacion {
      padding: 0px !important;
    }

    h1 {
      margin: 0px !important;
      font-size: 5rem !important;
    }

    .años {
      font-size: 3rem !important;
      top: -70px;
    }

    .agos {
      font-size: 3rem !important;
      top: -100px;
  }
`;
