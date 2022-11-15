import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getItemById } from "../../promises/mockService";

function ItemDetailContainer () {

    const [product, setProduct] = useState([]);
    const {idItem} = useParams();

    
    /*async function getItemsAsync() {
        let response = await getItem(id);
        setProduct(response)
    } 

    
        getItemsAsync();
    }, []);*/
    
    useEffect(() => {
        getItemById(idItem).then(response => {
        setProduct(response)
    })
    },[]);


    return(
           <ItemDetail product={product}/>
    );
};

export default ItemDetailContainer;