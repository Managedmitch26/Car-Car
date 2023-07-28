import React, { useState } from 'react';

function SalespeopleForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const data = {
            "first_name":firstName,
            "last_name":lastName,
            "employee_id":employeeId
        }


        const SalespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const response = await fetch(SalespeopleUrl, fetchConfig)

        if (response.ok){
            const newSalesperson = await response.json()
            console.log(newSalesperson)
            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
    }

    function handleFirstName(event){
        const {value} = event.target
        setFirstName(value)
    }

    function handleLastName(event){
        const {value} = event.target
        setLastName(value)
    }

    function handleEmployeeId(event){
        const {value} = event.target
        setEmployeeId(value)
    }


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                    <div className="form-floating mb-3">
                        <input value={firstName} onChange={handleFirstName} placeholder="firstName" required type="text" name="firstName" id="firstName" className="form-control" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={lastName} onChange={handleLastName} placeholder="lastName" required type="text" name="lastName" id="lastName" className="form-control" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={employeeId} onChange={handleEmployeeId} placeholder="employeeId" required type="text" name="employeeId" id="employeeId" className="form-control" />
                        <label htmlFor="employeeId">Employee ID</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default SalespeopleForm
