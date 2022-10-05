import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "../styles/Products.css"

const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}
const ItemContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD('./json/products.json').then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto row g-0" key={producto.id}>
                    <img src={"./assets/" + producto.imagen} className="card-img-top cartImg" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/products/${producto.id}`}>Ver Diseño</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);


    return (
        <div className="row">
            {productos}     
        </div>      
        
    );
}

export default ItemContainer;
