import React from 'react';
import styles from './target.module.css';

export default function Target({
    pTarget,
    cTarget,
    fTarget,
    setPTarget,
    setCTarget,
    setFTarget,
    setToStorage
}) {
    return (
        <div className={styles.TargetHeaderContainerDiv}>
            <h1 className={styles.TargetHeader}>Daily target</h1>
            <div className={styles.TargetInput}>
                <div>
                    <label>Protein:</label>
                    <input type="number" value={pTarget} onChange={(e) => setPTarget(e.target.value)} />
                </div>
                <div>
                    <label>Carbohydrate:</label>
                    <input type="number" value={cTarget} onChange={(e) => setCTarget(e.target.value)} />
                </div>
                <div>
                    <label>Fat:</label>
                    <input type="number" value={fTarget} onChange={(e) => setFTarget(e.target.value)} />
                </div>
                <button onClick={() => {
                    setToStorage('pTarget', pTarget);
                    setToStorage('cTarget', cTarget);
                    setToStorage('fTarget', fTarget);
                }}>Update</button>
            </div>
        </div>
    );
}