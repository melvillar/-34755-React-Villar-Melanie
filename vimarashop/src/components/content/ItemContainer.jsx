import React, {useState, useEffect, useContext} from 'react';
import Item from './Item'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../service/functions';
import "../styles/Products.css"
import { DarkModeContext } from '../../context/DarkModeContext';

const ItemContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        consultarBDD('../json/products.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
    })

    }, [])

    return (
        <div className="row">
            {producto}     
        </div>      
    );
}

export default ItemContainer;