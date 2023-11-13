/*
affichage conditionnel : isDeployed useState

dans sidebar texte + icones ?

css :
transition pour le bouton 
transition pour déploiement du menu


*/

import { useState } from 'react';
import Button from './Button';
// import { useState } from "react";


const SideBar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [classButton, setClassButton] = useState("button visible")
    const [classMenu, setClassMenu] = useState("menu hidden")
    


   
    const updateMenu = () => {
        if(!isClicked) {
            setClassButton("burger-bar clicked")
            setClassMenu("menu visible")
        }
        else {
            setClassButton("burger-bar unclicked")
            setClassMenu("menu hidden")
        }
        setIsClicked(!isClicked)
    }

    // if(!isClicked){
        return(
            <div>
                <nav>
                    <div className={classButton}>
                    <Button isClicked={isClicked} onClick={updateMenu} label={"button"}/>
                    </div>
                </nav>

                <div className={classMenu}>
                    <h1>menu</h1>
                </div>
            </div>
        );
    // }

}


export default SideBar;
