import React, { useEffect, useState } from 'react';

function AppointmentForm() {
    const[technicians, setTechnicians] = useState([])
    const[hasSignedUp, setHasSignedUp] = useState(false);
    const [formData, setFormData] = useState({
        vin: '',
        customer: '',
        date: '',
        time: '',
        technician: '',
        reason: '',
    })

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technician)
        }
      }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

    const url = 'http://localhost:8080/api/appointments/';

    const fetchConfig = {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
        setFormData({
          vin: '',
          customer: '',
          date: '',
          time: '',
          technician: '',
          reason: '',
        });
        setHasSignedUp(true)
    }
}
const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
        ...formData,
        [inputName]: value
    });
}

let messageClasses = 'alert alert-success d-none mb-0';
let formClasses = '';
if (hasSignedUp) {
  messageClasses = 'alert alert-success mb-0';
  formClasses = 'd-none';
}

return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create a service appointment</h1>
        <form className={formClasses} onSubmit={handleSubmit} id="create-shoes-form">

          <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
            <label htmlFor="vin">Vin</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
            <label htmlFor="customer">Customer</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="date" required type="date" name="date" id="date" className="form-control" />
            <label htmlFor="date">Date</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleFormChange} placeholder="time" required type="time" name="time" id="time" className="form-control" />
            <label htmlFor="time">Time</label>
          </div>

          <div className="mb-3">
            <label htmlFor="reason">Reason</label>
            <textarea onChange={handleFormChange} rows = "3" name="reason" id="reason" className="form-control" />
          </div>
          <div className="mb-3">
            <select onChange={handleFormChange} required name="technician" id="technician" className="form-select" >
              <option value="">Technician</option>
              {technicians.map(technician => {
                return (
                  <option key={technician.employee_id} value={technician.employee_id}>{technician.first_name}</option>
                )
              })}
            </select>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
        <div className={messageClasses} id="success-message">
            You're appointment was created!
        </div>
      </div>
    </div>
  </div>
)
}

export default AppointmentForm
