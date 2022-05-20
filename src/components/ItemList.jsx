import Item from "./Item"
import "../styles/ItemList.css"

export default function ItemList({products}){
    console.log({products})
    return(
        <div className="item-list row">
            {products.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    )
}