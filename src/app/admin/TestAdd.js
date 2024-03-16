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
    <div>
        <br />
        Here is TESTIMONIAL LIST :
        <table style={{borderWidth:"2px",borderColor:"black"}}>
            <thead>
                <tr style={{borderWidth:"2px",borderColor:"black"}}>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>Name</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>Message</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>DELETE</th>
                </tr>
            </thead>

        <tbody>
        
        {(data.length>0)?data.map((item,key) => {
            return (
                <tr key={key} >
                    <th style={{borderWidth:"2px",borderColor:"black"}}>{item.Name}</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}>{item.Message}</th>
                    <th style={{borderWidth:"2px",borderColor:"black"}}><button onClick={()=>handleDelete(item.Message)}>Delete</button></th>
                </tr>
            )
        }):<></>}
        </tbody>
        </table>
        <div>
            <label for="fname">Name:</label>
            <input style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter Name' onChange={handleChange} />
            <label for="fname">Message:</label>
            <textarea style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter Message' onChange={handleChange2} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default TestAdd