import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SaleseopleList';
import SalespeopleForm from './SalespersonForm';
import CustomerForm from './CustomerForm';
import SalesForm from './SalesForm';
import SalesList from './ListSales';
import SalespeopleSalesList from './SalespersonSalesList';
import AutomobileList from './AutomobileList';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelList';
import ManufacturerForm from './ManufacturerForm';
import AutomobileForm from './VehicleModelForm';
import VehicleModelForm from './AutomobileForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
