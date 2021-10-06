import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-brand" href="/">
          PontoTel
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
