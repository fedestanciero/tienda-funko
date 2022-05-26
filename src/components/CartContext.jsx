// Importo el contexto de react para usarlo
import { createContext, useState } from "react";
// Creo una variable de context, que en este caso contendrá un array
export const CartContext = createContext([])

// Creo un componente para importar en app.jsx
// Le paso como prop children
// En app.jsx, todo lo que esté dentro de CartContext.Provider se pasará como prop children.
export default function CartContextProvider({children}){

// Creo un useState donde iré agregando los productos y sus cantidades en un array
    const [cartList, setCartList] = useState([])

// Creo esta función para agregar al array cartList de useState los datos del producto que le paso por prop a esta función (itemCarrito)
// Para que no reemplace los datos en cada render, uso "...cartList" para desplegar los datos antes del render y luego sumar el dato nuevo
    function addToCart(itemCarrito){
        if(cartList.some(el => el.id == itemCarrito.id)){
            let i = cartList.findIndex(el => el.id == itemCarrito.id);
            let newCartList = cartList;
            newCartList[i].quantity += itemCarrito.quantity;
            setCartList(newCartList)
        } else{
            setCartList([
                ...cartList, itemCarrito])
        }    
    }

// Creo esta función para vaciar el array de productos agregados al carrito
    function vaciarCart(){
        setCartList([]);
    }

    function eliminarItemCarrito ({item}){
        let i = cartList.findIndex(e => e.id == item.id)
    }

    return(
// Retorno el CartContext.Provider y le paso como value los estados y funciones que quiero usar globalmente en los children. 
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            eliminarItemCarrito,
            }}>
            {children}
        </CartContext.Provider>
    )
}