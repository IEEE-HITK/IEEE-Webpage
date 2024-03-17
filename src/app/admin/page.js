'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Data from './Data';
import React from 'react';
const page = () => {
    const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  React.useEffect(() => {
    if(!isLoading && !user){
        window.location.href = "/api/auth/login";
    }
  }, [user]);
  if (error) return <div>{error.message}</div>;
  return (
    <div>
        <div>
        {(user)?<>
            <div>
                <Data />
            </div>
        </>:<a href="/api/auth/login">Login</a>}
        </div>
        
    </div>
  )
}

export default page