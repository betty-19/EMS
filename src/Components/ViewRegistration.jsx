import React, {useEffect, useState} from 'react'

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
    </div>
);
}
export default ViewRegistration;