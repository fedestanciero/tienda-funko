import "../styles/Loading.css"

export default function Loading(){
    
    return(
        <div className="loading all-centered container">
            <div className="row">
                <div className="col-12 mt-4 all-centered">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tienda-funko-b42a4.appspot.com/o/logo-marca.png?alt=media&token=a254a7b6-3030-436e-86d8-b3a4fe240955" alt="" />
                </div>
                <div className="col-12 all-centered">
                    <h4>Cargando...</h4>
                </div>
            </div>
        </div>
    )
}