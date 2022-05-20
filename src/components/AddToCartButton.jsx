import { Link } from "react-router-dom";
import "../styles/AddToCartButton.css"

export default function AddToCartButton() {
    
    
    return(
        <Link to="/cart" className="div-add-to-cart-button">
            <button className="add-to-cart-button">Agregar al carrito</button>
        </Link>
    )
}