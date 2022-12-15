import { useState } from "react";
import './itemCount.css'

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

            <button className="button-1" onClick={decrement} label='-'>-</button>
            <h4>{count}</h4>
            <button className="button-2" onClick={increment} label='+'>+</button>
            <button className="button-3" onClick={eliminar} style={{color:"red"}}>Eliminar</button>
            <button className="button-4" onClick={AgregarCantidad}>Agregar al carrito</button>
            
        </div>
    );
};

export default ItemCount