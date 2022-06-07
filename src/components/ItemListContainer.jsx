import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "./ItemList";
import MainBanner from "./MainBanner";

export default function ItemListContainer(){
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
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

    // Traer productos de Firebase de acuerdo al id
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items")
        const queryCollectionFilter = query(queryCollection, where("licencia", "==", `${id}`))
        getDocs(queryCollectionFilter)
        .then(resp => setFilteredProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch(error => console.log(error))
    },[id])

    return(
        <>
        <MainBanner imagen="../../img/portada-home.jpeg"/>
        <div className="itemListContainer container-fluid">
            <ItemList products={product} id={id} filteredProducts={filteredProducts}/>
        </div>
        </>
    )
}