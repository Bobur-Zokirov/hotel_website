import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-md my-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link text-dark" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Disabled</a>
              </li>
            </ul>
            <div className="d-flex">
              <h3 className=" text-light me-2" type="search" placeholder="Search" aria-label="Search">Tel: +998(91)-965-34-80</h3>
              <button className="btn btn-success nav-btn">Buyurtma berish</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;