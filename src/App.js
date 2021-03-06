import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Inicio from './Components/inicio';
import Listar from './Components/listar';
import Agregar from './Components/agregar';
import Eliminar from './Components/eliminar';


function App() {
  return (
    <Router>
      <div className="Container m-5">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">
            <span className="text-success">INICIO</span></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/listar" className="nav-link" activeClassName="active">
                <FontAwesomeIcon icon={faList}/> Listar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/agregar" className="nav-link" activeClassName="active">
                <FontAwesomeIcon icon={faUserPlus}/> Agregar
                </NavLink>
              </li>
            </ul> 
              <input id="inputFiltrar" className="form-control mr-sm-2 col-4" type="text" placeholder="Filtrar ..."/>
              
          </div>
        </nav>

      </div>

      <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/listar">
            <Listar/>
          </Route>
          <Route path="/eliminar/:id" exact>
            <Eliminar />
          </Route>
          <Route path="/agregar">
            <Agregar />
          </Route>
        </Switch>

    </Router>



  );
}

export default App;
