import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpBwZzFu2vMp4IGnGtfDBfEJDmkt2C6rw",
    authDomain: "vimarashop.firebaseapp.com",
    projectId: "vimarashop",
    storageBucket: "vimarashop.appspot.com",
    messagingSenderId: "497287276094",
    appId: "1:497287276094:web:f172e891386e3316ea536f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    console.log(prod)
    return prod
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
}

export {cargarBaseDeDatos, getProductos, getProducto}