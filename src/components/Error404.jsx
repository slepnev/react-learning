import React, {Component} from "react";
import {Route, Router} from "react-router-dom"
import Auth from "../containers/Auth"
import Year from "./Year"

class Error404 extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1>Страница не найдена</h1>
        <div className="alert alert-danger mt-2"> Error 404 </ div>
        <Router>
          <Route path="/aut" component={Auth}>
            <Route component={Auth}/>
          </Route>
        </Router>
      </div>
    )
  }
}

export default Error404;