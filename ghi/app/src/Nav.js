import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Salespeople
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/salespeople/">Salespeople List</a></li>
              <li><a className="dropdown-item" href="/salespeople/form/">New Salesperson Form</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Customers
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/customer/form/">New Customer Form</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/sale/form/">New Sale Form</a></li>
              <li><a className="dropdown-item" href="/sale/">Sale List</a></li>
              <li><a className="dropdown-item" href="/sale/salesbysalesperson/">Sales by Salesperson</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Manufacturers
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/manufacturers/">Manufacturers List</a></li>
              <li><a className="dropdown-item" href="/manufacturers/form/">Manufacturers Form</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Vehicle Models
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/models/">Vehicle Models List</a></li>
              <li><a className="dropdown-item" href="/models/form/">Vehicle Models Form</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Automobiles
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/automobiles/">Automobile List</a></li>
              <li><a className="dropdown-item" href="/automobiles/form/">Automobile Form</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Technicians
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/technicians/create">Add a Techniciant</a></li>
              <li><a className="dropdown-item" href="/technicians">Technicians</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Appointments
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/appointments/create">Create a service appointment</a></li>
              <li><a className="dropdown-item" href="/appointments">Appointments</a></li>
              <li><a className="dropdown-item" href="/appointments/history">Service History</a></li>
            </ul>
          </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
