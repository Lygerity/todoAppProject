import {makeAutoObservable} from "mobx";

class ThemeStore {
    isDarkMode : boolean = false;
    
    constructor() {
        makeAutoObservable(this);
    }
    
    toggleDarkMode(){
        this.isDarkMode = !this.isDarkMode;
    }
}
export default ThemeStore;