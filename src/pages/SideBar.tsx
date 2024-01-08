/*
affichage conditionnel : isDeployed useState

dans sidebar texte + icones ?

css :
transition pour le bouton 
transition pour déploiement du menu


*/

import { useState } from 'react';
import Button from '../components/buttons/Button';
// import './SideBar.css';
import "../assets/stylesheets/components/SideBar.css";
import { observer } from 'mobx-react-lite';
import dateStore from '../store/DateStore';
import Calendar from 'react-calendar';
import {Link, useNavigate} from 'react-router-dom';
// import useDateStore from '../store/DateStore';
import { useDateStore } from '../store/useDateStore';
const SideBar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [classButton, setClassButton] = useState("button visible")
    const [classMenu, setClassMenu] = useState("menu hidden")
    const [classSideBar, setSideBar] = useState("sidebar")
    const [classCalendar, setcalendar] = useState("hidden")
    // const { setSelectedDate } = useDateStore();
    const navigate = useNavigate();

    const dateStore = useDateStore();
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
        console.log('Jour sélectionné dans sidebar : ', date + typeof date );  

        // navigate(`/taskpage/${date}`); // modif avec mobx pour pas avoir la date dans l'url
        // dateStore.setSelectedDate(date);  // Utiliser la fonction correctement
        dateStore.setSelectedDate(date);
        navigate('/taskpage');
    };
    
        return(
            <div>
                <nav className={classSideBar}>
                    <div className={classButton}>
                    <Button isClicked={isClicked} onClick={updateMenu} label={"button"}/>
                    </div>

                    <div className={classCalendar}>
                        <Calendar onClickDay={handleDayClick}/> {/* sur un click accéder à une page task day */}
                    </div>

                    <div className={classMenu}>
                        
                        <a className='itemMenu item1' href='/'>Main Page</a>
                        
                        {/* A ajuster en fonction des vues dev */}

                        <Link className='itemMenu' to='/'>vue semaine</Link>
                        
                        <Link className='itemMenu' to='/'>vue mois</Link>

                        <Link className='itemMenu' to='/'>??</Link>

                        <Link className='itemMenu' to='/'>??</Link>

                        <Link className='itemMenu' to='/'>??</Link>

                    </div>
                </nav>
            </div>
        );

}


export default observer(SideBar);
