import React, { useState, useEffect } from 'react';

function SalesForm(){
    const [automobile, setAutomobile] = useState('')
    const [automobiles, setAutomobiles] = useState([])
    const [salesperson, setSalesperson] = useState('')
    const [salespeople, setSalespeople] = useState([])
    const [customer, setCustomer] = useState('')
    const [customers, setCustomers] = useState([])
    const [price, setPrice] = useState('')

    async function fetchAutomobile(){
        const url ='http://localhost:8100/api/automobiles/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setAutomobiles(data.autos)
        }
    }
    async function fetchCustomer(){
        const url ='http://localhost:8090/api/customers/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setCustomers(data.customer)
        }
    }
    async function fetchSalespeople(){
        const url ='http://localhost:8090/api/salespeople/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setSalespeople(data.salesperson)
        }
    }

    useEffect(() => {
        fetchSalespeople();
    }, [])

    useEffect(() => {
        fetchCustomer();
    }, [])

    useEffect(() => {
        fetchAutomobile();
    }, [])


    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            "automobile":automobile,
            "salesperson":salesperson,
            "customer":customer,
            "price":price

        }

        const SalesUrl = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const response = await fetch(SalesUrl, fetchConfig)

        if (response.ok){
            const newSale = await response.json()
            console.log(newSale)
            setAutomobile('')
            setSalesperson('')
            setCustomer('')
            setPrice('')
        }


        const autoUrl = `http://localhost:8100/api/automobiles/${automobile}/`

        const autoData = {
            "sold":true
        }

        const autofetchConfig = {
        method: "put",
        body: JSON.stringify(autoData),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const autoresponse = await fetch(autoUrl, autofetchConfig)
        window.location.reload()
        if (response.ok){
            const newCustomer = await autoresponse.json()
            console.log(newCustomer)
    }}

    function handleAutomobile(event){
        const {value} = event.target
        setAutomobile(value)
    }

    function handleSalespeople(event){
        const {value} = event.target
        setSalesperson(value)
    }

    function handleCustomers(event){
        const {value} = event.target
        setCustomer(value)
    }
    function handlePrice(event){
        const {value} = event.target
        setPrice(value)
    }

    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <select value ={automobile} onChange={handleAutomobile} required name="automobile" id="automobile" className="form-select">
                            <option value="">Choose a vin</option>
                            {automobiles.filter(auto =>auto.sold===false).map((automobile) =>{
                                return(
                                    <option key={automobile.vin} value={automobile.vin}>{automobile.vin}</option>
                                )})}
                            </select>

                        </div>
                        <div className="form-floating mb-3">
                            <select value ={salesperson} onChange={handleSalespeople} required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Choose a salesperson</option>
                            {salespeople.map((salesperson) =>{
                                return(
                                    <option key={salesperson.employee_id} value={salesperson.employee_id}>{salesperson.first_name +" "+ salesperson.last_name }</option>
                                )})}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <select value ={customer} onChange={handleCustomers} required name="customer" id="customer" className="form-select">
                            <option value="">Choose a customer</option>
                            {customers.map((customer) =>{
                                return(
                                    <option key={customer.id} value={customer.id}>{customer.first_name +" "+customer.last_name}</option>
                                )})}
                            </select>
                        </div>
                        <label>Do not include commas in price</label>
                        <div className="form-floating mb-3">
                            <input value={price} onChange={handlePrice} placeholder="price" required type="text" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default SalesForm
