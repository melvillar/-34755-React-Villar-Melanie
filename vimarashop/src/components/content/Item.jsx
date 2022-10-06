import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../styles/Products.css"


const Item = ({}) => {
    const [producto, setProducto] = useState()
    const params = useParams();
    const productId = params.id;
    console.log (productId)


const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    console.log(productos)
    return productos
}

useEffect(() => {
    consultarBDD('../json/products.json').then(productos => {
        const prod = productos.find (item =>item.id === productId)
        console.log(prod)
        setProducto(prod)
    })

}, []);

    return (
        <>
            {
                producto ? (
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`../assets/${producto.imagen}`}  className="img-fluid rounded-start imgDetalle" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body detalle">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.precio}</p>
                                    <p className="card-text">{producto.stock}</p>
                                    <button className='btn btn-dark'>Agregar</button>
                            </div>
                        </div>
                    </div>  

                ): <h1>Loading...</h1>
            }
        </>
    );
}

export default Item;