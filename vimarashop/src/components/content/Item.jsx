import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

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
        
    <div className="row g-0">
    <div className="col-md-4">
        <img src={`../imagen/${producto.imagen}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.detalle}</p>
        <p className="card-text">{producto.precio}</p>
        <p className="card-text">{producto.stock}</p>
        <p className='card-text'>{cantidad}</p>
        <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>

        <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>

        <button className='btn btn-dark' onClick={() => agregarProducto(producto, cantidad) }>Agregar Diseño</button>
        </div>
        </div>
    </div>

        </>
    );
}

export default Item;