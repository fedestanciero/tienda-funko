import "../styles/OrderReceived.css"
import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function OrderReceived(){
    
    const {orderId} = useContext(CartContext)

    return(
        <div className="container thank-you-section">
            <div className="row">
                <div className="col-12 col-md-6 thank-you-text text-center">
                    <h1>¡Gracias por tu compra!</h1>
                    <p>Tu N° de compra es: {orderId}</p>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/thank-you-page-image.png?alt=media&token=6aade2c0-76a2-466c-9059-ef180b0be843" alt="" />
                </div>
            </div>
        </div>
    )
}