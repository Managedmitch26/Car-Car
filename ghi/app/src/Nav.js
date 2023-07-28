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
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/salespeople/">Salespeople List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/salespeople/form/">New Salesperson Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/customer/form/">New Customer Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sale/form/">New Sale Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sale/">Sale List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sale/salesbysalesperson/">Sales by Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/manufacturers/">Manufacturers List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/manufacturers/form/">Manufacturers Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/models/">Vehicle Models List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/models/form/">Vehicle Models Form</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/automobiles/">Automobile List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/automobiles/form/">Automobile Form</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" aria-current="page" to="/technicians/create">Add a Technician</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" aria-current="page" to="/technicians">Technicians</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" aria-current="page" to="/appointments/create">Create a service appointment</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" aria-current="page" to="/appointments">Service Appointments</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link active" aria-current="page" to="/appointments/history">Service History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
