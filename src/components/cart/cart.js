import './cart.css'
import { useContext } from "react";
import cartContext from '../../context/cartContext';
import FormularioComprador from '../formulario/formulario';
import { createOrder } from '../../promises/firestore';
import { useNavigate } from 'react-router-dom';

function Cart () {

    const { cart, getTotal, removeItem, cleanCart } = useContext(cartContext)
    
    const totalCompra = getTotal();
    const navigate = useNavigate();

    if (cart.length === 0) return <h1>Su carrito está vacío 😥</h1>
    

    async function handleCheckout(evt, data){
        
        const order = {
            buyer: data,
            products: cart,
            total: 0,
            date:new Date(),
        };
        
        const orderId = await createOrder(order);
        navigate(`/ordenfinalizada/${orderId}`);
    }

    return(
            <div>
                <div className='container'>
                <h1>Carrito:</h1>
                <div className='cart-list'>
                {cart.map((product) => (
                       <div className='item' key={product.id}>
                            <img variant="top" style={{width: 250, height: 250}} src={product.img} alt={''}/>

                            
                                <h2>{product.title}</h2>
                                
                                <h3>Precio: ${product.price}</h3>
                                <p>Unidades: {product.count}</p>
                                <h4>Subtotal: ${product.price*product.count}</h4>
                                
                                <button className="button-3" onClick={() => removeItem(product.id)} style={{color:"red"}}>Eliminar</button>

                            </div>
                        ))
                }
            
            </div>
            </div>
            
            <div className='totalCompra'>
                    <h3>Total: ${totalCompra}</h3>
            </div>
            
            <FormularioComprador onSubmit={handleCheckout}/>
            <button className="button-1" style={{marginBottom:'20px'}} onClick={() => cleanCart()}>Vaciar carrito</button>
        </div>
        
        
)}

export default Cart;