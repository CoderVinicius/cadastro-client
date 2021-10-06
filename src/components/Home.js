import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="home">
      <h1> Olá Visitante!</h1>
      <Link to="/login" className="btn btn-warning">
        Entrar
      </Link>
      <p>Entre na sua Conta Aqui!!</p>
      <hr />
      <Link to="/signup" className="btn btn-warning">
        Cadastre-se
      </Link>
      <p>Ainda não é Cadastrado?</p>
    </div>
  );
}

export default Home;
