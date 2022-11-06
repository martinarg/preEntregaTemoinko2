import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {CartContext} from '../../context/CartContext';

function CartWidget(){
  const {totalUnidades} = useContext(CartContext);
  const total = totalUnidades();
    const iconoStyles = { 
        'color':'white',
        'margin-top': '3vh',
        'margin-left': '1vw'
    }
 
    const numeroCarro = { 
        'background': 'white',
       'border-radius': '45%',
        'width': '10vw',
        'height': '10vw',
        'padding': '0.5vw',
        'margin-left': '1vw',
        'font-size':'1vw'
    }
    
    return(
        
        <>
        <FontAwesomeIcon style={iconoStyles} icon={faCartShopping} /> 
        <span style={numeroCarro}>{total}</span>
        </>
    )

}
export default CartWidget;