import "../styles/Item.css"
import { Link } from "react-router-dom"

export default function Item ({el}){


    return(
        <Link to={`/itemDetail/${el.id}`} style={{ textDecoration: 'none' }} className="product-card col-xs-12 col-sm-5 col-xl-2">
            <div className="product-image text-center">
                <img src={el.image} alt={el.name} />
            </div>
            <div className="product-licence">
                <span>{el.licence}</span>
            </div>
            <div className="product-title text-center">
                <span>{el.name}</span>
            </div>
            <div className="product-price text-center">
                <span>${el.price}</span>
            </div>
        </Link>
    )
}