import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './landing.module.css';
import './index.css';
import SignInForm from './signin/index';
import SignUpForm from './signup';
export default function LandingPage() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className={styles.App}>
      <div className={styles.appAside} />
      <div className={styles.appForm}>
        <h1>Login/Signup</h1>
        <div className={styles.pageSwitcher}>
          <Link href="/sign-in" className={`${styles.pageSwitcherItem} ${isActive('/') ? `${styles["pageSwitcherItem-active"]}` : ''}`}>
            Sign In
          </Link>
          <Link href="/" className={`${styles.pageSwitcherItem} ${isActive('/signup') ? `${styles["pageSwitcherItem-active"]}` : ''}`}>
            Sign Up
          </Link>
        </div>

        <div className={styles.formTitle}>
        <Link href="/sign-in" className={`${styles.formTitleLink} ${isActive('/') ? `${styles["formTitleLink-active"]}` : ''}`}>
            Sign In
          </Link>
          <Link href="/" className={`${styles.formTitleLink} ${isActive('/signup') ? `${styles["formTitleLink-active"]}` : ''}`}>
            Sign Up
          </Link>
        </div>

        {router.pathname === '/' && <SignUpForm />}
        {router.pathname === '/sign-in' && <SignInForm />}
      </div>
    </div>
  );
}
