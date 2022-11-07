import React, { useState, useEffect } from 'react';

import ItemListNav from './ItemListNav';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const Menu = () => {

    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const collectionSec= collection(db, 'secciones');
        getDocs(collectionSec)
            .then((res) => {
                //console.log(res.docs);
                const secciones = res.docs.map((sec) => {
                    return {
                        id: sec.id,
                        ...sec.data(),
                    };
                });
                setSecciones(secciones);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    //console.log(secciones);
    
    return(
        <ul>
            <li>
                {
                    secciones.map((sec)=>{
                        return <ItemListNav  key={sec.id} sec={sec}/>
                    })
                }
            </li>
           
        </ul>
      
    )
}
export default Menu;