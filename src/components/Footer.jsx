import "../styles/Footer.css"
import { Link } from "react-router-dom"
import NewsletterForm from "./NewsletterForm"

export default function Footer({productCategories}){

    return(
        <footer className="container-fliuid">
            <div className="row">
                <NewsletterForm/>
                <div className="col-12 col-md-4 all-centered div-footer-brand">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/logo-marca.png?alt=media&token=a254a7b6-3030-436e-86d8-b3a4fe240955" alt="" />
                </div>
                <div className="col-12 col-md-4 all-centered div-footer-links">
                    <ul>
                        {productCategories.map(categoria => <Link className="footer-links" to={`/category/${categoria.nameButton}`}><li>{categoria.nameButton}</li></Link>)}
                    </ul>
                </div>
            </div>
        </footer>
    )
}