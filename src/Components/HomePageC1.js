import styles from './css/HomePageC1.module.css'
import food from '../Assets/restauranfood.jpg'
import general_styles from '../index.css'
import { useNavigate } from 'react-router-dom';

function HomePageC1() {
    const navigate = useNavigate();
    const handleReserve = ()=> {
        navigate('/Booking');
    }
    return (
        <div className={general_styles.HomePageC1}>
            <div className={styles.background}>
                <main className={styles.homepagec1}>
                    <div className={styles.div1}>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurnat, focused on traditional recipes served with a modern twist.</p>
                        <button onClick={handleReserve}>Reserve a Table</button>
                    </div>
                    <div className={styles.div2}>
                        <img src={food} alt='food' className={styles.img} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePageC1;