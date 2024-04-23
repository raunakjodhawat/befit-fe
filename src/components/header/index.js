import styles from './header.module.css';
import { useRouter } from 'next/router';
import '../../../pages/index.css';

export default function Header() {
    const router = useRouter();
    function logoutUser() {
        window.localStorage.removeItem('token');
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }
    return (
        <div className={styles.HeaderContainer}>
            <h1 className={styles.HeaderText}>HomePage</h1>
            <button className={styles.HeaderLogoutButton} onClick={() => logoutUser()} >Logout</button>
        </div>
    );
}