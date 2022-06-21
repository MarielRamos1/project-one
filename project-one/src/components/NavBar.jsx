import React from 'react';
import './NavBar.css';

const navBar = () => {
    return (
            <ul style={{width: '100%'}}>
                <li><a className="active" href="#home">My melody</a></li>
                <li><a href="#news">Novedades</a></li>
                <li><a href="#contact">Productos</a></li>
                <li><a href="#about">¡Comunicate con nosotros!</a></li>
            </ul>
    )
}

export default navBar;