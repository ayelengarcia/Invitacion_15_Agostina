import styled from "styled-components";

export const Ubicacion = styled.div`
  background-image: url(/assets/fondomobile2.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  padding-top: 100px;

  h1 {
    font-family: "Lavishly Yours";
    line-height: 120%;
    font-size: 90px;
    z-index: 10000;
    position: relative;
    color: white;
  }

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 26px;
    font-weight: 600;
    color: white;
    margin: 0px;
  }

  .text {
    font-size: 24px;
    color: #d2a84e;
  }

  .text-2 {
    font-size: 18px;
    letter-spacing: 2px;
    color: white;
  }

  .text-3 {
    font-size: 20pxrem;
    letter-spacing: 1px;
    color: white;
  }

  .text-4 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #d2a84e;
  }

  .iframe {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.288);
  }

  @media (min-width: 769px) {
    background-image: url(/assets/fondo.png);
    background-size: cover;

    .cont {
      font-size: 40px;
      letter-spacing: 2px;
    }

    .text {
      font-size: 24px;
    }

    .text-2 {
      font-size: 20px;
      letter-spacing: 1px;
    }

    .text-3 {
      font-size: 24px;
    }

    .text-4 {
      font-size: 20px;
    }
  }
`;
