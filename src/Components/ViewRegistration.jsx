import React, {useEffect, useState} from 'react'

import '../assets/viewRegistration.css'
function ViewRegistration(){

    const [data, setData] =useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setData(data))
        .then(err => console.log(err));
    },[]);
return(
    <div className="">
        <table class="table table-hover">
 <thead>
    <th>ID</th>
    <th>Full Name
    </th>
    <th>username
    </th>
 </thead>
 <tbody>
    {data.map((d,i)=>(
        <tr key={i}>
            <td>
                {d.id} 
            </td>
            <td>
                {d.Full_Name} 
            </td>
            <td>
                {d.username} 
            </td>
        </tr>
    ))}
 </tbody>
</table>
<main className='table'>
    <section>
        <h1>Customer's Orders'</h1>
    </section>
    <section className='table_body'>
        <table>
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
                <tr>
                    <td>1</td>
                    <td><img src="../assets/Expenditure.jpg" alt="" /></td>
                    <td>Addis Ababa</td>
                    <td>17 Dec, 2022</td>
                    <td>
                        <p className='status delivered '>Delivered</p>
                    </td>
                    <td>$128.90</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="../assets/Expenditure.jpg" alt="" /></td>
                    <td>Addis Ababa</td>
                    <td>17 Dec, 2022</td>
                    <td>
                        <p className='status delivered '>Delivered</p>
                    </td>
                    <td>$128.90</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="../assets/Expenditure.jpg" alt="" /></td>
                    <td>Addis Ababa</td>
                    <td>17 Dec, 2022</td>
                    <td>
                        <p className='status Cancelled '>Cancelled</p>
                    </td>
                    <td>$128.90</td>
                </tr>
            </tbody>
        </table>

    </section>
    
</main>
    </div>
   
);
}
export default ViewRegistration;