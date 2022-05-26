import { Link } from "react-router-dom"
import "../styles/IconCart.css"

export default function IconCart (){

    return(
        <Link to="/cart" className="icon-cart">
            <img src="../../img/icon-cart.png" alt="icon-cart" />
            <div className="quantity-display">0</div>
        </Link>
    )
}