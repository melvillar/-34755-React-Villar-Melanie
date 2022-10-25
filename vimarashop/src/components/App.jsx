import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css'
import { DarkModeProvider } from '../context/DarkModeContext';
import Navbar from './content/Navbar';
import Cart from './content/Cart';
import Home from './content/Home';
import About from './content/About';
import Contacto from './content/Contacto';
import ItemContainer from './content/ItemContainer';
import Footer from './content/Footer'
import Category from './content/Category';

const App = () => {

    return (
        <>
        <DarkModeProvider props= {"hola"}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producto/:id" element={<ItemContainer/>} />
                <Route path="/categoria/:id" element={<Category/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Cart/>} />
                <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </DarkModeProvider>
        
        </>
    );
}

export default App;