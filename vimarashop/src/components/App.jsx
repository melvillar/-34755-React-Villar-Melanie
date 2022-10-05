import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './content/Navbar';
import ItemContainer from './content/ItemContainer'
import Item from './content/Item'
import Footer from './content/Footer'
import Contacto from './content/Contacto'
import Cart from './content/Cart'
import About from './content/About'
import Category from './content/Category'
import Sections from './content/Sections'

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemContainer/>} />
                    <Route path="/products/:id" element={<Item/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/Cart" element={<Cart/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/category/:id" element={<Category/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;