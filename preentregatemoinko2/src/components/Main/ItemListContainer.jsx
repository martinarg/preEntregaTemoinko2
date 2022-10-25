import  React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
//import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    console.log(categoryName);
  //use effect es bueno para dejar cuestiones asincronicas ya que se ejecuta después del return  
  useEffect(()=>{
        const collectionProd = collection(db, 'productos');
        console.log(getDocs(collectionProd))
        const q = query(collectionProd, where('category', '==', categoryName )) 
        .then((q)=>{
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

    }, [categoryName]);
    // ponemos catefgoryName para que si ocurre algun cambio en category name vuelva a ejecutarse
    return (  
        <div className='item-list-container'>
         <ItemList items={items}/>
        </div>
    
    );
};

export default ItemListContainer;