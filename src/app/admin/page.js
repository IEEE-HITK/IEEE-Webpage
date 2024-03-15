'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Data from './Data';
const page = () => {
    const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
        <div>Hello</div>
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