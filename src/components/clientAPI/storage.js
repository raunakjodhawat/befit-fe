function getFromStorage(key, defaultValue) {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? storedValue : defaultValue;
}

function setToStorage(key, value) {
    window.localStorage.setItem(key, value);
}

export { getFromStorage, setToStorage };