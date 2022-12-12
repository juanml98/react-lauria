import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getItemById } from "../../promises/firestore";
import { DotSpinner } from '@uiball/loaders'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    const {id} = useParams();
    
    useEffect(() => {
        getItemById(id).then(response => {
        setProduct(response);
        setisLoading(false);
    })
    },[]);

    if (isLoading)
    return (<DotSpinner 
         size={60}
         speed={0.7} 
         color="white" 
    />)
    
    return(
        <div>
           <ItemDetail {...product}/>
        </div>
    );
};

export default ItemDetailContainer;