import styles from "./css/BookingPage.module.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function BookingPage(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const availableTimes = props.availableTimes;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the submit function passed from Main
        const success = props.submitForm({ date, time, guests, occasion });

        if (success) {
            navigate('/confirmedBooking');
        } else {
            alert("Something went wrong with your reservation.");
        }
    };

    return (

        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => { setDate(e.target.value); props.dispatch({ type: "dateChange", date: e.target.value }) }} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((t) => {
                    return (<option key={t}>{t}</option>)

                })
                }
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
                value={guests} onChange={(e) => { setGuests(e.target.value) }} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion}
                onChange={(e) => setOccasion(e.target.value)}>
                <option>Choose Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onClick={handleSubmit} />
        </form>

    );
}

export default BookingPage;