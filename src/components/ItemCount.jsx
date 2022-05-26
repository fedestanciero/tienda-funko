import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { useState } from "react";
import "../styles/ItemCount.css"

export default function ItemCount({stock, onAdd}){
    
    const initial = 1;

    const [quantity, setQuantity] = useState(initial);

    const agregarCantidad = () => {
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }

    const restarCantidad = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="container itemCount">
            <div className="row itemQuantity">
                <div onClick={restarCantidad} className='col-2 d-flex justify-content-center align-items-center cursor-pointer'>
                    <VscChromeMinimize/>
                </div>
                <div className='col-8 d-flex justify-content-center align-items-center'>
                    <span>{quantity}</span>
                </div>
                <div onClick={agregarCantidad} className='col-2 d-flex justify-content-center align-items-center cursor-pointer'>
                    <VscAdd/>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <button onClick={() => onAdd(quantity)} className="button-add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    )
}