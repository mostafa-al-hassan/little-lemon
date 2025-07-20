import styles from "./css/About.module.css"
import restaurant1 from "../Assets/restaurant1.jpg"
import restaurant2 from "../Assets/restaurant2.jpg"
import React from "react";

const About = () => {
    return (
        <>
            <div className={styles.wrap} id="About">

                <div className={styles.col1}>
                    <h1 className={styles.h1}>Little Lemon</h1>
                    <h2 className={styles.h2}>Chicago</h2>
                    <div className={styles.div1}>
                        <p className={styles.p1}>
                            Welcome to Little Lemon, a charming family-owned Mediterranean restaurant where tradition meets flavor in every bite. Nestled in the heart of the city, Little Lemon offers a warm, inviting atmosphere inspired by the coastal towns of Southern Europe.
                        </p>
                        <p className={styles.p2}>
                            We take pride in using fresh, locally sourced ingredients to craft authentic dishes with a modern twist — from our crisp Greek salads to our perfectly grilled meats and house-made dips. Whether you're joining us for a cozy dinner, a festive celebration, or a quick takeout, our goal is to make every meal memorable.
                        </p>
                        <p className={styles.p2}>
                            At Little Lemon, food is more than nourishment — it’s a celebration of culture, community, and family. Come share the experience.
                        </p>

                    </div>


                </div>

                <div className={styles.pics}>
                    <img id="" src={restaurant1} alt="morning" className={styles.bottomPic} />
                    <img id="" src={restaurant2} alt="night" className={styles.topPic} />
                </div>
            </div>
        </>
    );
};

export default About;