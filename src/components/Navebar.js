import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NaveBar() {
  const tokenKey = 'loggedInUser';
  const locationRoute = useLocation();
  const storage = localStorage.getItem(tokenKey);

  const [token, setToken] = useState(storage);

  useEffect(() => {
    setToken(localStorage.getItem(tokenKey));
  },[locationRoute.pathname]);

  const handlerLogout = () => {
    localStorage.removeItem(tokenKey);
    setToken('');
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/">PontoTel</Navbar.Brand>
        <div className="d-flex justify-content-end ">
        
          <NavDropdown align="end" title={<i className="fas fa-bars" ></i>} id="navbarScrollingDropdown">
            { 
              !token && <NavDropdown.Item href="/login">Entrar</NavDropdown.Item>
            }
            { 
              !token && <NavDropdown.Item href="/signup">Cadastre-se</NavDropdown.Item>
            }
            { 
              token && <NavDropdown.Item href="/profile">Minha Conta</NavDropdown.Item>
            }
            { 
              token && <NavDropdown.Item href="/editUser/:id">Editar Conta</NavDropdown.Item>
            }
            { 
              token && <button type="button" className="btn btn-primary" onClick={handlerLogout}>Sair</button>
            }
            <NavDropdown.Divider />
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default NaveBar;
