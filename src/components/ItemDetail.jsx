import "../styles/ItemDetail.css"
import AddToCartButton from "./AddToCartButton"

export default function ItemDetail ({product}){
    
    return(
        <div className="container detail-product">
            <div className="row row-detail-product">
                <div className="detail-image col-6">
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="detail-info col-6">
                    <div className="detail-title">
                        <span>{product.nombre}</span>
                    </div>
                    <div className="detail-licence">
                        <span>{product.licencia}</span>
                    </div>
                    <div className="detail-price">
                        <span>${product.precio}</span>
                    </div>
                    <AddToCartButton/>
                </div>
            </div>

        </div>
    )
}