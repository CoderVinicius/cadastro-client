import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Profile from "../auth/Profile";
import { AuthContextComponent } from "../auth/authContext";
import EditUser from "../auth/account/EditUser";
import NavBar from "./Navbar";
import DeleteAccount from "../auth/account/Delete";
import Home from "./Home";
import Switch from "react-bootstrap/esm/Switch";
import Cpf from "../auth/account/Cpf";
import Pis from "../auth/account/Pis";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/editUser/:id" component={EditUser} />
            <Route exact path="/deleteUser/:id" component={DeleteAccount} />
            <Route exact path="/login/cpf" component={Cpf} />
            <Route exact path="/login/pis" component={Pis} />
          </div>
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
