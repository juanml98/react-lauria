import { createContext, useState } from "react";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }
    
    const getQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
          accu += prod.cantidad;
        })
    
        return accu;
    }

    const getProduct = (id) =>{
        return cart.find(prod => prod.id === id)
    }

    function priceInCart() {
        let totalPrice = 0;
        cart.forEach((product) => totalPrice = totalPrice + (product.price*product.cantidad))
        return totalPrice;
    }

    function removeItem(idRemove) {
        const newCart = [...cart];
        newCart.pop();
        setCart(newCart);
      }
    
    return(
        <cartContext.Provider value={{cart, addItem, getQuantity, removeItem, priceInCart, getProduct}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext 