import "../styles/NavBar.css"
import { Link } from "react-router-dom"

import IconCart from "./IconCart"

const categoriasMenu = [
    {id: "1", name: "marvel", nameButton: "Marvel"},
    {id: "2", name: "dc", nameButton: "DC"},
    {id: "3", name: "harry-potter", nameButton: "Harry Potter"},
]

export default function NavBar (){
    
    return(
        <div className="nav-bar container-fluid">
            <div className="row">
                <Link to="/" className="col-1 brand-logo all-centered">
                    <img src="../../img/logo-marca.png" alt="" />
                </Link>
                <div className="col-10">
                    <ul className="nav-list">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <li className="nav-items">Inicio</li>
                        </Link>
                        {categoriasMenu.map(categoria => <Link className="nav-items" key={categoria.nameButton} to={`/category/${categoria.name}`}>{categoria.nameButton}</Link>)}
                        {/* <Link to={`/category/${}`} style={{textDecoration: "none"}}>
                            <li className="nav-items">Marvel</li>
                        </Link>
                        <Link to="/category/dc" style={{textDecoration: "none"}}>
                            <li className="nav-items">DC</li>
                        </Link>
                        <Link to="/category/harry-potter" style={{textDecoration: "none"}}>
                            <li className="nav-items">Harry Potter</li>
                        </Link> */}
                    </ul>
                </div>
                <div className="col-1 all-centered">
                    <IconCart/>
                </div>
            </div>
        </div>
    )
}