import React from 'react';
import {FaCartPlus} from "react-icons/fa";
import "../styles/Navbar.css"


const Search = ({busqueda}) => {
    return (
        <form className="d-flex">
            <div className="cart">
                <FaCartPlus></FaCartPlus>
            </div>
            <input className="form-control me-sm-2" type="text" placeholder= {busqueda} />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
    );
}

export default Search;
