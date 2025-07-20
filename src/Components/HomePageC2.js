import styles from './css/HomePageC2.module.css'
import greekSalad from '../Assets/greeksalad.jpg'
import lemonDessert from '../Assets/lemon dessert.jpg'
import bruchetta from '../Assets/bruchetta.svg'


import Card from './Card'



function HomePageC2() {
    return (
        <div className={styles.wrap}>
            <div className={styles.titlewrap}>
                <h1 className={styles.title}>This weeks specials!</h1>
                <button className={styles.btnStyle}>Online Menu</button>
            </div>


            <div className={styles.cardGrid}>
                <Card Image={greekSalad} Name={"Greek Saled"} Price={"$12.99"} Paragraph={"The famous greek salad of crispy lettce, peppers, olives, and our Chicago style feta chese, garnished with crunchy garlic and rosemary croutons."} />
                <Card Image={bruchetta} Name={"Bruchetta"} Price={"$5.99"} Paragraph={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "} />
                <Card Image={lemonDessert} Name={"Lemon Dessert"} Price={"$5.00"} Paragraph={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} />
            </div>
        </div>

    );
}

export default HomePageC2;