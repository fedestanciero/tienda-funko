import "../styles/NavBar.css"
import { Link } from "react-router-dom"

import IconCart from "./IconCart"

export default function NavBar({productCategories}){
    
    return(
        <div className="nav-bar container-fluid">
            <div className="row">
                <Link to="/" className="col-3 col-md-1 brand-logo all-centered">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/logo-marca.png?alt=media&token=a254a7b6-3030-436e-86d8-b3a4fe240955" alt="" />
                </Link>
                <div className="col-6 col-md-10">
                    <ul className="nav-list">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <li className="nav-items">Inicio</li>
                        </Link>
                        {productCategories.map(category => <Link className="nav-items" to={`/category/${category.nameButton}`}>{category.nameButton}</Link>)}
                    </ul>
                </div>
                <div className="col-3 col-md-1 all-centered">
                    <IconCart/>
                </div>
            </div>
        </div>
    )
}