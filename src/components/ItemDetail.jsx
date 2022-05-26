import { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import ToBuyButtons from "./ToBuyButtons"
import { CartContext } from "./CartContext"

import "../styles/ItemDetail.css"

export default function ItemDetail ({product}){
// Importo el useContext que necesito usar. En este caso "CartContext" y hago destructuring del estado o función que voy a usar en este archivo.
    const {addToCart, cartList} = useContext(CartContext)

    const [inputType, setInputType] = useState("itemCount")

    function handleInputType(){
        setInputType("comprarButton")
    }

    function onAdd(quantity){
        addToCart({...product, quantity})
        handleInputType();
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
                        <ItemCount onAdd={onAdd} stock={product.stock}/>:
                        <ToBuyButtons/>
                    }
                </div>
            </div>

        </div>
    )
}