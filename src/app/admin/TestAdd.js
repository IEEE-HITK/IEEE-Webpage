import React from 'react'

const TestAdd = () => {
    const [data, setData] = React.useState([{Name:"name",Message:"message"}]);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/test');
            const data = await res.json();
            console.log(data.data);
            setData(data.data);
        };
        fetchData();
    },[]);
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleChange2 = (e) => {
        setMessage(e.target.value);
    }

    const handleDelete = (mes) => {
        const dataa = {Message:mes};
        fetch('/api/test', {
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
        const dataa = {Name:name,Message:message};
        fetch('/api/test', {
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
    <div class="testimonial-container-124">
        <br />
        <p>Here is TESTIMONIAL LIST:</p>
        <div className='table-container-122'>
        <table class="testimonial-table-124">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {(data.length>0) ? data.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.Name}</td>
                            <td>{item.Message}</td>
                            <td><button onClick={() => handleDelete(item.Message)}>Delete</button></td>
                        </tr>
                    )
                }) : <></>}
            </tbody>
        </table>
        </div>
        <div class="form-container-124">
            
            <label style={{fontSize:"25px"}}>Add Testimonial Form</label>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" onChange={handleChange} />
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter Message" onChange={handleChange2}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>

  )
}

export default TestAdd