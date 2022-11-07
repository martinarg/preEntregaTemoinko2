import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { CartContext } from '../../context/CartContext';


const Cart = () =>{
   const { cart, vaciarCarro, totalValor} = useContext(CartContext);
   if(cart.length === 0){
      return <h1>El carro está vacío</h1>
   }
   return (
   <div>
 
    
         <CartProduct prodCart={cart}></CartProduct>

   <h2>Total: {totalValor()}</h2>
   <button className='vaciarCarro' onClick={vaciarCarro}>Vaciar carrito</button>
   <Link to={"/form"}>Ir al checkout</Link>
   </div>
  
 );
};
export default Cart;

