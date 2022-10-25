import React, {  useEffect, useState  } from "react";


const Form = () =>{
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
        const handleSubmit = (e)=>{ 

        //e.preventDefault();
        //console.log(e.target.elements.nombre.value);

    };
    const handleChangeName = (e) =>{
        setName(e.target.value);
    };
    const handleChangeLastName = (e) =>{
        setLastName(e.target.value);    
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
            
                <button>Enviar</button>
            </form>
        </div>
    )

}

export default Form;