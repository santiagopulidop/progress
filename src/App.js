import React from "react";
import "./sass/main.scss";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Aprende from "./pages/Aprende";
import Inspirate from "./pages/Inspirate";
import PopUp from "./components/PopUp";
import { Provider } from "./components/contexto";

function App() {
  return (
    <Provider>
      <div className="App">
        <PopUp />
        <Router>
          <NavBar />
          <Switch>
            <Route path="/blog">
              <Blogs />
            </Route>
            <Route path="/aprende">
              <Aprende />
            </Route>
            <Route path="/inspirate">
              <Inspirate />
            </Route>
            <Redirect exact from="/" to="/aprende" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
