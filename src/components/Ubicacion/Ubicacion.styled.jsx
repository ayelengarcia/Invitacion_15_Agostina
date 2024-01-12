import styled from "styled-components";

export const Ubicacion = styled.div`
  background-image: url(/assets/fondo.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  padding-top: 100px;

  h1 {
    font-family: "Lavishly Yours";
    line-height: 120% !important;
    font-size: 5rem !important;
    z-index: 10000;
    position: relative;
    color: white;
  }

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    margin: 0px;
    letter-spacing: 2px;
  }

  .ubica {
    position: relative;
  }

  .bi-whatsapp {
    color: #bb5268;
  }

  .text {
    font-size: 1.5rem;
    color: #d2a84e;
  }

  .ubica {
    color: black;
  }

  .text-2 {
    font-size: 1.1rem;
    letter-spacing: 2px;
    color: white;
  }

  .text-3 {
    font-size: 1.4rem;
    letter-spacing: 1px;
    color: white;
  }

  .text-4 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: #d2a84e;
  }

  .bi-clipboard {
    color: #eeadb9;
    padding: 2px;
  }

  .wpp {
    font-size: 1.1rem;
    letter-spacing: 2px;
    padding: 2px 5px;
  }

  .wpp:hover {
    cursor: pointer;
    background-color: #f0e0e372;
    border-radius: 5px;
    transition: 0.5s;
  }

  .wpp:hover > .bi-clipboard {
    color: #bb5268;
    transition: 0.5s;
  }

  .copiado {
    font-size: 0.9rem;
    position: absolute;
    background-color: black;
    color: white;
    padding: 3px;
    border-radius: 3px;
    bottom: 10%;
    right: 0;
  }

  a {
    text-decoration: none;
  }

  .btn {
    border-radius: 50px;
    background: #bb5268;
    color: #f9f9f9;
  }

  .btn:hover {
    background: #c66c7f;
  }

  .iframe {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.288);
  }

  @media (max-width: 769px) {
    background-image: url(/assets/fondomobile2.png);
    background-size: cover;

    .contador {
      border-radius: 15px;
    }

    .px-5 {
      padding-right: 2rem !important;
      padding-left: 2rem !important;
    }

    .cont {
      width: 45px;
      height: 35px;
      border-radius: 5px;
      font-size: 1.2rem;
      letter-spacing: 2px;
      border-radius: 3px;
    }

    .text {
      font-size: 0.7rem;
    }

    .text-2 {
      font-size: 0.95rem;
      letter-spacing: 1px;
    }

    .text-3 {
      font-size: 1rem;
    }

    .text-4 {
      font-size: 0.9rem;
    }

    .wpp {
      font-size: 0.9rem;
    }

    .copiado {
      font-size: 0.7rem;
    }

    .btn {
      font-size: 0.9rem;
    }

    .bi-geo-alt-fill {
      font-size: 0.9rem;
    }
  }
`;
