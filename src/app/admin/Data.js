'use client';
import React,{useEffect} from 'react';
import AdminP from './AdminP';
const Data = () => {
    const [authD, setAuthD] = React.useState("NL");
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api');
            const data = await res.json();
            setAuthD(data);
            console.log(data);
        };
        fetchData();

    }, []);
  return (
    <div><AdminP data={authD} /></div>
  )
}

export default Data