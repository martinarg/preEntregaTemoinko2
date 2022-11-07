import React, { useState, useContext } from "react";
import { addDoc, serverTimestamp, collection} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const Form = () =>{
    
    const {cart, totalValor, vaciarCarro }= useContext(CartContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [mail1, setMail1] = useState('');
    const [telefono, setTelefono] = useState('');

    const [loading, setLoading] = useState(false);

    const [pedidoId, setPedidoId] = useState('');

        

            const handleSubmit = (e)=>{ 
                e.preventDefault();
            if(mail===mail1){

               
                setLoading(true);
                const totalMonto = totalValor();
            //e.preventDefault();
            //console.log(e.target.elements.nombre.value);
            const order = {
                buyer:{ name, lastName, mail, telefono},
                items: cart,
                total: totalMonto,
                date: serverTimestamp(),
            }
            // si no existe orders la genera automaticamente
            const ordersCollection = collection(db, 'pedidos')
    
            addDoc(ordersCollection, order)
            .then((res)=>{
               // console.log(res);
                setPedidoId(res.id);
                vaciarCarro();
                toast.success('se cargó caorrectamente su pedido')
    
            })
            .catch((error)=>{
               // console.log(error);
            })
            .finally(() => setLoading(false));

        } else{
            toast.warning('no coinciden los mail')

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
    const handleChangeMail1 = (e) =>{
        setMail1(e.target.value);    
    };
    const handleChangeTelefono = (e) =>{
        setTelefono(e.target.value);    
    };
   
 

    if (pedidoId) {
        return (
            <>
                <h2>
                    Gracias por tu compra, tu número de seguimiento es {pedidoId}
                </h2>
                <Link to='/'>ir a pagina principal</Link>
            </>
        );
    }

    
     return(
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" onChange={handleChangeName} placeholder="nombre" value={name}/>
                <input type="text" name="apellido" onChange={handleChangeLastName}  value={lastName} placeholder="apellido"/>
                <input type="text" name="mail" onChange={handleChangeMail}  value={mail} placeholder="mail"/>
                <input type="text" name="mail1" onChange={handleChangeMail1}  value={mail1} placeholder="reescribir mail"/>
                <input type="number" name="telefono" onChange={handleChangeTelefono}  value={telefono} placeholder="2215558976"/>
                <button className="submit">{loading ? ' Enviando pedido...' : 'Enviar'}</button>
            </form>
        </div>
    )

}

export default Form;