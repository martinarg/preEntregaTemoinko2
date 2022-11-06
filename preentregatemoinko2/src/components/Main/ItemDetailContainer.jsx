import  React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
//import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import SyncLoader  from 'react-spinners/SyncLoader';

const ItemDetailContainer = () => {
        const [loading, setLoading] = useState(true);
        const [item, setItem] = useState({});
        const {id} = useParams();
      //use effect es bueno para dejar uestiones asincronicas ya que se ejecuta después del return  
      useEffect(()=>{
       const collectionProd= collection(db, 'productos');
       const ref = doc(collectionProd, id);
       
        getDoc(ref)
            .then((res)=>{
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
            return(()=> setLoading(true))
        }, [id]);
        if(loading){
   
            return (  
               
                <SyncLoader color="#fa6f0a" />
            );
            }
           
    return (  
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    
    );
};

export default ItemDetailContainer;