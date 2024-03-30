import { useState, useEffect } from "react";

const ExFacultyCard = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch("/api/com");
        const data = await response.json();
        let dd = data.data;
        let ddd=[];
       for(let i =0 ;i<dd.length;i++){
        if ( dd[i].Type === "Fac" && dd[i].Status === "Ex")
        ddd.push(dd[i]);
       }
       console.log(ddd)
       setFaculty(ddd);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <div className="facultyflex12">
      {faculty.map((val, index) => (
        <div key={index} className="items12 shadow">
          <div className="img">
            <img src={val.Image} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
            </div>
          </div>
          <div className="details details12">
            <h2>{val.Name}</h2>
            <h4>{val.Post}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExFacultyCard;