import Item from "./Item"
import { useEffect, useState } from "react";
import {getFirestore, doc, getDoc, collection, getDocs, query, where} from "firebase/firestore"
import getFirestoreApp from "../firebase/config";

import "../styles/ItemList.css"

export default function ItemList({products, id}){
    // var filteredProducts = []; 
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, "items")
        const queryCollectionFilter = query(queryCollection, where("licencia", "==", `${id}`))
        getDocs(queryCollectionFilter)
        .then(resp => setFilteredProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
        .catch(error => console.log(error))
    },[id])
    // if(id){
    //     filteredProducts = products.filter(data => data.licencia == id)
    // }else{
    //     filteredProducts = products
    // };
    return(
        <div className="item-list row">
            {id?
            filteredProducts.map((el) => <Item key={el.id} el={el}/>):
            products.map((el) => <Item key={el.id} el={el}/>)}
            {/* {filteredProducts.map((el) => <Item key={el.id} el={el}/>)} */}
        </div>
    )
}