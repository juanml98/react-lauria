import { createContext, useState } from "react";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProduct = {
                        ...prod,
                        cantidad: productToAdd.cantidad
                    }
                    return newProduct;
                }else {
                    return prod;
                }
            })
            setCart(newCart)
        }
    }

    const getQuantity = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.count;
        })
    
        return total;
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += (product.price * product.count);
        })
        return total;
    }

    const isInCart = (id) =>{
        return cart.some(product => product.id === id);
    }

    const getProduct = (id) => {
        return cart.find(product => product.id === id);
    }

    const removeItem = (id) =>{
        const newCart =  cart.filter( product => product.id !== id);
        setCart(newCart);
    }

    const cleanCart = () =>{
        const newCart =  cart.filter( product => product.id === -1);
        setCart(newCart);
    }
    
    
    return(
        <cartContext.Provider 
        value={{ 
        cart,
         addItem,
         getQuantity, 
         getProduct, 
         getTotal,
         removeItem, 
         cleanCart
         }}>

            {children}

        </cartContext.Provider>
    );
};

export default cartContext