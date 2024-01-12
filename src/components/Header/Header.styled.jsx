import styled from "styled-components";

export const Header = styled.header`
  background: rgba(142, 68, 173, 0.13);
  z-index: 999999 !important;
  position: relative;

  .navbar {
    background-color: black;
    color: #f9f9f9;
    padding: 15px 0px;
    justify-content: center;
    align-items: center;
  }

  .contain_menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul,
  .menu,
  .menu-2 {
    text-decoration: none;
    list-style: none;
    color: #f9f9f9;
  }

  .logo_menu {
    width: 2.7rem;
  }

  .menu {
    padding: 8px 20px;
    font-size: 1rem;
    border: 1px solid black;
  }

  .menu:hover {
    border: 1px solid #f9f9f9;
  }

  .menu:hover,
  .menu-2:hover {
    transition: 0.5s;
  }

  .menu-2 {
    padding: 12px;
    font-size: 0.8rem;
  }

  .ubica,
  .bi-geo-alt-fill {
    color: #f9f9f9;
    font-size: 0.6rem;
  }

  @media (max-width: 800px) {
    .menu {
      font-size: 0.9rem;
    }
  }
`;
