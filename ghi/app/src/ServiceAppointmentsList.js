import React, { useState, useEffect } from "react";

function AppointmentsList(props) {
  const [appointments, setAppointments] = useState([]);
  const [automobiles, setAutomobiles] = useState([]);

  async function loadAppointments(){
    const response = await fetch('http://localhost:8080/api/appointments/');
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    } else {
      console.log(response)
    }
  }

  async function loadAutomobiles() {
    const response = await fetch('http://localhost:8100/api/automobiles/')
    if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos);
    } else {
        console.log(response)
    }
  }

  const handleFinish = async (appointmentsId) => {
    const response = await fetch(`http://localhost:8080/api/appointments/${appointmentsId}/finish/`, {
      method: "PUT",
    });
    if (response.ok) {
      loadAppointments()
    } else {
      console.log(response)
    }
  }

  const handleCancel = async (appointmentsId) => {
    const response = await fetch(`http://localhost:8080/api/appointments/${appointmentsId}/cancel/`, {
      method: "PUT",
    });
    if (response.ok) {
      loadAppointments()
    } else {
      console.log(response)
    }
  }
  useEffect(() => {
    loadAppointments();
  }, []);
  useEffect(() => {
    loadAutomobiles();
  }, []);

  const formatted = Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
  }).format(appointments.date);

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            {/* <th>Time</th> */}
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            let vip = ""
            let vinVIP = []
            for (let auto of automobiles) {
              vinVIP.push(auto.vin)
              if (vinVIP.includes(appointment.vin)) {
                  vip = "Yes";
              } else {
                  vip = "No"
              }
            }
            return (
              <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ vip }</td>
                <td>{ appointment.customer }</td>
                <td>{ formatted }</td>
                {/* <td>{ appointment.time }</td> */}
                <td>{ appointment.technician.first_name } {appointment.technician.last_name}</td>
                <td>{ appointment.reason }</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleCancel(appointment.id)}>Cancel</button>
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => handleFinish(appointment.id)}>Finish</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  export default AppointmentsList;
