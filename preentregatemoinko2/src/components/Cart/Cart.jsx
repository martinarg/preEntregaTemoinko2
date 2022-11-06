import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { CartContext } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () =>{
   const { cart, deleteAll, totalValor} = useContext(CartContext);
   if(cart.length === 0){
      return <h1>El carro está vacío</h1>
   }
   return (
   <div>
 
    
         <CartProduct prodCart={cart}></CartProduct>

   <h2>Total: {totalValor()}</h2>
   <button className='vaciarCarro' onClick={deleteAll}>Vaciar carrito</button>
   <Link to={"/checkout"}>Ir al checkout</Link>
   </div>
  
 );
};
export default Cart;

