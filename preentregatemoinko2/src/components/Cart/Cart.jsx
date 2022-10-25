import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () =>{
   const { cart, deleteAll } = useContext(CartContext);
   return (
   <div>
   {cart.map((prod) => {
      <div>
         <img src={prod.img} alt={prod.title}/>
         <div>
            <h2>{prod.title}</h2>
            <h3>{prod.price}</h3>
            <h3>{prod.cantidad}</h3>
            <h3>Subtotal ${prod.price*prod.cantidad}</h3>
            <button>Delete</button>
         </div>
      </div>
      
      })
   }
   <h2>Total: $0</h2>
   <button onClick={deleteAll}>Vaciar carrito</button>
   </div>
 );
};
export default Cart;

