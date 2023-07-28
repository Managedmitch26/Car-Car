import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './ServiceAppointmentForm';
import TechnicianList from './TechnicianList';
import AppointmentsList from './ServiceAppointmentsList';
import ServiceHistoryList from './ServiceHistoryList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
