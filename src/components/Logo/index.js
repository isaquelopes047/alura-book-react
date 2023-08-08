import styles from './components/Logo.module.css';
import logo from '../../images/logo.svg';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img
                src={logo}
                alt='logo'
                className={styles.logoimg}
            />
            <p>Alura Books</p>
        </div>
    )
}