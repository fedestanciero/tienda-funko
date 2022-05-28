import { Link } from "react-router-dom"
import "../styles/IconCart.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"

export default function IconCart (){

    const {cartList} = useContext(CartContext)
    const [cantidadCarrito, setcantidadCarrito] = useState(0)

// Creé este useEffect para que actualice el valor de cantidadCarrito cada vez que se actualice la cantidad de productos en el carrito.
    useEffect(() => {
        let cantidad = 0;
        cartList.map(e => cantidad = e.quantity + cantidad)
        setcantidadCarrito(cantidad)
        console.log(cantidad)
    },[cartList])

    return(
        <Link to="/cart" className="icon-cart">
            <img src="../../img/icon-cart.png" alt="icon-cart" />
            {cantidadCarrito == 0 ?
            <div></div>:
            <div className="quantity-display">{cantidadCarrito}</div>
            }
        </Link>
    )
}