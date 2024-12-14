import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import '../assets/viewRegistration.css'
import expenditureImage from '../assets/Expenditure.jpg' 


function ViewRegistration(){
    const nav = useNavigate();
     
    const handleViewDetail =()=>{
        nav("/detail");
    }

    const [data, setData] =useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setData(data))
        .then(err => console.log(err));
    },[]);
return(
    <div className="view table">
<main className='table'>
    <section>
        <h1>Customer's Orders</h1>
    </section>
    <section className='table_body'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th> id </th>
                    <th>Customer</th>
                    <th>Location</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {data.map((d,i)=>(
        <tr key={i}>
            <td>
                {d.Id} 
            </td>
            <td>
                {d.Full_Name} 
            </td>
            <td>
                {d.username} 
            </td>
            <td>
                {d.password} 
            </td>
            <td>
                {d.Id} 
            </td>
            <td className='btn-v'>
                <button onClick={handleViewDetail}>View Detail</button> 
            </td>
        </tr>
    ))}
            </tbody>
        </table>

    </section>
    
</main>
    </div>
   
);
}
export default ViewRegistration;