import styles from './searchcard.module.css';
import { useState } from 'react';

const currentDate = new Date().toISOString().slice(0, 16);
export default function SearchCard({ id, name, protein, carbohydrate, fat, unit }) {
    const [quantity, setQuantity] = useState(0);
    const [date, setDate] = useState(currentDate);
    const [errors, setErrors] = useState('');
    function onQuantityChange(e) {
        setQuantity(e.target.value);
    }
    function onDateChange(e) {
        setDate(e.target.value);
    }
    function onAddClick() {
        if (quantity <= 0) {
            setErrors('Quantity must be greater than 0');
            return;
        }
        setErrors('');
        // Call the API to add the item to the user's list
    }
    return (
        <div className={styles.card}>
            <span>{name}</span>
            <span>Protein: {protein}{unit}</span>
            <span>Carbohydrate: {carbohydrate}{unit}</span>
            <span>Fat: {fat}{unit}</span>
            <div className={styles.UserSelectionDiv}>
                <input type="number" placeholder="Quantity" onChange={onQuantityChange}/>
                <input type="date" placeholder="Date" max={currentDate} onChange={onDateChange}/>
                <button className={styles.UserSelectionButton} onClick={onAddClick}>Add</button>
            </div>
            <span className={styles.ErrorMessage}>{errors}</span>
        </div>
    );
}