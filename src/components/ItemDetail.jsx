import ItemCount from "./ItemCount"
import ToBuyButtons from "./ToBuyButtons"

import "../styles/ItemDetail.css"

export default function ItemDetail ({product, onAdd, inputType}){

    return(
        <div className="container detail-product">
            <div className="row row-detail-product">
                <div className="detail-image col-12 col-md-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="detail-info col-12 col-md-6">
                    <div className="detail-title">
                        <span>{product.name}</span>
                    </div>
                    <div className="detail-licence">
                        <span>{product.licence}</span>
                    </div>
                    <div className="detail-price">
                        <span>${product.price}</span>
                    </div>
                    {inputType === "itemCount" ?
                        <ItemCount onAdd={onAdd} stock={product.stock}/>:
                        <ToBuyButtons/>
                    }
                </div>
            </div>
        </div>
    )
}