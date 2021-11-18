class localStorageService {
    constructor() {
        this.localStorageService;
    }
    set(key, value) {
        localStorage.setItem(key, value);
    }
}