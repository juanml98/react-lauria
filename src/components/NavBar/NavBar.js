import React from 'react';
import CartWidget from '../cartWidget/cartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';



function NavBar () {
    return (
             
        <nav className='navbar'>
            
            <div style={{padding: '45px'}}>
                <Link to='/' className='logo'><h1>iCoder</h1></Link>
            </div>

        <div className='nav-menu'>
               
            <div className='nav-listado'>   
                
                <Link to='/category/iPhone' className='listado-hijo' >iPhone</Link>
                
                <Link to='/category/iPad' className='listado-hijo' >iPad</Link>
                
                <Link to='/category/accesorios' className='listado-hijo' >Accesorios</Link>
                
                <Link to='/contacto/' className='listado-hijo' >Contacto</Link>
        

                <Link to='/cart/' className='carrito'>

                <CartWidget />
                
                </Link>
            
            </div>
        </div>
            
        </nav>
    );
  }

export default NavBar;