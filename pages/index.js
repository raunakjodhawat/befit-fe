import { useState } from 'react';
import styles from './landing.module.css';
import { useRouter } from 'next/router';
export default function LandingPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    if (token) {
      const authCheckerResponse = await fetch('/api/authChecker', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      });
      if (authCheckerResponse.ok) {
        router.push('/home');
      } else {
        window.localStorage.removeItem('token');
        router.push('/');
      }
    } else {
      const loginResponse = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (loginResponse.ok) {
        window.localStorage.setItem('token', `Bearer ${window.btoa(`${username}:${password}`)}`);
        router.push('/home');
      } else {
        const signUpResponse = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (signUpResponse.ok) {
          window.localStorage.setItem('token', `Bearer ${window.btoa(`${username}:${password}`)}`);
          router.push('/home');
        } else {
          console.error('Failed to create user');
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login/Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Get me In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
