

import React, {useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) =>{
    const [unidades, setUnidades] = useState(0);
    //const [show, setShow] = useState(true);
    const { addToCart, getProdQuantity} = useContext(CartContext);

    const addicionarCarro = (cantidad) =>{
        //setShow(false);
        setUnidades(cantidad);
        addToCart(item, cantidad);
        console.log(item);
        toast.success(`se agregó ${cantidad} unidades`);

    }
    const quantity = getProdQuantity(item.id);
    return(
        <div className='item-detail'>
             <ToastContainer />
            <img src={item.img} alt={item.title}/>
            <div className='item-detail-info'>
                <h2>{item.title}</h2>
                <p className='item-price'>${item.price}</p>
                <p className='item-desc'>{item.desc}</p>
               
                {unidades ===0 ?(
                  item.stock === 0 ?(
                    <h4>No tiene stock</h4>
                  ): (
                    <ItemCount addicionarCarro={addicionarCarro} stock={item.stock} initial={quantity}/>
                    ) 
                    )  : (
                        <Link to='/cart' className='botonCarrito'>Ir al carrito</Link>
                    )
               }
            </div>
        </div>
    )
}

export default ItemDetail;

