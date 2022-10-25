//import { counter } from '@fortawesome/fontawesome-svg-core';
import React, {useState} from 'react'

const ItemCount = (props) =>{
    const [count, setCounter] = useState(props.initial);
    const sumar =() =>{
       count < props.stock && setCounter(count+1);     
    };
     const restar =() =>{
        count > props.initial && setCounter(count-1)
      
    }
  
    return(
        <div className='container-count'>
            <div className='count-btn'>
                <button onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
            <button onClick={()=>{props.contar(count)}} className='add-btn'>Agregar al carrito</button>
        
        </div>
    );
}
//si pones props.prueba solamente dentro de onclick se ejecuta tenes que crear una funcion general para que se ejecute la funcion al momento 
export default ItemCount;