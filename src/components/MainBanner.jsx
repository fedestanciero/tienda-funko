import "../styles/MainBanner.css"

export default function MainBanner({imagen}){


    return(
        <div className="container">
            <div className="row">
                <div className="col-12 main-banner">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
    )
}