import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "./CartContext"
import Loading from "./Loading";
import {getFirestore, doc, getDoc} from "firebase/firestore"

export default function ItemDetailContainer (){

    const [product, setProduct] = useState({});
    const [inputType, setInputType] = useState("itemCount")
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    // Importo el useContext que necesito usar. En este caso "CartContext" y hago destructuring del estado o función que voy a usar en este archivo.
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, "items", `${id}`)
        getDoc(dbQuery)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[id])

    function handleInputType(){
        setInputType("comprarButton")
    }

    function onAdd(quantity){
        addToCart({...product, quantity})
        handleInputType();
    }

    return(
        <>
        {loading ? <Loading/> : <ItemDetail product={product} onAdd={onAdd} inputType={inputType}/>}
        </>
    )
    
    
}