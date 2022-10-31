import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import './NavBar.css';



function NavBar () {
    return (
             
        <nav>
            
        <div className='menu'>
            
            <h1 className='logo'>iCoder</h1>
            
            <ul>   
                <li>
                <a href='/'>iPhone</a>
                </li>
                <li>
                <a href='/'>iPad</a>
                </li>
                <li>
                <a href='/'>Accesorios</a>
                </li>
                <li>
                <a href='/'>Contacto</a>
                </li>

                <div className='carrito'>

                <CartWidget />
                
                </div>
            
            </ul>
        </div>
            
        </nav>
    );
  }

export default NavBar;