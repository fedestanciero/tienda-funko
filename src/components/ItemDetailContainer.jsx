import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "./CartContext"
import {getFirestore, doc, getDoc, query, where} from "firebase/firestore"

export default function ItemDetailContainer (){

    const [product, setProduct] = useState({});
    const [inputType, setInputType] = useState("itemCount")
    const {id} = useParams();

    // Importo el useContext que necesito usar. En este caso "CartContext" y hago destructuring del estado o función que voy a usar en este archivo.
    const {addToCart} = useContext(CartContext)

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("../../src/data/products.json")
    //         .then(response => response.json())
    //         .then(products => products.find(data => data.id == id))
    //         .then(item => setProduct(item))
    //         .catch(error => console.log(error))
    //     },300)
    // },[id]);

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, "items", `${id}`)
        getDoc(dbQuery)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(error => console.log(error))
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
            <ItemDetail product={product} onAdd={onAdd} inputType={inputType}/>
        </>
    )
    
    
}