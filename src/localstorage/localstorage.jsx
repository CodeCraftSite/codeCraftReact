export function localStorageGet(key) {
    return localStorage.getItem(key);
}

export function localStorageSet(key, value) {
    localStorage.setItem(key, value);
}

export function localStorageRemove(key) {
    localStorage.removeItem(key);
}