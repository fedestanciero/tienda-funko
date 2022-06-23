import { Link } from "react-router-dom"
import "../styles/ToBuyButtons.css"

export default function ToBuyButtons(){
    return(
        <div className="to-buy-buttons-div container">
            <div className="row">
                <Link to="/cart" className="col-12 col-md-6">
                    <button className="button-ver-pedido">Ver pedido</button>
                </Link>
                <Link to="/" className="col-12 col-md-6">
                    <button className="button-ver-mas">Ver más productos</button>
                </Link>
            </div>
        </div>
    )
}