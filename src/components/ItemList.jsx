import Item from "./Item"
import "../styles/ItemList.css"

export default function ItemList({products, id}){
    var filteredProducts = []; 

    if(id){
        filteredProducts = products.filter(data => data.licencia == id)
    }else{
        filteredProducts = products
    };

    return(
        <div className="item-list row">
            {filteredProducts.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    )
}