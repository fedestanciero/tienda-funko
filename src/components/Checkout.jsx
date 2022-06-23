import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import CheckoutForm from "./CheckoutForm";

export default function Checkout(){

    const {emptyCart, cartList, totalCartAmount, setOrderId} = useContext(CartContext)
    const db = getFirestore()

    // Estados para almacenar info. del cliente
    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        province: "",
    });

    // Enviar pedido a colección en firebase

    function createOrder(){
        const queryCollectionOrders = collection(db, 'orders')
        let orden = {}

        orden.buyer = {buyerInfo}
        orden.total = totalCartAmount
        orden.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const quantity = item.quantity;
            return { id, name, price, quantity }
    });

        addDoc(queryCollectionOrders, orden)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(emptyCart())
    }

    return(
        <CheckoutForm createOrder={createOrder} buyerInfo={buyerInfo} setBuyerInfo={setBuyerInfo}/>
    )
}