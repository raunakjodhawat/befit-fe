import LoginRedirector from '@/src/components/loginRedirector';
import styles from './home.module.css';
import Header from '@/src/components/header';
import SearchBar from '@/src/components/searchbar';
import CreateNutritionalInformation from '@/src/components/createNI';
import HistoricalData from '@/src/components/historicalData';
import Target from '@/src/components/target';
import { useEffect, useState } from 'react';
import { getFromStorage, setToStorage } from '@/src/components/clientAPI/storage';
import constants from '@/src/components/clientAPI/contants';

export default function HomePage() {

    const [pTarget, setPTarget] = useState(0);
    const [cTarget, setCTarget] = useState(0);
    const [fTarget, setFTarget] = useState(0);

    useEffect(() => {
        setPTarget(getFromStorage(constants.PROTEIN_CONTENT, 0));
        setCTarget(getFromStorage(constants.CARBOHYDRATE_CONTENT, 0));
        setFTarget(getFromStorage(constants.FAT_CONTENT, 0));
    }, []);
    return (
        <div>
            <LoginRedirector />
            <Header />
            <Target
                pTarget={pTarget}
                cTarget={cTarget}
                fTarget={fTarget}
                setPTarget={setPTarget}
                setCTarget={setCTarget}
                setFTarget={setFTarget}
                setToStorage={setToStorage}
            />
            <div className={styles.PageContentDiv}>
                <SearchBar />
                <div className={styles.PageContentRightDiv}>
                    <CreateNutritionalInformation />
                    <HistoricalData
                        pTarget={pTarget}
                        cTarget={cTarget}
                        fTarget={fTarget}
                    />
                </div>
            </div>
        </div>
    );
}