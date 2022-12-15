import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Colection from './views/Colection';
import Product from './views/Product';
import Gallery from './views/Gallery';
import About from './views/About';
import Contact from './views/Contact';
import Login from './views/Login';
import Admin from './views/Admin';
import NotFound from './views/NotFound';
import { ProtectedLogin, ProtectedAdmin } from './components/ProtectedRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/coleccion' element={<Colection />} />
            <Route path='/coleccion/:category' element={<Colection />} />
            <Route path='/coleccion/:id' element={<Product />} />
            <Route path='/galeria' element={<Gallery />} />
            <Route path='/empresa' element={<About />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/acceso/login' element={
              <ProtectedLogin>
                <Login />
              </ProtectedLogin>
            } />
            <Route path='/acceso/administrador' element={
              <ProtectedAdmin>
                <Admin />
              </ProtectedAdmin>
            } />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
    );
};