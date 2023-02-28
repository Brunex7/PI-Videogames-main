import style from './NavBar.module.css';
import SearchBar from '../serchBar/SearchBar';


const NavBar = () =>{
    return(
        <nav className={style.mainContainer}>
            <h1>HENRRY | PI VIDEO GAMES</h1>
            <SearchBar/>
            <div className={style.links}>
                <a href='/home'>HOME</a>
                <a href='/create'>POST GAMES</a>
            </div>
        </nav>
    )
}

export default NavBar;