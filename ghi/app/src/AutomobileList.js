import React, {useState, useEffect} from 'react';

function AutomobileList(){
    const [automobiles,setAutomobiles] = useState([])

    async function fetchAutomobile(){
        const url ='http://localhost:8100/api/automobiles/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setAutomobiles(data.autos)
        }
    }

    useEffect(() => {
        fetchAutomobile();
    }, [])

    return(
        <>
        <div>
            <h1>Automobile</h1>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>

                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile =>{
                    return(
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                            <td>{automobile.sold? 'Yes' :'No'}</td>

                        </tr>
                    )
                    }
                    )
                }
            </tbody>
        </table>
        </>
    )
}
export default AutomobileList
