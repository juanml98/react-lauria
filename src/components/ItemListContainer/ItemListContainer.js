import React from "react";
import Item from "../Item/Item";

function ItemListContainer (props) {
    return(
        <div>
            <h1>{props.greeting}</h1>
            <h2>
                Nuestros productos
            </h2>
            <Item title="iPhone X" price={400} img='https://http2.mlstatic.com/D_NQ_NP_719513-MLA31003080298_062019-O.webp'/>
            <Item title="iPhone 11" price={600} img='https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp'/>

        </div>
    );
}

export default ItemListContainer;