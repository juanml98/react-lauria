import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemdetail.css";
import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({id, title, stock, img, detalle, price, cantidad}) => {

    const [quantity, setQuantity] = useState(0);

    const {addItem, getProduct } = useContext(cartContext)

    const onAdd = (cantidad) =>{
        if(cantidad > 0){
            console.log("todo joya");
            setQuantity(cantidad);
            addItem({id, title, stock, img, detalle, price, cantidad})
        }
    }
    

    return (
        <div className="card" key={id}>

            <div className="card-img">
            
            <img src={img} alt=""/>
            
            </div>

            <div className="card-detail">
            
            <h3>{title}</h3>
            
            <h5>{detalle}</h5>
            
            <p>${price}</p>
            
            </div>

            <div>
           
            <ItemCount 
            stock={stock} 
            initial={getProduct(id)?.quantity}
            onAdd={onAdd}/>
            
            <Link to="/cart"><button>Ir al carrito</button></Link>
                
            </div>
        </div>
    );
}

export default ItemDetail;