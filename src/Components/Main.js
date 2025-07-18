import styles from './css/Main.module.css'
import food from '../Assets/restauranfood.jpg'
function Main() {
    return (
        <div className={styles.background}>
            <main className={styles.main}>
                <div className={styles.div1}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurnat, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className={styles.div2}>
                    <img src={food} alt='food' className={styles.img} />
                </div>
            </main>
        </div>
    );
}

export default Main;