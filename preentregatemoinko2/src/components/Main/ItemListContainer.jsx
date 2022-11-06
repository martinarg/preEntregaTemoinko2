import  React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
//import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import SyncLoader  from 'react-spinners/SyncLoader';
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();
    console.log(categoryName);
  //use effect es bueno para dejar cuestiones asincronicas ya que se ejecuta después del return  
  useEffect(()=>{
        const collectionProd = collection(db, 'productos');
       
      //if(categoryName) const q = query(collectionProd, where('category', '==', categoryName )) 
       //:const q = 
       const referencia = categoryName ? query(collectionProd, where('category', '==', categoryName ))
        : collectionProd;
       getDocs(referencia)
        .then((res)=>{
            //FALTA FILTRAR EL HOME Y FIREBASE
            const products = res.docs.map((prod)=>{
                console.log(prod);
                return{
                    id: prod.id,
                    ...prod.data()
                }
            })
            setItems(products);
            console.log(res.docs)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
        return(()=> setLoading(true))
    }, [categoryName]);
    // ponemos catefgoryName para que si ocurre algun cambio en category name vuelva a ejecutarse
   // analiza el condicional y si es true muestra solamente lo que esta en el condicional
    if(loading){
   
    return (  
        <div className='item-list-container-cargar'>
             <SyncLoader color="#fa6f0a" />
        </div>
       
    );
    }
    return(
        <main>
            <div className='item-list-container'>
            <ItemList items={items}/>
        </div>
       </main>
    )
};

export default ItemListContainer;