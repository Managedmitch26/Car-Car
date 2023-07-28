import React, {useState, useEffect} from 'react';

function SalespeopleList(props){
    const [salespeople,setSalespeople] = useState([])

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


    return(
        <>
        <div>
            <h1>Salespeople</h1>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {salespeople.map(salesperson =>{
                    return(
                        <tr key={salesperson.employee_id}>
                            <td>{salesperson.employee_id}</td>
                            <td>{salesperson.first_name}</td>
                            <td>{salesperson.last_name}</td>

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
export default SalespeopleList
