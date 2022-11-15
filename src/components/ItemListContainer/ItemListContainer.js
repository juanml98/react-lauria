import {useState, useEffect} from "react";
import Item from "../Item/Item";
import getItems from "../../promises/mockService";
import { getItemsByCategory } from "../../promises/mockService";
import "./itemlist.css"
import { useParams } from "react-router-dom";

function ItemListContainer () {

    const [products, setProducts] = useState([]);

    const {category} = useParams();

    /* async function getItemsAsync() {
        let respuesta = await getItems();
        setProducts(respuesta)
    } */


    useEffect(() => {
        if(!category){
            getItems().then(response => {
                setProducts(response)
            })
        }else{
            getItemsByCategory(category).then(response => {
                setProducts(response)
            })
        }
    }, [category])

    return(
        <div className="item-list">
            {
                products.map( (product) => {
                    return (
                        <Item 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        />
 
                    )
                })
            }
        </div>
    );
}

export default ItemListContainer;