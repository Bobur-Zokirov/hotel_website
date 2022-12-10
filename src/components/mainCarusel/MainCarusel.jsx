import "./mainCarusel.css";

const MainCarusel = () => {
  return (
    <section className="pt-2.5">
        <div id="main-carousel" className="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item img-container active" data-bs-interval="2000">
                    <img src="./images/index_1.jpg" alt="..." className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-primary">First slide label</h5>
                        <p className="text-primary">Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item img-container" data-bs-interval="2000">
                    <img src="./images/index_1.jpg" alt="..." className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-primary">Second slide label</h5>
                        <p className="text-primary">Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item img-container" data-bs-interval="2000">
                    <img src="./images/index_1.jpg" alt="..." className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-primary">Third slide label</h5>
                        <p className="text-">Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#main-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#main-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}

export default MainCarusel;