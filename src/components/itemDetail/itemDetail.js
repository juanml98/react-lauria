import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemdetail.css";

function ItemDetail (product)  {

    return (
        <div className="card" key={product.id}>

            <div className="card-img">
            
            <img src={product.img} alt=""/>
            
            </div>

            <div className="card-detail">
            
            <h3>{product.title}</h3>
            
            <h5>{product.detalle}</h5>
            
            <p>${product.price}</p>
            
            </div>

            <div>

            <ItemCount 
            stock={product.stock} 
            initial={1}
            onAdd={(n) => alert (`Se han añadido ${n} productos`)}/>
            
            </div>
        </div>
    );
}

export default ItemDetail;