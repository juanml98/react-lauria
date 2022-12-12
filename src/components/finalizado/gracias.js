import React from 'react';
import { useParams } from 'react-router-dom';

export default function Gracias() {
  const orderId = useParams().orderId
  
  return (
    <h1 style={{color:'white'}}>¡Gracias por tu compra!🚀</h1>
  )
}
