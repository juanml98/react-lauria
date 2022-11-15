import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
   
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

    
    return (
        <div style={{display: "flex"}}> 

            <button className="btn" style={{margin:"5px"}} onClick={decrement} label='-'>-</button>
            <h4>{count}</h4>
            <button className="btn" style={{margin:"5px"}} onClick={increment} label='+'>+</button>
            <button className="btn" style={{margin:"5px"}} onClick={eliminar}>Eliminar</button>
            <button className="btn" style={{margin:"5px"}} onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    alert("No hay suficientes productos");
                }
            }}>Agregar al carrito</button>
            
        </div>
    );
};

export default ItemCount