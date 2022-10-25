
import {  useState, createContext} from "react";



export const CartContext = createContext();


const Provider = ({children}) =>{

        const [cart, setCart] = useState([]);
        const addToCart = (item, cantidad) =>{
        
        const producto = {...item,cantidad};
        if(isInCart(producto.id)){

        }else{
            setCart(...cart, producto);
        }
    
    }
    const isInCart = (id) => cart.some((prod)=>prod.id === id);

    const deleteAll = () => setCart([]);

//borrar un solo producto

//sumar cantidad de unidades

//sumar precio total

    return(
        <CartContext.Provider value={{ cart, addToCart, deleteAll}}>
            {children}
        </CartContext.Provider>
    )


}
export default Provider;


