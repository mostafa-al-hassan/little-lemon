import { useState, useEffect } from 'react';
import logo from '../Assets/Logo.svg'
import styles from './css/Header.module.css'
// import general_styles from '../index.css'

function Nav() {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
  
    useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 887) {
        setIsMenuOpen(true);
      }else {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // sync on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <header className={styles.Header}>
            <nav className={styles.nav}>

                <a href="/"><img src={logo} alt="logo" className={styles.img} /></a>

                <button className={styles.burger}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>




                <ul className={isMenuOpen ? styles.menuOpen : styles.menuClosed}>
                    <li><a href='/'className={styles.aNav}>Home</a></li>
                    <li><a href='#About'className={styles.aNav}>About</a></li>
                    <li><a href='/'className={styles.aNav}>Menu</a></li>
                    <li><a href='/'className={styles.aNav}>Reservations</a></li>
                    <li><a href='/'className={styles.aNav}>Order Online</a></li>
                    <li><a href='/'className={styles.aNav}>Login</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Nav;