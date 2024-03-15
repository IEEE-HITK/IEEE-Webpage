'use client';
import React,{ useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Admin from './Admin';
import Editor from './Editor';
import None from './None';
const AdminP = ({data}) => {
    const [auth, setAuth] = React.useState("NL");
    const { user, error, isLoading } = useUser();
    useEffect(() => {
        console.log("yooo")
        console.log("in adminP",user.email,data.data);
        if(!data.data) return;
        for (let i = 0; i < data.data.length; i++) {
            if(user.email == data.data[i].Email){
                console.log(data.data[i].Auth)
                setAuth(data.data[i].Auth);
                console.log("in adminP",user.email,data.data[i].Email);
                return;
            }
        }
    }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
        {(auth == "NL")?<div><None /></div>:
        (auth == "Admin")?<div><Admin data={data} /></div>:
        (auth=="Editor")?<div><Editor /></div>:<div><None /></div>}
                
                <a href="/api/auth/logout">Logout</a>
            </div>
  )
}

export default AdminP