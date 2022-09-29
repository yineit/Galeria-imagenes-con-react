
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <Header title="Galería de Imágenes con React" />
            <Card url="https://cdn.pixabay.com/photo/2013/07/02/22/20/bouquet-142876_1280.jpg" title="Rosas" description="Ramo de rosas arreglo floral" />
            <Card url="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg" title="Rosa Gotas de Rocío" description="Hermosa flor azul" />
            <Card url="https://cdn.pixabay.com/photo/2016/10/25/15/55/book-1769228_1280.jpg" title="Libro y Rosas" description="Libro abierto páginas Rosas" />
            <Footer piepagina="Todos los derechos reservados | Yineska Verde" />
            
        </div>
    );
}

export default App;