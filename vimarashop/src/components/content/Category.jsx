import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}
const Category = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.categoria === parseInt(id) )
            console.log(productosCategoria)
            const cardProducto = productosCategoria.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"../assets/" + producto.imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/products/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
        })
    }, [id]);
    return (
        <div className="row">
            {productos}
        </div>
            
        
    );
}

export default Category;