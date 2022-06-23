import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from "react"
import "../styles/NewsletterForm.css"

export default function NewsletterForm(){
    var userEmail = {}
    const [sent, setSent] = useState(false);

    const db = getFirestore()
    const queryCollectionNewsletter = collection(db, "newsletter-suscribers")

    function getNewsletterEmail(e){
        userEmail.email = e.target.value
        }

    function sendNewsletterEmail(){
        console.log(userEmail)
        addDoc (queryCollectionNewsletter, userEmail)
        .catch(err => console.log(err))
        .finally(setSent(true))
    }

    return(
        <>{sent ? <div className="col-4"><span>Recibimos tu email. ¡Gracias!</span></div>:

        <div className="col-12 col-md-4 div-newsletter-form">
            <div className="col-12 newsletter-text">
                <span>Registrate para recibir promociones exclusivas</span> 
            </div>
            <div className="col-12 newsletter-input">
                <input placeholder="Dejanos tu email" type="email" id="newsletterEmail" onChange={getNewsletterEmail}/>
            </div>
            <div className="col-12 newsletter-button">
                <button onClick={sendNewsletterEmail}>Suscribirme</button>
            </div>
        </div>
        }
        </>
    )
}