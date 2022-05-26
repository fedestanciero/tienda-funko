import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer (){

    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("../../src/data/products.json")
            .then(response => response.json())
            .then(products => products.find(data => data.id == id))
            .then(item => setProduct(item))
            .catch(error => console.log(error))
        },300)
    },[id]);

    return(
        <>
            <ItemDetail product={product}/>
        </>
    )
    
    
}