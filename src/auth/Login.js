import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../apis/api";

import { AuthContext } from "../auth/authContext";

import TextInput from "../components/TextInput";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [error, setError] = useState(null);

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
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      const id = response.data.user._id;

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setError(null);

      props.history.push(`/profile/${id}`);
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <div className="login-buttons">
          <Link className="btn btn-warning m-2" to={"/login/cpf"}>
            Entrar com CPF
          </Link>
          <Link className="btn btn-warning" to={"/login/pis"}>
            Entrar com PIS
          </Link>
        </div>
        <TextInput
          label="Entre com E-mail"
          type="email/number"
          name="email"
          id="signupFormEmail"
          value={state.email}
          onChange={handleChange}
        />

        <TextInput
          label="Senha"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          onChange={handleChange}
        />

        {error ? <div className="alert alert-danger">{error}</div> : null}

        <div className="form-group">
          <button className="btn btn-success m-2" type="submit">
            Entrar
          </button>
          <button className="btn btn-warning" onClick={handleClose}>
            Voltar
          </button>
        </div>

        <Link className="pb-3" to="/signup">
          Ainda não é cadastrado? Clique aqui para se cadastrar!
        </Link>
      </form>
    </div>
  );
}

export default Login;
