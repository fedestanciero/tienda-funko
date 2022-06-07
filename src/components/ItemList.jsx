import Item from "./Item"

import "../styles/ItemList.css"

export default function ItemList({products, id, filteredProducts}){
    // var filteredProducts = []; 
    
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