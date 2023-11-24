import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Navegacion() {
  return (
    <Nav className="navbar" fixed="top">
      <Nav.Item>
        <Nav.Link href="/bienvenida">
          <h4>Inicio</h4>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown
        title="Archivos"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="archivos">Ver Archivos</NavDropdown.Item>
        <NavDropdown.Item href="/archivos-crear">
          Crear Archivos
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title="Datos"
        id="basic-nav-dropdown"
        disabled
      >
        <NavDropdown.Item href="/datos">Ver Datos</NavDropdown.Item>
        <NavDropdown.Item href="/datos-crear">Crear Datos</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
