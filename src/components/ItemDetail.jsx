import { useState } from "react"
import "../styles/ItemDetail.css"
import ItemCount from "./ItemCount"
import ToBuyButtons from "./ToBuyButtons"

export default function ItemDetail ({product}){

    const [inputType, setInputType] = useState("itemCount")

    // function onAdd (quantity){
    //     addToCart({quantity})
    // }

    function handleInputType(){
        setInputType("comprarButton")
    }

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
                    {inputType === "itemCount" ?
                        <ItemCount product={product} stock={product.stock} handleInputType={handleInputType}/>:
                        <ToBuyButtons/>
                    }
                </div>
            </div>

        </div>
    )
}