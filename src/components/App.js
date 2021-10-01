import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Profile from "../auth/Profile";
import { AuthContextComponent } from "../auth/authContext";
import EditeUser from "../auth/account/EditUser";
import NaveBar from "./Navebar";

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthContextComponent>
            <NaveBar/>
            <div className="container mt-3">
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
              <Route path="/editUser/:id" component={EditeUser} />
            </div>
            </AuthContextComponent>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
