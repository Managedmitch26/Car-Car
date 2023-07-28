import React, { useState, useEffect } from "react";

function ServiceHistoryList(props) {
  const [appointments, setAppointments] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [automobiles, setAutomobiles] = useState([]);

  async function loadHistory(){
    const response = await fetch('http://localhost:8080/api/appointments/history/');
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

  useEffect(() => {
    loadHistory();
    loadAutomobiles();
  }, []);

  const formatted = Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
  }).format(appointments.date);


    return (
        <><h1>Service History</h1>
            <input className="searchInput" type="search" placeholder="search" onChange={(e) => setSearchInput(e.target.value)} />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {appointments.filter((appointment) => {
                  return searchInput === '' ? appointment : appointment.vin.includes(searchInput);
                }).map(appointment => {
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
                            <td>{appointment.vin}</td>
                            <td>{ vip }</td>
                            <td>{appointment.customer}</td>
                            <td>{formatted}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table></>
    );
  }

  export default ServiceHistoryList;
