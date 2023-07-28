import React, {useState, useEffect} from 'react';

function VehicleModelList(){
    const [vehicles,setVehicles] = useState([])

    async function fetchModels(){
        const url ='http://localhost:8100/api/models/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setVehicles(data.models)
        }
    }

    useEffect(() => {
        fetchModels();
    }, [])

    return(
        <>
        <div>
            <h1>Models</h1>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map(vehicle =>{
                    return(
                        <tr key={vehicle.id}>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.manufacturer.name}</td>
                            <td><img src={vehicle.picture_url} alt=""/></td>
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
export default VehicleModelList
