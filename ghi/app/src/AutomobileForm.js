import React, { useState, useEffect } from 'react';

function AutomobileForm(){
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [vin, setVin] = useState('')
    const [models, setModels] = useState([])
    const [model, setModel] = useState('')


    async function fetchAutomobile(){
        const url ='http://localhost:8100/api/models/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setModels(data.models)
        }
    }

    useEffect(() => {
        fetchAutomobile();
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            "color":color,
            "year":year,
            "vin":vin,
            "model_id":model

        }


        const AutoUrl = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const response = await fetch(AutoUrl, fetchConfig)

        if (response.ok){
            const newCustomer = await response.json()
            console.log(newCustomer)
            setColor('')
            setYear('')
            setVin('')
            setModel('')
        }

    }

    function handleColor(event){
        const {value} = event.target
        setColor(value)
    }

    function handleYear(event){
        const {value} = event.target
        setYear(value)
    }

    function handleVin(event){
        const {value} = event.target
        setVin(value)
    }
    function handleModel(event){
        const {value} = event.target
        setModel(value)
    }


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a automobile</h1>
                        <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleColor} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYear} placeholder="year" required type="text" name="year" id="year" className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select onChange={handleModel} required name="model" id="model" className="form-select">
                            <option value="">Choose a vehicle model</option>
                            {models.map((model) =>{
                                return(
                                    <option key={model.id} value={model.id}>{model.name}</option>
                                )})}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default AutomobileForm
