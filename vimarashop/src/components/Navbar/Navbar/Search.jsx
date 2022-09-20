import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "../Styles/Navbar.css"


const Search = ({busqueda}) => {
    return (
        <form className="d-flex">
            <div className="cart-widget">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <div className="qty-display">0</div>
            </div>
            <input className="form-control me-sm-2" type="text" placeholder= {busqueda} />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    );
}

export default Search;
