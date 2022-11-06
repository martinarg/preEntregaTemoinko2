
import { useState, createContext} from "react";


//creamos el contexto, lo exportamos para luego utilizarlo en algun componente
export const CartContext = createContext();

// componente que nos provee de un contexto en el cual ponemos nuestras funciones, variables, estados
const Provider = ({children}) =>{
    // el seter del estado tiene que ser privado del componente
        const [cart, setCart] = useState([]);

     const addToCart = (item, cantidad) =>{
        
        const producto = {...item, cantidad};
       console.log(producto);
        if(isInCart(producto.id)){
            sumarCantidad(producto);
        }else{
            setCart([...cart, producto]);
            console.log(cart);
        }
    
    }
    const isInCart = (id) => cart.some((prod)=>prod.id === id);

    const deleteAll = () => setCart([]);

//borrar un solo producto
    const deleteOne = (id) =>{
        // te quedas con todos los productos menos con el que coincide (logica inversa)
        //el filter se utilizar para eliminar un producto
        const prodFiltrados = cart.filter((prod)=>prod.id !== id)
        setCart( prodFiltrados)
    }

//sumar cantidad de unidades de un mismo producto
const sumarCantidad = (prodAgregado) =>{
    const carritoActualizado = cart.map((prodDelCart)=> {
        if (prodDelCart.id === prodAgregado.id){
            const prodActualizado = {
                //conservas todo lo que teniamos antes pero cambiamos la cantidad
                ...prodDelCart,
                cantidad : prodAgregado.cantidad,
            };
            return prodActualizado;
        }else{
            return prodDelCart;
        }
    });
    setCart(carritoActualizado);
};

const totalUnidades = () =>{
    let acc = 0;
    const cartcop = [...cart];
    cartcop.forEach((prod) =>{
        acc = acc + prod.cantidad;
    });
    return acc;
}
const totalValor = ()=>{
    let accValor = 0;
    const copia = [...cart];
    copia.forEach((prod)=>{
        accValor = accValor + (prod.price*prod.cantidad);
    })
    return accValor
}

const getProdQuantity = (id) => {
    const product = cart.find((prod) =>prod.id === id);
    return product?.cantidad;
}
console.log(cart);
//sumar precio total

    return(
        // solo manipular la info  que manejaria un carrito si necesitamos otro context creamos otro como por ejemplo para favoritos
        // compartimos toda la informacion con los children
        <CartContext.Provider 
            value={{ 
                cart, 
                addToCart, 
                deleteAll, 
                deleteOne, 
                getProdQuantity,
                totalUnidades,
                totalValor
                }}
                >
            
            {children}
        </CartContext.Provider>
    );
                //el children es para que aparezca todos los hijos de Provider que sería el resto de la pagina sino no mostraria nada

};
export default Provider;


