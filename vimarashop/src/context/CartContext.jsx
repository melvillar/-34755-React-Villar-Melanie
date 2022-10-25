import React, {createContext, useState} from 'react';

const CartContext = createContext()

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const prodCarrito = {...prod, cantidad: cant}
            aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    return (
        <>
            <CartContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
                    {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CartProvider};