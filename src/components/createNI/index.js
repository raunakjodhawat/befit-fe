import styles from './createNI.module.css';
export default function CreateNutritionalInformation() {
    return (
        <div>
            <h1>Create your own entry for food item</h1>
            <div className={styles.CreateNIDiv}>
                <input type="text" placeholder="Name" />
                <div className={styles.CreateNiDivSmallInput}>
                    <input type="number" placeholder="Protein Content" min={0.00001}/>
                    <input type="number" placeholder="Fat Content" min={0.00001} />
                    <input type="number" placeholder="carbohydrate Content" min={0.00001} />
                    <input type="text" placeholder="Unit" />
                </div>
                <button>Insert</button>
            </div>
        </div>
    );
}