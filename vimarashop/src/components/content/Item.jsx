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
                    <section className="contenedorDetalle">
                    <div className="imgDetalle">
                        <img src={`../assets/${producto.imagen}`}  className="img-fluid rounded-start imgDetalle" alt="..." />
                    </div>
                    <div className="detalle">
                        <h1 className="card-title">{producto.nombre}</h1>          
                        <p className="card-text"> Precio: {producto.precio}</p>
                        <p className="card-text"> Stock disponible: {producto.stock}</p>
                        <button className='btn btn-dark'>Agregar</button>
                    </div>
                </section> 

                ): <h1>Loading...</h1>
            }
        </>
    );
}

export default Item;