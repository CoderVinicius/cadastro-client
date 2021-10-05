import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
    }
  });

  const { id } = useParams();

  useEffect(() => {
    async function FetchProfile() {
      try {
        const response = await api.get("/profile");
        console.log("eu sou Response no Profile ---> ", response);

        setState({ ...response.data,   });

      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  return (
    <div>
      <h1>Olá, {state.name}!</h1>  
      <hr />
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
      <Link className="btn btn-primary" to={`/editUser/${id}`} >
        Editar Perfil
      </Link>
    </div>
  );
}

export default Profile;