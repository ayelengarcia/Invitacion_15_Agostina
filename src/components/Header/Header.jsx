import { Header } from "./Header.styled";

const header = () => {
  return (
    <Header id="header">
      <div className="navbar">
        <div className="contain_menu px-3">
          <a
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <img src="/assets/logo-menu.png" alt="Logo" className="logo_menu" />
          </a>
          <ul className="d-flex justify-content-end align-items-center m-0 p-0 gap-md-5">
            <li>
              <a className="menu d-flex" href="index.html#invitacion">
                Invitación
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#ubicacion">
                Ubicación
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#asistencia">
                Asistencia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  );
};

export default header;
