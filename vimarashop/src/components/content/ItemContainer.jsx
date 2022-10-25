import React, {useState, useEffect, useContext} from 'react';
import Item from './Item'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../service/functions';
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
        
            <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'} style={{maxWidth: '540px'}}>
                <Item producto={producto}/>
            </div>
    );
}

export default ItemContainer;