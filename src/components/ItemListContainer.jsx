import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "./ItemList";
import MainBanner from "./MainBanner";
import Loading from "./Loading";

export default function ItemListContainer(){
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    // Traer todos los productos de Firebase

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items")
        const queryCollectionFeatured = query(queryCollection, where("featured", "==", true))
        const queryCollectionFilter = query(queryCollection, where("licence", "==", `${id}`))
        if(id){
            getDocs(queryCollectionFilter)
            .then(resp => setFilteredProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else{
            getDocs(queryCollectionFeatured)
            .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    },[id])

    return(
        <>
        <MainBanner/>
        <div className="itemListContainer container-fluid">
            {loading ? <Loading/> : <ItemList products={product} id={id} filteredProducts={filteredProducts}/>}
        </div>
        </>
    )
}