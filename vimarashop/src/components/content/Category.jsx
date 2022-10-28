import {useState, useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../service/functions';
const Category = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/products.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto[0] === id )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"./assets/" + producto.imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">Detalle: {producto[1].detalle}</p>
                            <p className="card-text">Precio: {producto[1].precio}</p>
                            <p className="card-text">Stock: {producto[1].stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Diseño</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div>
            {productos}     
        </div>      
            
        
    );
}

export default Category;