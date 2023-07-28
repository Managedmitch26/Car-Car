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
          <Route path="salespeople">
            <Route index element={<SalespeopleList />} />
            <Route path="form" element={<SalespeopleForm />} />
          </Route>
          <Route path="customer">
            <Route path="form" element={<CustomerForm />} />
          </Route>
          <Route path="sale">
            <Route index element={<SalesList />} />
            <Route path="form" element={<SalesForm />} />
            <Route path="salesbysalesperson" element={<SalespeopleSalesList />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="form" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route index element={<VehicleModelList />} />
            <Route path="form" element={<AutomobileForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="form" element={<VehicleModelForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
