import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "../styles/Products.css"

const Item = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    
    const {carrito, agregarProducto, quitarProducto} = useContext(CartContext)

    const cantProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto.stock) {
            setCantidad(cantidad + 1)
        }   
        } else {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    }
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
                        <p className='card-text'>{cantidad}</p>
                        <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>
                        <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>

                        <button className='btn btn-dark'>Agregar</button>
                    </div>
                </section> 

                ): <h1>Loading...</h1>
            }
        </>
    );

}

export default Item;