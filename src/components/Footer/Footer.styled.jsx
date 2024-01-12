import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;

  .dev {
    background-color: black;
    z-index: 9999;
    color: white;
  }

  .dev-text,
  .bi-instagram {
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    padding: 1px 7px;
  }

  a:hover {
    background-color: white;
    color: black;
    border-radius: 3px;
    transition: 0.5s;
  }

  @media (max-width: 769px) {
    .corazon {
      width: 70px;
    }

    .fin {
      font-size: 1rem !important;
    }

    .gracias {
      font-size: 2.5rem !important;
    }

    .dev-text {
      font-size: 0.7rem;
    }
  }
`;
