import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

function NaveBar() {
  const tokenKey = 'loggedInUser';
  const locationRoute = useLocation();
  const storage = localStorage.getItem(tokenKey);
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [token, setToken] = useState(storage);

  useEffect(() => {
    setToken(localStorage.getItem(tokenKey));
  },[locationRoute.pathname]);
  
  function handleLogOut() {
    authContext.setLoggedInUser({});
    localStorage.removeItem("loggedInUser");
    history.push("/");
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
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
              token && <NavDropdown.Item href="/editUser/:id">Editar Perfil</NavDropdown.Item>
            }
            { 
              token && <button type="button" className="btn btn-primary" onClick={handleLogOut}>Sair</button>
            }
            <NavDropdown.Divider />
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default NaveBar;
