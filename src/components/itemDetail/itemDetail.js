import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemdetail.css";
import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import Boton from "../mybutton/mybutton";


const ItemDetail = ({id, title, stock, img, detalle, price, cantidad}) => {

    const [isInCart, setIsInCart] = useState(0);

    const {addItem} = useContext(cartContext)

    function onAdd (count) {
        setIsInCart(count);
        addItem({id, title, stock, img, detalle, price, count})
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

            {isInCart ? (
                <Link to="/cart"><Boton>Ir al carrito</Boton></Link>
            ) : (
             
            <ItemCount 
            stock={stock} 
            onAdd={onAdd}/> 
            
            )}    

        </div>
    );
}

export default ItemDetail;