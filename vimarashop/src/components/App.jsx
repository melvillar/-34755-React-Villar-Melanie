import React from 'react';
import Navbar from './content/Navbar';
import CartItem from './content/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used borrar esto

const App = () => {
    return (
        <>
        <Navbar></Navbar>
        <CartItem></CartItem>
        </>
    );
}

export default App;
