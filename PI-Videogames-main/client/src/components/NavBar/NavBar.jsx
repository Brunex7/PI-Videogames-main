import style from './NavBar.module.css';
import SearchBar from '../serchBar/searchBar';


const NavBar = () =>{
    return(
        <nav className={style.mainContainer}>
            <h1>HENRRY | PI VIDEO GAMES</h1>
            <SearchBar/>
            <div className={style.links}>
                <a href='/home'>HOME</a>
                <a href='/create'>FORM</a>
            </div>
        </nav>
    )
}

export default NavBar;