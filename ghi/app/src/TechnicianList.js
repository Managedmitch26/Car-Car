import React, { useState, useEffect } from "react";

function TechnicianList(props) {
  const [technicians, setTechnicians] = useState([]);

  async function loadTechnicians(){
    const response = await fetch('http://localhost:8080/api/technicians/');
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technician);
    } else {
      console.log(response)
    }
  }

  useEffect(() => {
    loadTechnicians();
  }, []);

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {technicians.map(technician => {
            return (
              <tr key={technician.employee_id}>
                <td>{ technician.employee_id }</td>
                <td>{ technician.first_name}</td>
                <td>{ technician.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  export default TechnicianList;
