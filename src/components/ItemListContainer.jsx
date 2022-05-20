import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";

export default function ItemListContainer(){

    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        if(id){
            fetch("../../src/data/products.json")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(respuesta => respuesta.filter(prods => prods.licencia == id))
            .then(data => console.log(data))
            .then((data) => setProduct(data))
            .catch(error => console.log(error))
        } else {
                fetch("../../src/data/products.json")
                .then(response => response.json())
                .then((data) => setProduct(data))
                .catch((err => console.log(err)))
                }
        },[id]);

    return(
        <>
        <div className="itemListContainer container-fluid">
            <ItemList products={product}/>
        </div>
        </>
    )
}