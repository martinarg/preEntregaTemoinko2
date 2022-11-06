import React from 'react';
import ItemCart from './ItemCart';


const CartProduct = ({prodCart}) =>{


    
    return(
        <div className='item-list'>
            { prodCart.map((prod) =>{
                    return <ItemCart prodCart={prod} key={prod.id} />;
                })
            }
        </div>
        )
            
        
       

    
}

export default CartProduct;