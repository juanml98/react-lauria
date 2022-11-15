import React from "react";
import "./item.css"

import { Link } from "react-router-dom";

function Item({title, img, price, id}) {
    
    return (
        <div className="card">
            <div className="card-img">
            <img src={img} alt={title}/>
            </div>
            <div className="card-detail">
            <h3>{title}</h3>
            <p>${price}</p>
            </div>

            <Link to={`/detail/${id}`}>
            <button variant="primary">Ver más</button>
           </Link>
        </div>
    );
}

export default Item;