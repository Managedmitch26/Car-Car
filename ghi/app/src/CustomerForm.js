import React, { useState } from 'react';

function CustomerForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            "first_name":firstName,
            "last_name":lastName,
            "address":address,
            "phone_number":phoneNumber

        }


        const CustomerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const response = await fetch(CustomerUrl, fetchConfig)

        if (response.ok){
            const newCustomer = await response.json()
            console.log(newCustomer)
            setFirstName('')
            setLastName('')
            setAddress('')
            setPhoneNumber('')
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

    function handleAddress(event){
        const {value} = event.target
        setAddress(value)
    }
    function handlePhoneNumber(event){
        const {value} = event.target
        setPhoneNumber(value)
    }


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
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
                        <input value={address} onChange={handleAddress} placeholder="address" required type="text" name="address" id="address" className="form-control" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <label>Phone Number: xxx-xxx-xxxx</label>
                    <div className="form-floating mb-3">
                        <input value={phoneNumber} onChange={handlePhoneNumber} placeholder="phoneNumber" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" />
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default CustomerForm
