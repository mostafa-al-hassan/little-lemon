import styles from './css/Card.module.css'





function Card(props) {
    return (
            <div className={styles.card}>
                <div>
                    <img src={props.Image} alt='food' className={styles.img} />
                    
                    <div className={styles.content}>
                    <h2 className={styles.h2}>{props.Name} <span className={styles.price}>                  {props.Price}</span></h2>
                    <p className={styles.p}>{props.Paragraph}</p>
                    <p className={styles.order}>Order a delivery</p>
                    </div>
                    
                </div>
            </div>

    );
}

export default Card;