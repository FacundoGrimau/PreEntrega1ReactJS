const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" src={"images/banner-remera.jpg"} style={{backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2">Remeras</span>
                </div>
                <div className="col d-flex align-items-center justify-content-center" src="assets/images/banner-remera.jpg" style={{backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2">Sweaters</span>
                    <p></p>
                </div>
                <div className="col d-flex align-items-center justify-content-center" src="assets/images/banner-remera.jpg" style={{backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2">Pantalones</span>
                </div>
                <div className="col d-flex align-items-center justify-content-center" src="assets/images/banner-remera.jpg" style={{backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2">Calzados</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;