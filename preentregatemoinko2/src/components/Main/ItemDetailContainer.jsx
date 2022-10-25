import  React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
//import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {

        const [item, setItem] = useState({});
        const {id} = useParams();
      //use effect es bueno para dejar uestiones asincronicas ya que se ejecuta después del return  
      useEffect(()=>{
       const collectionProd= collection(db, 'products');
       const ref = doc(collectionProd, id);
       
        getDocs(ref)
            .then((res)=>{
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error)=>{
                console.log(error);
            })
        }, [id]);
   
    return (  
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    
    );
};

export default ItemDetailContainer;