import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getItemById } from "../../promises/mockService";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    
    const {id} = useParams();

    
    /*async function getItemsAsync() {
        let response = await getItem(id);
        setProduct(response)
    } 

    
        getItemsAsync();
    }, []);*/
    
    useEffect(() => {
        getItemById(id).then(response => {
        setProduct(response)
    })
    },[]);


    return(
        <div>
           <ItemDetail {...product}/>
        </div>
    );
};

export default ItemDetailContainer;