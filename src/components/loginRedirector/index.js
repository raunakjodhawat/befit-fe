import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginRedirector() {
    const router = useRouter();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = window.localStorage.getItem('token');
            if (token) {
              const response = await fetch('/api/authChecker', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token,
                }
              });
              if (!response.ok) {
                setIsUserLoggedIn(false);
                router.push('/'); // Redirect to / route
              } else {
                setIsUserLoggedIn(true);
              }
            }
          } catch (error) {
            console.error(error);
          }
        };
  
        fetchData();
      }, []);

    return (
        <div />
    );
}