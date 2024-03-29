import styled from "styled-components";

export const Asistencia = styled.div`
  background: white;
  transform: skewY(3deg);
  transform-origin: top right;

  .box {
    transform: skewY(-3deg) !important;
    margin-bottom: 40px;
  }

  .div-projects {
    overflow: hidden;
  }

  .texto {
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .icon {
    width: 4rem;
  }

  a {
    text-decoration: none;
  }

  .btn {
    padding: 8px 20px;
    font-size: 1rem;
    border: 2px solid #d2a84e;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 0px;
    transition: 0.25s;
    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  .btn: hover {
    color: #d2a84e;
  }

  .pulse {
    --color: #d2a84e;
    --hover: #d2a84e;
  }

  @-webkit-keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }

  @media (min-width: 769px) {
    .box {
      padding: 0px;
    }
  }
`;
