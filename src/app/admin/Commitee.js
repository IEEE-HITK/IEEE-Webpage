import React from 'react'

const Committee = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/com');
            const data = await res.json();
            console.log(data.data);
            setData(data.data);
        };
        fetchData();
    },[]);
    const [name, setName] = React.useState("");
    const [post, setPost] = React.useState("");
    const [type, setType] = React.useState("Fac");
    const [image, setImage] = React.useState("");
    const [li, setLi] = React.useState("");
    const [gm, setGm] = React.useState("");
    const [tw, setTw] = React.useState("");
    const [status, setStatus] = React.useState("Cur");

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleChange2 = (e) => {
        setPost(e.target.value);
    }
    const handleChange3 = (e) => {
        setType(e.target.value);
    }
    const handleChange4 = (e) => {
        setImage(e.target.files[0]);
    }
    const handleChange5 = (e) => {
        setLi(e.target.value);
    }
    const handleChange6 = (e) => {
        setGm(e.target.value);
    }
    const handleChange7 = (e) => {
        setTw(e.target.value);
    }
    const handleChange11 = (e) => {
        setStatus(e.target.value);
    }
    const handleUpload = async() => {
        const data = new FormData();
        data.append("file",image)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        setImage(fil.url);
        alert("Image Uploaded");
    }

    const handleDelete = (mes) => {
        const dataa = {Message:mes};
        fetch('/api/com', {
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
        const dataa = {Name:name,Post:post,Type:type,Image:image,Li:li,Gm:gm,Tw:tw,Status:status};
        fetch('/api/com', {
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
    <div class="committee-container-123">
        <br />
        <p>Here is the Committee List:</p>
        <div className='table-container-122'>
        <table class="committee-table-123">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Image</th>
                    <th>Linkedin</th>
                    <th>Gmail</th>
                    <th>Twitter</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {(data.length>0) ? data.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.Name}</td>
                            <td>{item.Post}</td>
                            <td>{item.Type}</td>
                            <td>{item.Status}</td>
                            <td><img style={{width:"200px",height:"auto"}} src={item.Image} alt="not proper pic" /></td>
                            <td>{item.Li}</td>
                            <td>{item.Gm}</td>
                            <td>{item.Tw}</td>
                            <td><button onClick={() => handleDelete(item.Name)}>Delete</button></td>
                        </tr>
                    )
                }) : <></>}
            </tbody>
        </table>
        </div>
        <div class="form-container-123">
            <label style={{fontSize:"25px"}}>Add Committee Form</label>
            <div className='dflex123'>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" onChange={handleChange} />
            </div>
            <div className='dflex123'>
                <label for="post">Post:</label>
                <input type="text" id="post" name="post" placeholder="Enter Post" onChange={handleChange2} />
            </div>
            <div className='dflex123'>
                <label for="type">Type:</label>
                <select id="type" name="type" placeholder="Enter Type" onChange={handleChange3}>
                    <option value="Fac">Faculty</option>
                    <option value="Stu">Student</option>
                </select>
            </div>
            <div className='dflex123'>
                <label for="type">Status:</label>
                <select id="type" name="type" placeholder="Enter Type" onChange={handleChange11}>
                    <option value="Cur">Current member</option>
                    <option value="Ex">Ex-member</option>
                </select>
            </div>
            <div className='dflex123'>
                <label for="image">Image:</label>
                <input type="file" id="image" name="image" placeholder="Enter Image" onChange={handleChange4} />
                
            </div>
            <button onClick={handleUpload}>Upload</button>
            <div className='dflex123'>
                <label for="linkedin">Linkedin:</label>
                <input type="text" id="linkedin" name="linkedin" placeholder="Enter Linkedin" onChange={handleChange5} />
            </div>
            <div className='dflex123'>
                <label for="gmail">Gmail:</label>
                <input type="text" id="gmail" name="gmail" placeholder="Enter Gmail" onChange={handleChange6} />
            </div>
            <div className='dflex123'>
                <label for="twitter">Twitter:</label>
                <input type="text" id="twitter" name="twitter" placeholder="Enter Twitter" onChange={handleChange7} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>

  )
}

export default Committee