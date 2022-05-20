import "../styles/Item.css"
import { Link } from "react-router-dom"

export default function Item ({el}){


    return(
        <Link to={`/itemDetail/${el.id}`} style={{ textDecoration: 'none' }} className="product-card col-xs-12 col-sm-5 col-xl-2">
            <div className="product-image text-center">
                <img src={el.imagen} alt={el.nombre} />
            </div>
            <div className="product-licence">
                <span>{el.licencia}</span>
            </div>
            <div className="product-title text-center">
                <span>{el.nombre}</span>
            </div>
            <div className="product-price text-center">
                <span>${el.precio}</span>
            </div>
        </Link>
    )
}