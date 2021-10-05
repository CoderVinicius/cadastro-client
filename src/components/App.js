import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Profile from "../auth/Profile";
import { AuthContextComponent } from "../auth/authContext";
import EditUser from "../auth/account/EditUser";
import NaveBar from "./Navebar";
import DeleteAccount from "../auth/account/Delete";
import Home from "./Home";
import Switch from "react-bootstrap/esm/Switch";

function App() {
    return (
      <BrowserRouter>
          <AuthContextComponent> 
            <Switch>
              <NaveBar/>
              <div className="container mt-3"> 
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile/:id" component={Profile} />
                <Route exact path="/editUser/:id" component={EditUser} />
                <Route exact path="/deleteUser/:id" component={DeleteAccount} />
              </div>
            </Switch>
          </AuthContextComponent>
      </BrowserRouter>
    );
}

export default App;
