import {useEffect, useRef, useState} from 'react';
import Button from '../components/buttons/Button';
import "../assets/stylesheets/components/SideBar.css";
import {observer} from 'mobx-react-lite';
import Calendar from 'react-calendar';
import {Link, useNavigate} from 'react-router-dom';
import {useDateStore} from '../store/useDateStore';
import {useThemeStore} from "../store/useThemeStore.tsx";
import DarkModeButton from "../components/buttons/DarkModeButton.tsx";

const SideBar = () => {
    const boxRef = useRef<HTMLElement>(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isDarkClicked, setIsDarkClicked] = useState(false);
    const [classButton, setClassButton] = useState("burger-bar clicked button");
    const [classMenu, setClassMenu] = useState("menu hidden");
    const [classSideBar, setSideBar] = useState("sidebar");
    const [classCalendar, setCalendar] = useState("hidden");
    const [classDarkButton, setDarkButton] = useState("hidden");
    const [buttonFrame, setButtonFrame] = useState<number>();

    const navigate = useNavigate();
    const dateStore = useDateStore();
    const themeStore = useThemeStore();

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                hideMenu();
                setButtonFrame(1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const hideMenu = () => {
        setClassButton("burger-bar unclicked button");
        setClassMenu("menu hidden");
        setCalendar("hidden");
        setDarkButton("hidden");
        setSideBar("classSideBar");
        setIsClicked(false);
    };

    const updateMenu = () => {
        if (!isClicked) {
            setClassButton("burger-bar clicked button");
            setClassMenu("menu visible");
            setCalendar("visible");
            setDarkButton("darkModeVisible");
            setSideBar("classSideBar visible classMenu");
        } else {
            hideMenu();
        }
        setIsClicked(!isClicked);
    };

    const updateView = () => {
        console.log(themeStore.isDarkMode)
        themeStore.toggleDarkMode();
        console.log(themeStore.isDarkMode)
        setIsDarkClicked(!isDarkClicked);
    }

    const handleDayClick = (date: any) => {
        hideMenu();
        dateStore.setSelectedDate(date);
        navigate('/taskpage');
    };

    return (
        <div>
            <nav className={classSideBar} ref={boxRef}>
                <div className={classButton}>
                    <Button isClicked={isClicked} onClick={updateMenu} label={"button"} opened={isClicked}/>
                </div>

                <div className={classDarkButton}>
                    <DarkModeButton label={"darkMode"} onClick={updateView} isClicked={isDarkClicked} opened={isDarkClicked}/>
                </div>

                <div className={`${classCalendar} `}>
                    <Calendar onClickDay={handleDayClick}/>
                </div>

                <div className={classMenu}>
                    <a className='itemMenu item1' href='/Main'>Main Page</a>
                    <Link onClick={hideMenu} className='itemMenu' to='/TodayList'>Today List</Link>
                    <Link onClick={hideMenu} className='itemMenu' to='/WeekList'>Week List</Link>
                    {/* <Link onClick={hideMenu} className='itemMenu' to='/'>vue mois</Link> */}
                    <Link onClick={hideMenu} className='itemMenu' to='/Main'>??</Link>
                    <Link onClick={hideMenu} className='itemMenu' to='/Main'>View collaborateurs ? </Link>
                    <Link onClick={hideMenu} className='itemMenu' to='/'>Se déconnecter</Link>
                </div>
            </nav>
        </div>
    );
}

export default observer(SideBar);
