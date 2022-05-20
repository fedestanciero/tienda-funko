import Item from "./Item"
import "../styles/ItemList.css"

export default function ItemList({products, id}){
    console.log(id)
    var filteredProducts = []; 

    if(id){
        filteredProducts = products.filter(data => data.licencia == id)
    }else{
        filteredProducts = products
    };
    console.log(filteredProducts)

    return(
        <div className="item-list row">
            {filteredProducts.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    )
}