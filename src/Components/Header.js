import logo from '../Assets/Logo.svg'
import styles from './css/Nav.module.css'

function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="/"><img src={logo} alt="logo" className={styles.img}/></a>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>Reservations</a></li>
                <li><a href='/'>Order Online</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;