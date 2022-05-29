import { useContext, useEffect } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import "../styles/Cart.css"
import { BsTrashFill } from "react-icons/bs";


export default function Cart(){

    const {eliminarItemCarrito, vaciarCart, cartList, montoTotalCarrito, setMontoTotalCarrito} = useContext(CartContext)

    useEffect(() => {
        let montoTotal = 0;
        cartList.map(e => montoTotal = (e.precio*e.quantity) + montoTotal)
        setMontoTotalCarrito(montoTotal)
    },[cartList])

    return(
        <div className="container">
            <div className="row">
                <div className="col-8 listado-items-carrito">
                    <div className="col-12">
                        <h2>Tu carrito</h2>
                    </div>
                    {cartList.length === 0 ?
                    <>
                    <p>No has agregado nada aún. ¿Ya viste nuestros productos?</p>
                    <Link to="/">
                        <button className="main-button">Ver productos</button>
                    </Link>
                    </>:
                    cartList.map(item => <div key={item.id} className="item-carrito">
                    <div className="item-carrito-imagen col-2 all-centered"><img src={item.imagen} alt={item.nombre}/></div>
                    <div className="item-carrito-titulo col-5 all-centered"><span>{item.nombre}</span></div>
                    <div className="item-carrito-quantity col-2 all-centered"><span>Cantidad: {item.quantity}</span></div>
                    <div className="item-carrito-quantity col-2 text-center all-centered"><span>${item.precio}</span></div>
                    <div className="item-carrito-delete col-1 all-centered"><BsTrashFill className="delete-icon" onClick={() => eliminarItemCarrito({item})}/></div>
                    </div>)
                    }
                    <div className="col-12">
                        <span onClick={vaciarCart}>Vaciar carrito</span>
                    </div>                    
                </div>
                    
                <div className="col-4 resumen-pedido-carrito">
                    <div className="col-12">
                        <h2>Resumen de tu pedido</h2>
                    </div>
                    <div className="col-12 total-carrito d-flex justify-content-between">
                        {montoTotalCarrito == 0 ?
                        <span>Tu carrito está en $0</span>:
                        <>
                        <span>Total</span>
                        <span>${montoTotalCarrito}</span>
                        </>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}