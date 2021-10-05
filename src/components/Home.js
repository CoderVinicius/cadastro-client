import { Link } from "react-router-dom";
import React from "react";

function Home() {
    return(
        <div>
        <h1> Olá Visitante</h1>
            <Link to="/login" className="SaveBTN btn btn-primary">
             Login
            </Link>
            <Link to="/signup" className="SaveBTN btn btn-primary">
              Cadastro
            </Link>
        </div>

)};

export default Home;

