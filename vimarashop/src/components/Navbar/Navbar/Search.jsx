import React from 'react';


const Search = ({busqueda}) => {
    return (
        <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder= {busqueda} />
            
            <button><i class="fa-solid fa-cart-shopping"></i></button>
        </form>
    );
}

export default Search;
