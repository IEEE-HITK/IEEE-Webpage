import React from 'react'

const TestAdd = () => {
    const [data, setData] = React.useState([{Name:"name",Message:"message"}]);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/event');
            const data = await res.json();
            console.log(data.data);
            setData(data.data);
        };
        fetchData();
    },[]);
    const [name, setName] = React.useState("");
    const [eventType, setEventType] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [banner, setBanner] = React.useState("");
    const [time, setTime] = React.useState("");
    const [venue, setVenue] = React.useState("");
    const [speakers, setSpeakers] = React.useState([{ SpeakerName: '', SpeakerDetails: '', SpeakerImage: '' }]);
    const [galleryInput, setGalleryInput] = React.useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleChange2 = (e) => {
        setMessage(e.target.value);
    }
    const handleChange3 = (e) => {
        setBanner(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const addBanner = async() => {
      console.log(banner);
        const data = new FormData()
        data.append("file",banner)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        setBanner(fil.url);
        alert("Image Uploaded");
    }
    const handleChange4 = (e) => {
        setTime(e.target.value);
    }
    const handleChange5 = (e) => {
        setVenue(e.target.value);
    }
    const handleChange6 = (e) => {
        setEventType(e.target.value);
    }
    const handlespim = async(index) => {
    //////////////////////////////////////////////////////////////
        const data = new FormData()
        console.log(speakers[index].SpeakerImage);
        console.log(speakers[index].SpeakerImage);
        data.append("file",speakers[index].SpeakerImage)
        data.append("upload_preset","notepad")
        data.append("cloud_name","dcyfkgtgv")
        const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
            method:"post",
            body:data
        })
        const fil=await res.json();
        console.log(fil);
        let newspeakers=[...speakers];
        newspeakers[index].SpeakerImage=fil.url;
        setSpeakers(newspeakers);
        alert("Image Uploaded");
    //////////////////////////////////////////////////////////////
    }
    

    const handleDelete = (mes) => {
        const dataa = {Name:mes};
        fetch('/api/event', {
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
    const handleSubmit = async() => {
        const dataa = {Name:name,EventDetails:message,EventBanner:banner,Time:time,Venue:venue,EventType:eventType,Speaker:speakers};
        await fetch('/api/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataa),
        })
        .then(response => response.json())
        .then(dataa => {
            console.log('Success:', dataa);
            alert("Added event, pls reload the page");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleUpdate = (mes,index) => {
        const dataa = {Name:mes,EventGallery:data[index].EventGallery};
        fetch('/api/event', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataa),
        })
        .then(response => response.json())
        .then(dataa => {
            console.log('Success:', dataa);
            alert("Updated pls reload the page");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    const handleAddGallery = (index) => {
        const newData = [...data];
        newData[index].EventGallery.push(galleryInput);
        setData(newData);
        setGalleryInput('');
      };
    
      const handleEditGalleryInputChange = (event) => {
        setGalleryInput(event.target.value);
      };



  const handleAddSpeaker = () => {
    setSpeakers([...speakers, { SpeakerName: '', speakerDetails: '', SpeakerImage: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSpeakers = [...speakers];
    newSpeakers[index][name] = value;
    setSpeakers(newSpeakers);
  };

  const handleImageChange = (index, event) => {
    const newSpeakers = [...speakers];
    newSpeakers[index].SpeakerImage = event.target.files[0];
    setSpeakers(newSpeakers);
  };
  return (
    <div>
        <br />
        Here is EVENT LIST :
        <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Venue</th>
          <th>Time</th>
          <th>Event Details</th>
          <th>Event Banner</th>
          <th>Event Gallery</th>
          <th>Event Type</th>
          <th>Speakers</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {(data.length>0)?data.map((event, index) => (
          <tr key={index}>
            <td>{event.Name}</td>
            <td>{event.Venue}</td>
            <td>{event.Time}</td>
            <td>{event.EventDetails}</td>
            <td><img src={event.EventBanner} alt="Event Banner" style={{ width: '100px', height: 'auto' }} /></td>
            <td>
              <ul>
                {(event.EventGallery!==undefined&&event.EventGallery.length>0&&event.EventGallery!==null)?event.EventGallery.map((image, i) => (
                  <li key={i}><img src={image} alt={`Gallery Image ${i}`} style={{ width: '50px', height: 'auto' }} /></li>
                )):<>No pic yet</>}
                <li>
                  <input type="text" value={galleryInput} onChange={handleEditGalleryInputChange} />
                  <button onClick={() => handleAddGallery(index)}>Add</button>
                </li>
              </ul>
            </td>
            <td>{event.EventType}</td>
            {(event.EventType==="speaker")?
            <td>
              {event.Speaker.map((speaker, i) => (
                <div key={i}>
                  <p>{speaker.SpeakerName}</p>
                  <p>{speaker.SpeakerDetails}</p>
                  <img src={speaker.SpeakerImage} alt={`Speaker ${i}`} style={{ width: '50px', height: 'auto' }} />
                </div>
              ))}
            </td>
            :<td>No Speaker</td>}
            <td>
              <button onClick={()=>{handleUpdate(event.Name,index)}}>Update</button>
              <button onClick={()=>{handleDelete(event.Name)}}>Delete</button>
            </td>
          </tr>
        )):<tr>
            <td>No events yet</td>
            </tr>}
      </tbody>
    </table>
        <div>
            <label for="fname">Name:</label>
            <input style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter Name' onChange={handleChange} />
            <label for="fname">Event Details:</label>
            <textarea style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter EventDetails' onChange={handleChange2} />
            <label for="fname">Event Banner:</label>
            <input style={{color:"black"}} type="file" id="fname" name="fname" placeholder='Enter EventBanner' onChange={handleChange3} />
            <button onClick={addBanner}>Upload</button>
            <label for="fname">Time:</label>
            <input style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter Time' onChange={handleChange4} />
            <label for="fname">Venue:</label>
            <input style={{color:"black"}} type="text" id="fname" name="fname" placeholder='Enter Venue' onChange={handleChange5} />
            <label for="fname">Event Type:</label>
            <select style={{color:"black"}} id="fname" name="fname" onChange={handleChange6}>
                <option value="non-speaker">Non Speaker</option>
                <option value="speaker">Speaker</option>
            </select>
            {(eventType==="speaker")?
              <div>
              {speakers.map((speaker, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="SpeakerName"
                    placeholder="Speaker Name"
                    value={speaker.SpeakerName}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type="file"
                    name="SpeakerImage"
                    onChange={(event) => handleImageChange(index, event)}
                  />
                  
                <button onClick={()=>{handlespim(index)}}>Upload</button>

                  <textarea
                    name="SpeakerDetails"
                    placeholder="Speaker Details"
                    value={speaker.SpeakerDetails}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              ))}
              <button onClick={handleAddSpeaker}>Add Speaker</button>
            </div>
            :<></>}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default TestAdd