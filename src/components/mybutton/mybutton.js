import React  from 'react';
import './mybutton.css';

function Boton(props){
 
    return (
    
    <button class="button-5">{props.children}</button>
    
    )
}

export default Boton;