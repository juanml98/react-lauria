import React from "react";
import "./item.css"

function Item(props) {
    return (
        <div className="card">
            <div className="card-img">
            <img src={props.img} alt={props.title}/>
            </div>
            <div className="card-detail">
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            </div>
        </div>
    );
}

export default Item;