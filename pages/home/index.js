import LoginRedirector from '@/src/components/loginRedirector';
import styles from './home.module.css';
import Header from '@/src/components/header';
import SearchBar from '@/src/components/searchbar';
export default function HomePage() {
    return (
        <div>
            <LoginRedirector />
            <Header />
            <SearchBar />
        </div>
    );
}