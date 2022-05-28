import { useContext } from "react"
import { CartContext } from "./CartContext"
import "../styles/Cart.css"
import { BsTrashFill } from "react-icons/bs";


export default function Cart(){

    const {eliminarItemCarrito, vaciarCart, cartList} = useContext(CartContext)

    function eliminarItem(item){
        eliminarItemCarrito(item)
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-7 listado-items-carrito">
                    <div className="col-12">
                        <h2>Tu carrito:</h2>
                    </div>
                    {cartList.map(item =>   <div key={item.id} className="item-carrito row">
                                                <div className="item-carrito-imagen col-2 all-centered"><img src={item.imagen} alt={item.nombre}/></div>
                                                <div className="item-carrito-titulo col-5 all-centered"><span>{item.nombre}</span></div>
                                                <div className="item-carrito-quantity col-2 all-centered"><span>Cantidad: {item.quantity}</span></div>
                                                <div className="item-carrito-delete col-1 all-centered"><BsTrashFill className="delete-icon" onClick={() => eliminarItem({item})}/></div>
                                            </div>)}
                </div>
                <div className="col-12">
                        <p onClick={vaciarCart}>Vaciar carrito</p>
                    </div>
                <div className="col-5 resumen-pedido-carrito">

                </div>
            </div>
            
        </div>
    )
}