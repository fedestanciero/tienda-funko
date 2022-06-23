import { useContext, useEffect } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { BsTrashFill } from "react-icons/bs";
import "../styles/Cart.css"


export default function Cart(){

    const {deleteCartItem, emptyCart, cartList, totalCartAmount, setTotalCartAmount} = useContext(CartContext)
    
    useEffect(() => {
        let totalAmount = 0;
        cartList.map(e => totalAmount = (e.price*e.quantity) + totalAmount)
        setTotalCartAmount(totalAmount)
    },[cartList])

    return(
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 col-md-7 listado-items-carrito">
                    <div className="col-12">
                        <h2>Tu carrito</h2>
                    </div>
                    <div className="row mt-3">
                        {cartList.length === 0 ?
                        <>
                        <div className="col-12 col-md-4 all-centered empty-cart-image">
                            <img className="text-center" src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/empty-cart.jpg?alt=media&token=9fa27ff7-ecb4-42b2-82cc-8b463df9d175" alt="" />
                        </div>
                        <div className="col-12 col-md-4 empty-cart-text">
                            <span>No has agregado nada aún... ¿Ya viste todos nuestros productos?</span>
                        </div>
                        <Link to="/" className="mt-3 all-centered see-products-button-div">
                            <button className="main-button">Ver productos</button>
                        </Link>
                        </>:
                        cartList.map(item => <div key={item.id} className="item-carrito">
                        <div className="item-carrito-imagen col-3 col-md-2 all-centered"><img src={item.image} alt={item.name}/></div>
                        <div className="item-carrito-titulo col-5 col-md-5 all-centered"><span>{item.name}</span></div>
                        <div className="item-carrito-quantity col-1 all-centered"><span className="text-center">x{item.quantity}</span></div>
                        <div className="item-carrito-quantity col-2 text-center all-centered"><span className="text-center">${item.price}</span></div>
                        <div className="item-carrito-delete col-1 all-centered"><BsTrashFill className="delete-icon" onClick={() => deleteCartItem({item})}/></div>
                        </div>)
                        }
                        {cartList.length > 0 ?
                            <div className="col-12 div-empty-cart all-centered">
                                <span onClick={emptyCart}>Vaciar carrito</span>
                            </div>:
                            <div></div>
                        }
               
                    </div>
                </div>
                <div className="col-12 col-md-4 resumen-pedido-carrito">
                    <div className="col-12">
                        <h2>Resumen de tu pedido</h2>
                    </div>
                    <div className="col-12 total-carrito d-flex justify-content-between">
                        {totalCartAmount == 0 ?
                        <span>No has agregado tus Funko aún</span>:
                        <>
                        <span>Total</span>
                        <span>${totalCartAmount}</span>
                        </>
                        }
                    </div>
                    <div className="col-12 div-button_to-check-out text-center">
                        {cartList.length === 0 ?
                            <div></div>:
                            <Link to="/checkout">
                                <button>Ir a pagar</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}