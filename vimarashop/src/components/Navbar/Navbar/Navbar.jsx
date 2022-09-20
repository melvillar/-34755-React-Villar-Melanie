import React from 'react';
import Dropdown from './Dropdown';
import Search from './Search';
import Sections from './Sections';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const listDropdown = ["Cosmic Sea", "Caudritos", "Animalitos", "Bestiario", "Luna Mística", "Fantasy"] 
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">VIMARASHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Sections></Sections>
              <Dropdown lista = {listDropdown}></Dropdown>
            </ul>
            <Search busqueda= "Buscar Colecciones"></Search>
          </div>
        </div> 
      </nav>          
    );
}

export default Navbar;