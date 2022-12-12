import './cart.css'
import { useContext } from "react";
import cartContext from '../../context/cartContext';
import { createOrder, exportArrayToFirestore } from '../../promises/firestore';
import { useNavigate } from 'react-router-dom';

function Cart () {

    const { cart, removeItem, priceInCart } = useContext(cartContext)
    
    let navigate = useNavigate();

    if (cart.length === 0) return <h1>Su carrito está vacío 😥</h1>
    

    async function handleCheckout(evt){
        const order = {
            buyer: {
                name:"juan",
                email:"hola456@gmail.com",
                phone:"22132435"
            },
            products: [],
            total: 0,
            date:new Date(),
        };
        
        const orderId = createOrder(order);
        navigate(`/gracias/${orderId}`);
    }

    return(
        <div className='cartItemContainer'>
            <div>
                {cart.map(product => {
                    return(
                        <div key={product.id} className='Cart'>
                            <img src={product.img} alt={''}/>
                            <h2>{product.name}</h2>
                            <div>{product.count}</div>
                            <div className='totalCompra'>Precio: ${product.price}</div>

                            <div className='orderGeneratorContainer'>
                                <button onClick={createOrder}>Generar orden</button>
                            </div>

                            <button onClick={() => removeItem(product.id)} style={{color:"red"}}>Eliminar</button>
                        
                        </div>
                    )})
                }
            </div>

            <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
    )
}

export default Cart;