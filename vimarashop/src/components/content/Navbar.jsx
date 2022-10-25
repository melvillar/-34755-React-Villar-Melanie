import { Link } from 'react-router-dom';
import Dropdown from '../layout/Dropdown';
import Search from '../layout/Search'
import Sections from '../layout/Sections'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Navbar = () => {
  const listDropdown = ["A color", "Blanco y Negro"] 
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">VIMARASHOP</Link>
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
