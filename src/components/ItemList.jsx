import Item from "./Item"

import "../styles/ItemList.css"

export default function ItemList({products, id, filteredProducts}){

    return(
        <>
        <div className="featured-products-div">
            {id ?
            <h2></h2>:
            <h2>Productos destacados</h2>
            }
        </div>
        <div className="item-list row">
            {id?
            filteredProducts.map((el) => <Item key={el.id} el={el}/>):
            products.map((el) => <Item key={el.id} el={el}/>)}
        </div>
        </>
    )
}