import React, {useState, useEffect, useContext} from 'react';
import { consultarBDD } from '../../service/functions';
import { DarkModeContext } from '../../context/DarkModeContext';
import {Link} from 'react-router-dom'
import "../styles/Products.css"

const Home = () => {
    const [productos, setProductos] = useState([]);

    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        consultarBDD('./json/products.json').then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto row g-0" key={producto[0]}>
                    <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Detalle: {producto[1].detalle}</p>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Stock: {producto[1].stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);

    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            {productos}     
            
        </div>      
        
    );
}

export default Home;