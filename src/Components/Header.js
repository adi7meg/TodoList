import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Action</a></li>
              <li><a className="dropdown-item">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        {props.searchbar ? <form className="d-flex" role="search" >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : "no search bar" }
        
      </div>
    </div>
  </nav></div>
  )
}

export default Header

Header.defaultProps={
 title:"HEllo",
 searchbar: true
}


Header.propTypes={
    title: PropTypes.string,   //strict type checking if number is passed in this prop then throw an error,
                             //  Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`.
    searchbar:PropTypes.bool.isRequired
}
