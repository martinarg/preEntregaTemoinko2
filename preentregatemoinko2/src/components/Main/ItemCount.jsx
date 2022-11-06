//import { counter } from '@fortawesome/fontawesome-svg-core';
import React, {useState} from 'react'
import { useEffect } from 'react';

const ItemCount = ({stock, initial = 1, addicionarCarro}) =>{
    const [count, setCount] = useState(initial);
    const sumar =() =>{
       count < stock && setCount(count+1);     
    };
     const restar =() =>{
        count > initial && setCount(count-1)
      
    }
     const add = () =>{
        addicionarCarro(count);
    }
    useEffect(()=>{
        setCount(initial);
    }, [initial])
   
  
    return(
        <div className='container-count'>
            <div className='count-btn'>
                <button disabled={count === stock} onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
            <button onClick={add} className='add-btn'>Agregar al carrito</button>
        
        </div>
    );
}
//si pones props.prueba solamente dentro de onclick se ejecuta tenes que crear una funcion general para que se ejecute la funcion al momento 
export default ItemCount;