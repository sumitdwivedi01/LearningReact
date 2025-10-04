import React from 'react'
const NavbarItem = () => {
  return (
    <>
    <nav className=" navbar-expand-lg bg-body-dark bg-dark navbar ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">Accounting App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">Link</a>
            </li>
          </ul>
          <div>
          <button type="button" class="btn btn-info btn-lg mx-3">Amount:10,000</button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavbarItem;
