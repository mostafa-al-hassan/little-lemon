import React from "react";
import styles from "./css/Footer.module.css"
import logo from "../Assets/Logo.svg"
function Footer() {
    return (
        <div className={styles.FooterBackground}>

            <div className={styles.Footer}>
            <img src={logo} alt="logo" className={styles.col0} />
            <div>
                <h1>Navigation</h1>
            <ul className={styles.col1}>
                <li><a href='/' className={styles.aNav}>Home</a></li>
                <li><a href='/' className={styles.aNav}>About</a></li>
                <li><a href='/' className={styles.aNav}>Menu</a></li>
                <li><a href='/' className={styles.aNav}>Reservations</a></li>
                <li><a href='/' className={styles.aNav}>Order Online</a></li>
                <li><a href='/' className={styles.aNav}>Login</a></li>
            </ul>
            </div>
            <div>
                <h1>Contact</h1>
            <ul className={styles.col2}>
                <li>Phone Number</li>
                <li>Email</li>
                <li>Address</li>
            </ul>
            </div>
            <div>
                <h1>Social Media</h1>
            <ul className={styles.col3}>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Pinterest</li>
            </ul>
            </div>
        </div>
        </div>
        
    );
}

export default Footer;