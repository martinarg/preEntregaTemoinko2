import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({prod}) =>{

    return(
        <article className='card'>
            <img src={prod.img} alt={prod.title}/>
            <div className='card-info'>
                <h6>{prod.title}</h6>
                <h4>${prod.price}</h4>
                <h5>{prod.category}</h5>
                <Link to={`/item/${prod.id}`}><button>Ver Detalle</button></Link>
            </div>
        </article>

    )
}

export default Item;