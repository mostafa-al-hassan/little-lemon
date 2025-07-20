import styles from './css/Testimonials.module.css'
import TestimonialsCard from './TestimonialsCard'
import pic1 from "../Assets/placeHolder.jpg"





function Testimonials() {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.h1}>Testimonials</h1>
            <div className={styles.cardWrap}>
                <TestimonialsCard Image={pic1} Name={"someone"} Rating={"⭐⭐⭐⭐⭐"} Paragraph={"You have to try the Greek Salad!"}/>
                <TestimonialsCard Image={pic1} Name={"someone"} Rating={"⭐⭐⭐⭐⭐"} Paragraph={"You have to try the Greek Salad!"}/>
                <TestimonialsCard Image={pic1} Name={"someone"} Rating={"⭐⭐⭐⭐⭐"} Paragraph={"You have to try the Greek Salad!"}/>
                
            </div>
        </div>
    );
}

export default Testimonials;