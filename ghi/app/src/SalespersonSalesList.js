import React, {useState, useEffect} from 'react';

function SalespeopleSalesList(){
    const [sales,setSales] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [salesperson, setSalesperson] = useState('')



    async function fetchSales(){
        const url ='http://localhost:8090/api/sales/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response.json()
            setSales(data.sales)
        }
    }

    async function fetchSalespeople(){
        const salespeopleUrl ='http://localhost:8090/api/salespeople/'

        const response = await fetch(salespeopleUrl);

        if (response.ok){
            const data = await response.json()
            setSalespeople(data.salesperson)
        }
    }

    useEffect(() => {
        fetchSales();
    }, [])
    useEffect(() => {
        fetchSalespeople();
    }, [])

    function handleSalespeople(event){
        const {value} = event.target
        setSalesperson(value)
    }

    return(
        <>
        <div>
            <h1>List of Sales by Salesperson</h1>
        </div>
        <div className = "filter-form">
        <select onChange={handleSalespeople}  name="salesperson" id="salesperson" className="form-select">
        <option value="">Employee ID</option>
            {salespeople.map(person =>{
                        return(
                <option key ={person.id} value={person.employee_id}>{person.employee_id}</option>            )
            }
            )}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Salesperson</th>
                    <th>Purchaser</th>
                    <th>Automobile Vin</th>
                    <th>Sale Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.filter(ids => ids.salesperson.employee_id ===salesperson?.toString() ).map(sale =>{
                    return(
                        <tr key={sale.id}>
                            <td>{sale.salesperson.first_name +" "+ sale.salesperson.last_name }</td>
                            <td>{sale.customer.first_name+" "+sale.customer.last_name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.price}</td>

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
export default SalespeopleSalesList
