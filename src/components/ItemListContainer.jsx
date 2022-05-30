import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import getFirestoreApp from "../firebase/config";
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore"
import ItemList from "./ItemList";
import MainBanner from "./MainBanner";

export default function ItemListContainer(){

    const [productFirebase, setproductFirebase] = useState({});
    const [productsFirebase, setproductsFirebase] = useState([]);
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     fetch("../../src/data/products.json")
    //     .then(response => response.json())
    //     .then(data => setProduct(data))
    //     .catch(error => console.log(error))
    // },[]);

    // Traer un solo producto de Firebase

    // useEffect(() => {
    //     const db = getFirestore();
    //     const dbQuery = doc(db, "items", "Bdr9D0Hw4j6vjXWRDKkr")
    //     getDoc(dbQuery)
    //     .then(resp => setproductFirebase({id: resp.id, ...resp.data()}))
    //     .catch(error => console.log(error))
    // },[]);

    // Traer todos los productos de Firebase

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items")
        getDocs(queryCollection)
        .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch(error => console.log(error))
    },[])

    return(
        <>
        <MainBanner imagen="../../img/portada-home.jpeg"/>
        <div className="itemListContainer container-fluid">
            <ItemList products={product} id={id}/>
        </div>
        </>
    )
}