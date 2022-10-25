//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function CartWidget(){
    const [carroQ, setState] = useState(1);
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
       {/* <FontAwesomeIcon style={iconoStyles} icon={faCartShopping} /> */}
        <span style={numeroCarro}>{carroQ}</span>
        </>
    )

}
export default CartWidget;