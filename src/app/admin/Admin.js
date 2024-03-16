import React from 'react'
import TestAdd from './TestAdd';
import EventAdd from './EventAdd'

const Admin = ({data}) => {
    const [email, setEmail] = React.useState("");
    const [auth, setAuth] = React.useState("Admin");
    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleChange2 = (e) => {
        setAuth(e.target.value);
    }
    const handleDelete = (emailed) => {
        const dataa = {Email:emailed};
        fetch('/api', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataa),
        })
        .then(response => response.json())
        .then(dataa => {
            console.log('Success:', dataa);
            alert("Deleted pls reload the page");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    const handleSubmit = () => {
        const dataa = {Email:email,Auth:auth};
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataa),
        })
        .then(response => response.json())
        .then(dataa => {
            console.log('Success:', dataa);
            alert("Submitted pls reload the page");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <div>HELLO ADMIN!<br />
        Here is admin list :
        <table style={{borderWidth:"2px",borderColor:"black"}}>
            <thead>
                <tr style={{borderWidth:"2px",borderColor:"black"}}>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>Email</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>Auth</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>DELETE</th>
                </tr>
            </thead>

        <tbody>
        
        {(data.data).map((item,key) => {
            return (
                <tr key={key} >
                    <th style={{borderWidth:"2px",borderColor:"black"}}>{item.Email}</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>{item.Auth}</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}><button onClick={()=>handleDelete(item.Email)}>Delete</button></th>
                </tr>
            )
        })}
        </tbody>
        </table>
        <div>
            <label for="fname">Email:</label>
            <input style={{color:"black"}} type="text" id="fname" name="fname" onChange={handleChange} />
            <select style={{color:"black"}} onChange={handleChange2}>
                <option style={{color:"black"}} value="Admin">Admin</option>
                <option style={{color:"black"}} value="Editor">Editor</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <hr />
        <TestAdd />
        <hr />
        <EventAdd />
    </div>
  )
}

export default Admin