import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import '../assets/viewRegistration.css'



function ViewRegistration(){
    const nav = useNavigate();
     
    const handleViewDetail =(rowData)=>{
        nav("/detail", {state: rowData});
    }

    const [data, setData] =useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/viewRegistration")
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
                {d.id} 
            </td>
            <td>
                {d.event_name} 
            </td>
            <td>
                {d.receipt_path} 
            </td>
            <td>
                {d.username} 
            </td>
            <td>
                {d.id} 
            </td>
            <td className='btn-v'>
            <button onClick={() => handleViewDetail(d)}>View Detail</button>
 
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