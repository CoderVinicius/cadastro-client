import { useState, useContext} from "react";
import { useHistory, useParams} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../authContext";


import api from "../../apis/api";

function DeleteAccount() {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const authContext = useContext(AuthContext);
  const { id } = useParams();

  function handleClose() {
    setShow(false);
    history.goBack("/"); 
  }

  async function handleDelete() {
    try {
      await api.delete(`/deleteUser/${id}`);
     
      authContext.setLoggedInUser({});
      localStorage.removeItem("loggedInUser");
      history.push("/");
      
    } catch (err) {
      console.error(err.response.data);
    }
  }

  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir essa conta?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Excluir
        </Button>
      </Modal.Footer> 
    </Modal>
  );
}

export default DeleteAccount;