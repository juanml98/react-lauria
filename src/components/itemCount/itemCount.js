import { useState } from "react";
import { Button } from "react-bootstrap";



const ItemCount = ({stock, onAdd}) => {
   
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount (count + 1)
    };

    const decrement = () => {
        setCount((valAnt) => (valAnt > 1 ? count - 1 : count));
    }

    const eliminar = () => {
        setCount(1)
    }

    const AgregarCantidad = () =>{
        onAdd(count)
    }

    
    return (
        <div style={{display: "flex"}}> 

            <button className="btn" style={{margin:"10px", backgroundColor:"red"}} onClick={decrement} label='-'>-</button>
            <h4>{count}</h4>
            <button className="btn" style={{margin:"10px", backgroundColor:"green"}} onClick={increment} label='+'>+</button>
            <button className="btn" style={{margin:"5px"}} onClick={eliminar}>Eliminar</button>
            <button className="btn" style={{margin:"5px"}} onClick={AgregarCantidad}>Agregar al carrito</button>
            
        </div>
    );
};

export default ItemCount