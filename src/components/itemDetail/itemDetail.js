import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemdetail.css";

const ItemDetail = (products) => {
    
    
    return (
        <div className="card">
            <div className="card-img">
            <img src={products.img} alt=""/>
            </div>
            <div className="card-detail">
            <h3>{products.title}</h3>
            <h5>{products.detalle}</h5>
            <p>${products.price}</p>
            </div>

            <div>
            <ItemCount 
            stock={products.stock} 
            initial={1}
            onAdd={(n) => alert (`Se han añadido ${n} productos`)}/>
            </div>
        </div>
    );
}

export default ItemDetail;