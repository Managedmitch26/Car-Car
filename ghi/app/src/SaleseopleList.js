import React, {useState, useEffect} from 'react';

function SalespeopleList(props){
    const [salespeople,setSalespeople] = useState([])

    async function fetchSalespeople(){
        const url ='http://localhost:8080/api/salespeople/'

        const response = await fetch(url);

        if (response.ok){
            const data = await response
        }
    }









}
export default SalespeopleList
