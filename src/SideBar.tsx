/*
affichage conditionnel : isDeployed useState

dans sidebar texte + icones ?

css :
transition pour le bouton 
transition pour déploiement du menu


*/

import { useState } from 'react';
import Button from './Button';
import './SideBar.css'
import Calendar from 'react-calendar';
// import { useState } from "react";


const SideBar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [classButton, setClassButton] = useState("button visible")
    const [classMenu, setClassMenu] = useState("menu hidden")
    const [classSideBar, setSideBar] = useState("sidebar")
    const [classSCalendar, setcalendar] = useState("hidden")
    


   
    const updateMenu = () => {
        if(!isClicked) {
            setClassButton("burger-bar clicked button")
            setClassMenu("menu visible")
            setcalendar("visible")
            setSideBar("classSideBar visible classMenu")
        }
        else {
            setClassButton("burger-bar unclicked button")
            setClassMenu("menu hidden")
            setcalendar("hidden")
            setSideBar("classSideBar")
        }
        setIsClicked(!isClicked)
    }

    const handleDayClick = (date: any) => {
        console.log('Jour sélectionné:', date + typeof date );        
      };
    
        return(
            <div>
                <nav className={classSideBar}>
                    <div className={classButton}>
                    <Button isClicked={isClicked} onClick={updateMenu} label={"button"}/>
                    </div>

                    <div className={classSCalendar}>
                        <Calendar onClickDay={handleDayClick}/> {/* sur un click accéder à une page task day */}
                    </div>

                    <div className={classMenu}>
                        
                        <a className='itemMenu item1' href='/'>item1</a>
                        
                        <a className='itemMenu' href='/'>item2</a>
                        
                        <a className='itemMenu' href='/'>item3</a>

                        <a className='itemMenu' href='/'>item4</a>

                        <a className='itemMenu' href='/'>item5</a>

                        <a className='itemMenu' href='/'>item6</a>

                    </div>
                </nav>
            </div>
        );

}


export default SideBar;