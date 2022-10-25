
import React from 'react';
import {useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) =>{
    const [unidades, setUnidades] = useState(0);
    //const [show, setShow] = useState(true);
    const {addToCart} = useContext(CartContext);

    const contar = (numero) =>{
        //setShow(false);
        setUnidades(numero);
        addToCart(item,numero);
    }
    return(
        <div className='item-detail'>
            <img src={item.img} alt={item.title}/>
            <div className='item-detail-info'>
                <h2>{item.title}</h2>
                <p className='item-price'>${item.price}</p>
                <p className='item-desc'>{item.desc}</p>
               
                {unidades ===0 ?(
                    <ItemCount stock={item.stock} contar={contar} initial={1}/>
                    )   : (
                        <Link to='/cart'>Ir al carrito</Link>
                    )

               }
                
            </div>
           

           
        </div>
    )
}

export default ItemDetail;

