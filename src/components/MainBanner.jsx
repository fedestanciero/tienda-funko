import "../styles/MainBanner.css"
import {useParams} from "react-router-dom"


export default function MainBanner(){

    // Cambiar banner según la categoría elegida

    var bannerImage = "";
    const {id} = useParams();

    if(id == "DC"){
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/dc-banner.png?alt=media&token=603b67b1-b378-415c-b5fb-7b50529a0ba0"
    } else if(id == "Marvel"){
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/marvel-banner.png?alt=media&token=139c87c2-155a-4b32-9f5b-3033f2f38595"
    } else if(id == "Harry Potter"){
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/harry-potter-banner.png?alt=media&token=5b4a044c-3cea-402e-83e5-b4458b73d811"
    } else if(id == "Star Wars"){
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/star-wars-banner.png?alt=media&token=3ca24ed3-6961-4393-a75b-d7ebf3ddfe78"
    } else if(id == "Pokemon"){
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/pokemon-banner.png?alt=media&token=427b0cbc-5cde-41a6-9abf-be534c135f68"
    } else {
        bannerImage = "https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/main-banner.jpeg?alt=media&token=5b5e5c98-a7b1-47d5-956a-34bd7ac54c6c"
    }

    return(
        <div className="container ">
            <div className="row main-banner-container">
                <div className="col-12 main-banner">
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}