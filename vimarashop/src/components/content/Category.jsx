import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../service/functions';
import { DarkModeContext } from '../../context/DarkModeContext';
const Category = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        consultarBDD('../json/products.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id) )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"../imagen/" + producto.imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Detalle: {producto.detalle}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Diseño</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            {productos}     
            
        </div>      
            
        
    );
}

export default Category;