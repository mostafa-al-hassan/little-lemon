import styles from './css/TestimonialsCard.module.css'





function TestimonialsCard(props) {
    return (
            <div className={styles.card}>
                <div>
                    <img src={props.Image} alt='person' className={styles.img} />

                    <h1 className={styles.h1}>{props.Name}</h1>
                    <p className={styles.p}>{props.Paragraph}</p>
                    <p className={styles.Rating}>{props.Rating}</p>
                    
                    
                </div>
            </div>

    );
}

export default TestimonialsCard;