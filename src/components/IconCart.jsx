import { Link } from "react-router-dom"
import "../styles/IconCart.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"

export default function IconCart (){

    const {cartList} = useContext(CartContext)
    const [cartQuantity, setCartQuantity] = useState(0)

// Creé este useEffect para que actualice el valor de cartQuantity cada vez que se actualice la cantidad de productos en el carrito.
    useEffect(() => {
        let cantidad = 0;
        cartList.map(e => cantidad = e.quantity + cantidad)
        setCartQuantity(cantidad)
    },[cartList])

    return(
        <Link to="/cart" className="icon-cart">
            <img src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/icon-cart.png?alt=media&token=386a45a0-c8f9-406b-ada8-379595d557cb" alt="icon-cart" />
            {cartQuantity == 0 ?
            <div></div>:
            <div className="quantity-display">{cartQuantity}</div>
            }
        </Link>
    )
}