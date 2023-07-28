import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SaleseopleList';
import SalespeopleForm from './SalespersonForm';
import CustomerForm from './CustomerForm';
import SalesForm from './SalesForm';
import SalesList from './SalesList';
import SalespeopleSalesList from './SalespersonSalesList';
import AutomobileList from './AutomobileList';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelList';
import ManufacturerForm from './ManufacturerForm';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './ServiceAppointmentForm';
import TechnicianList from './TechnicianList';
import AppointmentsList from './ServiceAppointmentsList';
import ServiceHistoryList from './ServiceHistoryList';
import VehicleModelForm from './VehicleModelForm';
import AutomobileForm from './AutmobileForm';

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
            <Route path="form" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="form" element={<AutomobileForm />} />
          </Route>
          <Route path='/technicians/create' element={<TechnicianForm />} />
          <Route path="/appointments/create" element={<AppointmentForm />} />
          <Route path='technicians' element={<TechnicianList />} />
          <Route path='/appointments' element={<AppointmentsList />} />
          <Route path='/appointments/history' element={<ServiceHistoryList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
