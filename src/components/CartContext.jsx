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

// Este useState guarda el order id
    const [orderId, setOrderId] = useState()

// Creo este useState para guardar el monto total del carrito
    const [totalCartAmount, setTotalCartAmount] = useState(0)

// Creo esta función para chequear si el producto añadido al carrito ya está en el cartList 
    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }

// Creo esta función para agregar al array cartList de useState los datos del producto que le paso por prop a esta función (cartItem)
// Para que no reemplace los datos en cada render, uso "...cartList" para desplegar los datos antes del render y luego sumar el dato nuevo
    
    function addToCart(cartItem){
            if(isInCart(cartItem.id)){
                let i = cartList.findIndex(el => el.id == cartItem.id);
                const newCartList = cartList;
                newCartList[i].quantity += cartItem.quantity;
                setCartList([...newCartList]);
            } else{
                    setCartList([
                        ...cartList, cartItem]);
            }    
    }

// Creo esta función para vaciar el array de productos agregados al carrito
    function emptyCart(){
        setCartList([]);
        setTotalCartAmount(0);
    }
    
    function deleteCartItem ({item}){ 
        let i = cartList.findIndex(e => e.id == item.id)
        const itemToDelete = cartList  
        itemToDelete.splice(i,1)
        setCartList([...itemToDelete])
    }

    return(
// Retorno el CartContext.Provider y le paso como value los estados y funciones que quiero usar globalmente en los children. 
        <CartContext.Provider value={{
            cartList,
            orderId,
            setOrderId,
            setCartList,
            totalCartAmount,
            setTotalCartAmount,
            addToCart,
            emptyCart,
            deleteCartItem,
            }}>
            {children}
        </CartContext.Provider>
    )
}