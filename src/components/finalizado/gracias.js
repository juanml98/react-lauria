import React from 'react';
import { useParams } from 'react-router-dom';

export default function Gracias() {
  const idOrder = useParams().idOrder
  
  return (
    <div>
    <h1 style={{color:'white'}}>¡Gracias por tu compra!🚀</h1>
    <h3>El ID de su compra es: 
      <p style={{color:"green"}}>{idOrder}</p>
    </h3>
    <img src='https://media.makeameme.org/created/bizness.jpg' alt=''/>
    </div>
  )
}
