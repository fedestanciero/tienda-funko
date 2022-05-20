import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";

export default function ItemListContainer(){

    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
            fetch("../../src/data/products.json")
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
            }
        ),[];

    return(
        <>
        <div className="itemListContainer container-fluid">
            <ItemList products={product} id={id}/>
        </div>
        </>
    )
}