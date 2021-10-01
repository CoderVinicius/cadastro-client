import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Profile from "../auth/Profile";

function App() {
    return (
      <BrowserRouter>
        <Switch>
      
            <div className="container mt-3">
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
            </div>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
