import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export function Navegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-start flex-grow-1 pe-3">
            <Navbar.Brand href="/bienvenida">
              <img
                alt="S3 Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav.Link href="/bienvenida"><b>Inicio</b></Nav.Link>
            <NavDropdown title="Archivos" id="basic-nav-dropdown">
              <NavDropdown.Item href="archivos">Ver Archivos</NavDropdown.Item>
              <NavDropdown.Item href="/archivos-crear">
                Crear Archivos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Datos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/datos">Ver Datos</NavDropdown.Item>
              <NavDropdown.Item href="/datos-crear">
                Crear Datos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
