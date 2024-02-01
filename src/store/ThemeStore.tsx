import {makeAutoObservable} from "mobx";

class ThemeStore {
    isDarkMode: boolean | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    toggleDarkMode() {
        if (this.isDarkMode) {
            this.isDarkMode = !this.isDarkMode;
        } else {
            this.isDarkMode = true;
        }
    }
}

export default ThemeStore;