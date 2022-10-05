import React from 'react';

const Item = ({producto}) => {
    return (
        <>
            <div className="row g-0">
    <div className="col-md-4">
        <img src={`../assets/${producto.imagen}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.precio}</p>
            <p className="card-text">{producto.stock}</p>
            <button className='btn btn-dark'>Agregar</button>
        </div>
        </div>
    </div>

        </>
    );
}

export default Item;