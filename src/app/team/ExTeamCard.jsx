"use client"
import { useState, useEffect } from "react";

const ExTeamCard = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/com");
        const data = await response.json();
        let dd = data.data;
        let ddd=[];
        for(let i =0 ;i<dd.length;i++){
         if ( dd[i].Type === "Stu" && dd[i].Status === "Ex")
         ddd.push(dd[i]);
        }
        console.log(ddd)
        setTeam(ddd);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="teamflex12">
        {team.map((val, index) => (
        <div key={index}>
         
        <div className="items12 shadow">
          <div className="img">
            <img src={val.Image} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="details details12">
            <h2 className="text-white">{val.Name}</h2>
            <h4 className="text-white">{val.Post}</h4>
            <h4 className="text-white">{val.Gm}</h4>

          </div>
        </div>
      
        </div>
      ))}
    

     
    </div>
  );
};

export default ExTeamCard;
