import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../apis/api";
import TextInput from "../components/TextInput";
const BrV = require("br-validations");

function Signup(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    document: "",
    pis: "",
    street: "",
    country: "",
    city: "",
    district: "",
    postalCode: "",
    number: "",
    complement: "",
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const history = useHistory();
  function handleClose() {
    history.goBack("/");
  }

  async function handleSubmit(event) {
    event.preventDefault(props);
    const isCpfValid = BrV.cpf.validate(state.document);
    const isPisValid = BrV.pis.validate(state.pis);
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (!state.password.match(regex)) {
      alert(
        "Senha deve conter: Mínimo de oito caracteres, pelo menos, uma letra maiúscula, uma letra minúscula, um número e um caractere especial "
      );
      return;
    }
    if (!isCpfValid) {
      alert("CPF inválido");
      return;
    } else if (!isPisValid) {
      alert("PIS inválido");
      return;
    }

    try {
      const {
        street,
        country,
        city,
        district,
        postalCode,
        number,
        complement,
      } = state;

      const response = await api.post("/signup", {
        ...state,
        address: {
          street,
          country,
          city,
          district,
          postalCode,
          number,
          complement,
        },
      });
      props.history.push("/login");
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mb-2">Cadastro</h1>
      <TextInput
        label="Nome Completo"
        id="name"
        type="text"
        value={state.name}
        onChange={handleChange}
        name="name"
        required={true}
      />
      <TextInput
        label="E-mail"
        id="email"
        type="email"
        value={state.email}
        onChange={handleChange}
        name="email"
        required
      />
      <TextInput
        label="Senha"
        id="password"
        type="password"
        value={state.password}
        onChange={handleChange}
        name="password"
        required
      />
      <TextInput
        label="CPF"
        id="document"
        type="number"
        maxlength="11"
        value={state.document}
        onChange={handleChange}
        name="document"
        required
      />
      <TextInput
        label="PIS"
        id="pis"
        type="number"
        value={state.pis}
        onChange={handleChange}
        name="pis"
        required
      />
      <h3 className="mb-3">Endereço</h3>
      <TextInput
        label="Rua"
        id="street"
        type="text"
        value={state.street}
        onChange={handleChange}
        name="street"
        required
      />
      <TextInput
        label="Numero"
        id="number"
        type="text"
        value={state.number}
        onChange={handleChange}
        name="number"
        required
      />
      <TextInput
        label="País"
        id="country"
        type="text"
        value={state.country}
        onChange={handleChange}
        name="country"
        required
      />
      <TextInput
        label="Cidade"
        id="city"
        type="text"
        value={state.city}
        onChange={handleChange}
        name="city"
        required
      />
      <TextInput
        label="Estado"
        id="district"
        type="text"
        value={state.district}
        onChange={handleChange}
        name="district"
        required
      />
      <TextInput
        label="CEP"
        id="postalCode"
        type="number"
        value={state.postalCode}
        onChange={handleChange}
        name="postalCode"
        required
      />
      <TextInput
        label="Complemento"
        id="complement"
        type="text"
        value={state.complement}
        onChange={handleChange}
        name="complement"
      />
      <div className="form-group">
        <button className="btn btn-warning m-2" type="submit">
          Save
        </button>
        <button className="btn btn-warning" onClick={handleClose}>
          Voltar
        </button>
      </div>
    </form>
  );
}

export default Signup;
