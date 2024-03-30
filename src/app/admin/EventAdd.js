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
    const [eventType, setEventType] = React.useState("non-speaker");
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
        let dataa
        if(eventType === "speaker"){
            dataa = {Name:name,EventDetails:message,EventBanner:banner,Time:time,Venue:venue,EventType:eventType,Speaker:speakers};
        }
        else{
            dataa = {Name:name,EventDetails:message,EventBanner:banner,Time:time,Venue:venue,EventType:eventType};
        }
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
    <div class="event-container-125">
      <br />
      <p>Here is EVENT LIST:</p>
      <div className='table-container-122'>
      <table class="event-table-125">
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
              {(data.length > 0) ? data.map((event, index) => (
                  <tr key={index}>
                      <td>{event.Name}</td>
                      <td>{event.Venue}</td>
                      <td>{event.Time}</td>
                      <td>{event.EventDetails}</td>
                      <td><img src={event.EventBanner} alt="Event Banner" style={{ width: '100px', height: 'auto' }} /></td>
                      <td>
                          <ul>
                              {(event.EventGallery !== undefined && event.EventGallery.length > 0 && event.EventGallery !== null) ? event.EventGallery.map((image, i) => (
                                  <li key={i}><img src={image} alt={`Gallery Image ${i}`} style={{ width: '80px', height: 'auto' }} />
                                  <hr style={{marginTop:"10px"}} /></li>
                              )) : <>No pic yet</>}
                              <li>
                                  <input type="text" placeholder="enter url of next pic" value={galleryInput} onChange={handleEditGalleryInputChange} />
                                  <button style={{marginLeft:"10px"}} onClick={() => handleAddGallery(index)}>Add</button>
                              </li>
                          </ul>
                      </td>
                      <td>{event.EventType}</td>
                      {(event.EventType === "speaker") ?
                          <td>
                              {event.Speaker.map((speaker, i) => (
                                  <div key={i}>
                                      <p>Name: {speaker.SpeakerName}</p>
                                      <p>Details: {speaker.SpeakerDetails}</p>
                                      <img src={speaker.SpeakerImage} alt={`Speaker ${i}`} style={{ width: '50px', height: 'auto' }} />
                                      <hr style={{marginTop:"10px"}} />
                                  </div>
                                  
                              ))}
                          </td>
                          : <td>No Speaker</td>}
                      <td>
                          <button onClick={() => { handleUpdate(event.Name, index) }}>Update</button>
                          <button onClick={() => { handleDelete(event.Name) }}>Delete</button>
                      </td>
                  </tr>
              )) : <tr>
                  <td>No events yet</td>
              </tr>}
          </tbody>
      </table>
      </div>
      <div class="form-container-125">
      <label style={{fontSize:"25px"}}>Add Event Form</label>
          <label for="name">Name:</label>
          <input style={{ color: "black" }} type="text" id="name" name="name" placeholder='Enter Name' onChange={handleChange} />
          <label for="eventDetails">Event Details:</label>
          <textarea style={{ color: "black" }} type="text" id="eventDetails" name="eventDetails" placeholder='Enter EventDetails' onChange={handleChange2} />
          <label for="eventBanner">Event Banner:</label>
          <input style={{ color: "black" }} type="file" id="eventBanner" name="eventBanner" placeholder='Enter EventBanner' onChange={handleChange3} />
          <button onClick={addBanner}>Upload</button>
          <label for="time">Time:</label>
          <input style={{ color: "black" }} type="text" id="time" name="time" placeholder='Enter Time' onChange={handleChange4} />
          <label for="venue">Venue:</label>
          <input style={{ color: "black" }} type="text" id="venue" name="venue" placeholder='Enter Venue' onChange={handleChange5} />
          <label for="eventType">Event Type:</label>
          <select style={{ color: "black" }} id="eventType" name="eventType" onChange={handleChange6}>
              <option value="non-speaker">Non Speaker</option>
              <option value="speaker">Speaker</option>
          </select>
          {(eventType === "speaker") ?
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

                          <button onClick={() => { handlespim(index) }}>Upload</button>

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
              : <></>}
          <button onClick={handleSubmit}>Submit</button>
      </div>
  </div>

  )
}

export default TestAdd