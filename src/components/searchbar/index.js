import { useEffect, useState } from 'react';
import SearchSocket from '../../../pages/api/search';
import styles from './searchbar.module.css';
import SearchCard from '../searchCard';

const socket = new SearchSocket("ws://", "localhost:8080", "/api/v1");
export default function SearchBar() {
    useEffect(() => {
        return () => {
            socket.socket.close();
        }
    }, []);
    const [searchInputText, setSearchInputText] = useState('');
    const [searchResults, setSearchResults] = useState([{
        id: 0,
        name: "some-random-food-item",
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        unit: "some-unit"
    }, {
        id: 1,
        name: "some-random-food-item",
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        unit: "some-unit"
    }]);
    socket.onOpen = (e) => {
        console.log("socket is open");
    }
    socket.onMessage = (e) => {
        console.log("received something from seever", e);
    }
    function onInput(e) {
        socket.send(e.target.value);
        setSearchResults(socket.serverResponse);
        setSearchInputText(e.target.value);
    }
    return (
        <div className={styles.SearchDivContainer}>
            <div className={styles.SearchDiv}>
                <input className={styles.SearchInput} type='text' placeholder="Search for food item" onInput={onInput} value={searchInputText} />
            </div>
            <div className={styles.SearchResultDiv}>
                {searchResults.filter(x => Object.keys(x).length > 0).map((searchResult, index) => {
                    return (
                        <SearchCard
                            key={searchResult.id}
                            id={searchResult.id}
                            name={searchResult.name}
                            protein={searchResult.protein}
                            carbohydrate={searchResult.carbohydrate}
                            fat={searchResult.fat}
                            unit={searchResult.unit}
                        />
                    )
                })}
            </div>
        </div>
    )
}