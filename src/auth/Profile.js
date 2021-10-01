import { useState, useEffect } from "react";
import TextProfile from "../components/TextProfile";
import api from "../apis/api";


function Profile() {
  const [state] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    document: "",
    pis: "",
    address: {
      street: "",
      complemento: "",
      city: "",
      district: "",
      postalCode: "",
      number: "",
    }
  });

  useEffect(() => {
    async function FetchProfile() {
      try {
        const response = await api.get("/profile");
        console.log("eu sou Response no Profile ---> ", response);

      } catch (err) {
        console.log(err);
      }
    }
    FetchProfile();
  }, []);

  return (
    <div>
      <TextProfile label="Nome" name={state.name} />
      <TextProfile label="Email" name={state.email} />  
      <TextProfile label="CPF" name={state.document} />
      <TextProfile label="PIS" name={state.pis} />

      <h2 className="mb-4 mt-4">Endereço</h2>

      <TextProfile label="Rua" name={state.address.street} />
      <TextProfile label="Numero" name={state.address.number} />
      <TextProfile label="Cidade" name={state.address.city} />
      <TextProfile label="Estado" name={state.address.district} />
      <TextProfile label="País" name={state.address.country} />
      <TextProfile label="Complemento" name={state.address.neighbourhood} />
      <TextProfile label="CEP" name={state.address.postalCode} />
      
    </div>
  );
}

export default Profile;