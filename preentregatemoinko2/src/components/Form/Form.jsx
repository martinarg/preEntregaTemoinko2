import React, {  useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
const Form = () =>{
    const {cart, totalValor }= useContext(CartContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');

        const handleSubmit = (e)=>{ 
            const totalMonto = totalValor();
        //e.preventDefault();
        //console.log(e.target.elements.nombre.value);
        const order = {
            buyer:'',
            items: cart,
            total: totalMonto,
            date: serverTimestamp(),
        }
    };
    const handleChangeName = (e) =>{
        setName(e.target.value);
    };
    const handleChangeLastName = (e) =>{
        setLastName(e.target.value);    
    };
    const handleChangeMail = (e) =>{
        setMail(e.target.value);    
    };
    const handleChangeTelefono = (e) =>{
        setMail(e.target.value);    
    };
   
    useEffect(() => {
      
        return() =>{
            //clean up function
            //sirve para ejecutar antes de todo lo que ocurre dentro de useEffect
            //primero ocurre el return segundo, el return de useEffect y
        }
     
    },[]);
    
     return(
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" onChange={handleChangeName} placeholder="nombre" value={name}/>
                <input type="text" name="apellido" onChange={handleChangeLastName}  value={lastName} placeholder="apellido"/>
                <input type="text" name="mail" onChange={handleChangeMail}  value={mail} placeholder="mail"/>
                <input type="number" name="telefono" onChange={handleChangeTelefono}  value={telefono} placeholder="2215558976"/>
                <button>Enviar</button>
            </form>
        </div>
    )

}

export default Form;