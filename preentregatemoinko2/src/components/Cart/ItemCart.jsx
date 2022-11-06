import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = ({prodCart}) =>{
    const { deleteOne} = useContext(CartContext);
    return(
        <div className='itemCart'>
            <img src={prodCart.img} alt={prodCart.title}/>
            <div>
                <h2>{prodCart.title}</h2>
                <h3>{prodCart.price}</h3>
                <h3>Cantidad: {prodCart.cantidad}</h3>
            </div>
            <div>
                <h3>Subtotal ${prodCart.price*prodCart.cantidad}</h3>
                <button className='delete' onClick={()=>{deleteOne(prodCart.id)}}>Eliminar</button>
            </div>
               
           
        </div>



    )
}

export default ItemCart


