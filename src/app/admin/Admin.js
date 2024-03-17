import React from 'react'
import TestAdd from './TestAdd';
import EventAdd from './EventAdd'
import Committee from './Commitee';

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
    <div  >
        <h2 style={{color:"white",padding:"20px",fontWeight:"700"}}>HELLO ADMIN!<br />
        Here is admin list :</h2>
        <div class="table-container-122">
            <table class="data-table-122">
                <thead>
                    <tr>
                        <th style={{borderColor:"white"}}>Email</th>
                        <th style={{borderColor:"white"}}>Auth</th>
                        <th style={{borderColor:"white"}}>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {(data.data).map((item, key) => {
                        return (
                            <tr key={key}>
                                <td style={{borderColor:"white"}}>{item.Email}</td>
                                <td style={{borderColor:"white"}}>{item.Auth}</td>
                                <td style={{borderColor:"white"}}><button onClick={() => handleDelete(item.Email)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

        <div class="form-container-122">
            <form>
                <label style={{fontSize:"25px"}}>Add Admin Form</label><br />
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" class="email-input-122" onChange={handleChange} />
                <select class="auth-select-122" onChange={handleChange2}>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                </select>
                <button type="button" class="submit-button-122" onClick={handleSubmit}>Submit</button>
            </form>
        </div>


        <hr />
        <hr />
        <Committee />
        <hr />
        <TestAdd />
        <hr />
        <EventAdd />
    </div>
  )
}

export default Admin