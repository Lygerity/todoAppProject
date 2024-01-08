import React, {createContext, useContext} from "react";
import ThemeStore from "./ThemeStore.tsx";

const ThemeStoreContext = createContext<ThemeStore | null>(null)

export const ThemeStoreProvider : React.FC<{children: React.ReactNode}> = ({children}) => {
    const store = new ThemeStore();
    return(
        <ThemeStoreContext.Provider value={store}>
            {children}
        </ThemeStoreContext.Provider>
    );
};

export const useThemeStore = () =>{
    const store = useContext(ThemeStoreContext);
    if(!store){
        throw new Error('useThemeStore must be used within a ThemeStoreProvider');
    }
    return store;
}