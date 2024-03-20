import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../landing.module.css';

export default function SignUp() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
    };

    return (
        <div className={styles.formCenter}>
            <form onSubmit={handleSubmit} className={styles.formFields}>
                <div className={styles.formField}>
                    <label htmlFor="username" className={styles.formFieldLabel}>Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        className={styles.formFieldInput}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password" className={styles.formFieldLabel}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className={styles.formFieldInput}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.formField}>
                    <button className={styles.formFieldButton}>Sign Up</button>{" "}
                    {/* <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link> */}
                </div>
            </form>
        </div>
    );
}