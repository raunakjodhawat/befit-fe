import React, { useEffect, useState } from 'react';
import styles from './historicaldata.module.css';

const today = new Date();
const todayMinusThirtyDays = new Date(new Date().setDate(today.getDate() - 30));

export default function HistoricalData({ pTarget, cTarget, fTarget }) {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [historicalData, setHistoricalData] = useState({
        proteinContent: "100",
        carbohydrateContent: "0",
        fatContent: "0",
        data: [{
            id: 1,
            name: "Apple",
            protein: "0",
            carbohydrate: "0",
            fat: "0",
            quantity: "0",
            unit: "g"
        }]
    });
    function calculatePercentage(target, consumed) {
        if (target === 0) {
            return 100;
        }
        return (consumed / target) * 100;
    }
    useEffect(() => {
        updateHistory();
    }, []);
    function updateHistory() {
        // make API calls
        // setHistoricalData(response);
    }

    const goToNext = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setDate(prevDate.getDate() + 1);
            if (newDate.getTime() <= today.getTime() + 86000) {
                return newDate;
            } else {
                return prevDate;
            }
        });
    };

    const goToPrevious = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setDate(prevDate.getDate() - 1);
            if (newDate.getTime() >= todayMinusThirtyDays.getTime()) {
                return newDate;
            } else {
                return prevDate;
            }

        });
    };

    return (
        <div>
            <h1>History</h1>
            <div className="timeline-container">
                <div className="timeline">
                    <div className={styles.HistorySlider}>
                        <button className="arrow left" onClick={goToPrevious}>&#8592;</button>
                        <p>{currentDate.toISOString().substring(0, 10)}</p>
                        <button className="arrow right" onClick={goToNext}>&#8594;</button>
                    </div>
                    <div>
                        Protein: {calculatePercentage(pTarget, historicalData.proteinContent)}%
                        Carbohydrate: {calculatePercentage(cTarget, historicalData.carbohydrateContent)}%
                        Fat: {calculatePercentage(fTarget, historicalData.fatContent)}%
                    </div>
                    <div className={styles.HistoryData}>
                        {historicalData.data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h3>{item.name}</h3>
                                    <p>Protein: {item.protein}g</p>
                                    <p>Carbohydrate: {item.carbohydrate}g</p>
                                    <p>Fat: {item.fat}g</p>
                                    <p>Quantity: {item.quantity}{item.unit}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}