import styled from "styled-components";

export const Title = styled.div`
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1 1s ease-out;
  background-image: url(/assets/fondomobile.png);
  background-size: cover;
  padding: 0px !important;

  .light {
    position: absolute;
    width: 0px;
    opacity: 0.55;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  .x1 {
    animation: floatUp 4s infinite linear;
    transform: scale(1);
  }

  .x2 {
    animation: floatUp 7s infinite linear;
    transform: scale(1.6);
    left: 15%;
  }

  .x3 {
    animation: floatUp 2.5s infinite linear;
    transform: scale(0.5);
    left: -15%;
  }

  .x4 {
    animation: floatUp 4.5s infinite linear;
    transform: scale(1.2);
    left: -34%;
  }

  .x5 {
    animation: floatUp 8s infinite linear;
    transform: scale(2.2);
    left: -57%;
  }

  .x6 {
    animation: floatUp 3s infinite linear;
    transform: scale(0.8);
    left: -81%;
  }

  .x7 {
    animation: floatUp 5.3s infinite linear;
    transform: scale(3.2);
    left: 37%;
  }

  .x8 {
    animation: floatUp 4.7s infinite linear;
    transform: scale(1.7);
    left: 62%;
  }

  .x9 {
    animation: floatUp 4.1s infinite linear;
    transform: scale(0.9);
    left: 85%;
  }

  @-webkit-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-moz-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @-o-keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
  @keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }

  .presentacion {
    color: black;
    padding-top: 30px !important;
    overflow: hidden;
  }

  h1 {
    font-family: "Lavishly Yours";
    line-height: 150% !important;
    font-size: 7rem;
    z-index: 10000;
    position: relative;
    color: white;
    margin: 50px;
  }

  .años {
    position: relative;
    font-size: 4.5rem;
    top: -140px;
    z-index: 10001;
    color: #d2a84e;
  }

  .agos {
    position: relative;
    font-size: 3.5rem;
    top: -180px;
    z-index: 10001;
    color: white;
  }

  @media (min-width: 800px) {
    background-image: url(/assets/fondo.png);

    h1 {
      font-size: 8rem;
    }

    .años {
      font-size: 6rem;
      top: -170px;
    }

    .agos {
      font-size: 6rem;
      top: -220px;
    }

    .x1 {
      animation: floatUp 4s infinite linear;
      transform: scale(0.5);
    }

    .x2 {
      animation: floatUp 7s infinite linear;
      transform: scale(1);
      left: 15%;
    }

    .x3 {
      animation: floatUp 2.5s infinite linear;
      transform: scale(0.2);
      left: -15%;
    }

    .x4 {
      animation: floatUp 4.5s infinite linear;
      transform: scale(0.8);
      left: -34%;
    }

    .x5 {
      animation: floatUp 8s infinite linear;
      transform: scale(1.8);
      left: -57%;
    }

    .x6 {
      animation: floatUp 3s infinite linear;
      transform: scale(0.5);
      left: -81%;
    }

    .x7 {
      animation: floatUp 5.3s infinite linear;
      transform: scale(2);
      left: 37%;
    }

    .x8 {
      animation: floatUp 4.7s infinite linear;
      transform: scale(1.1);
      left: 62%;
    }

    .x9 {
      animation: floatUp 4.1s infinite linear;
      transform: scale(0.5);
      left: 85%;
    }
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
`;
