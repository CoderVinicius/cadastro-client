import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../auth/authContext";

import TextInput from "../../components/TextInput";

function Pis(props) {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [state, setState] = useState({ password: "", pis: "" });
  const [error, setError] = useState(null);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  function handleClose() {
    history.goBack("/login");
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
        <h1 className="mb-5">Entrar</h1>

        <TextInput
          label="Entre com PIS"
          type="number"
          name="pis"
          id="signupFormPis"
          value={state.number}
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
          <button className="btn btn-warning m-3" type="submit">
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

export default Pis;
