import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

import api from "../apis/api";

function Profile() {
  const [state, setState] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    document: "",
    pis: "",
    address: {
      street: "",
      complement: "",
      country: "",
      city: "",
      district: "",
      postalCode: "",
      number: "",
    },
  });

  const { id } = useParams();

  const authContext = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    async function FetchProfile() {
      try {
        const response = await api.get("/profile");
        console.log("eu sou Response no Profile ---> ", response);

        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  function handleLogOut() {
    authContext.setLoggedInUser({});
    localStorage.removeItem("loggedInUser");
    history.push("/");
  }

  return (
    <div>
      <h1 className="mb-3">Olá, {state.name}!</h1>
      <hr />
      <h1 className="mb-4">Meu Perfil</h1>
      <p>
        <strong>Nome: </strong>
        {state.name}
      </p>
      <p>
        <strong>E-mail: </strong>
        {state.email}
      </p>
      <p>
        <strong>CPF: </strong>
        {state.document}
      </p>
      <p>
        <strong>Pis: </strong>
        {state.pis}
      </p>

      <h2 className="mb-4 mt-4">Endereço</h2>

      <p>
        <strong>Rua: </strong>
        {state.address.street}
      </p>
      <p>
        <strong>Numero: </strong>
        {state.address.number}
      </p>
      <p>
        <strong>Cidade: </strong>
        {state.address.city}
      </p>
      <p>
        <strong>Estado: </strong>
        {state.address.district}
      </p>
      <p>
        <strong>Pais: </strong>
        {state.address.country}
      </p>
      <p>
        <strong>Complemento: </strong>
        {state.address.complement}
      </p>
      <p>
        <strong>CEP: </strong>
        {state.address.postalCode}
      </p>
      <div>
        <Link className="btn btn-warning" to={`/editUser/${id}`}>
          Editar Perfil
        </Link>
        <button
          type="button"
          className="btn btn-danger m-3"
          onClick={handleLogOut}
        >
          Sair da Conta
        </button>
      </div>
    </div>
  );
}

export default Profile;
