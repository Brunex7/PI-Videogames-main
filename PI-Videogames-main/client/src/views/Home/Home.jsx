import CardContainer from '../../components/CardContainer/CardContainer'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getGames } from '../../redux/action'
import style from './Home.module.css'
import Paging from '../../components/Paging/Paging';
import Filters from '../../components/FilterBar/FIlters';

const Home = () =>{

    const games = useSelector((state)=> state.games);

    const [currentPage, setCurrentPage] = useState(1);
    const [gamePrePage] = useState(9);
    const indexLastGame = currentPage * gamePrePage;
    const indexFirstGame = indexLastGame - gamePrePage;
    const currentGame = games.slice(indexFirstGame, indexLastGame);

    const paging = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getGames())
        dispatch(getAllGenres())
    },[dispatch])
    
    return(
        <>
  <div className={style.container}>
    <div className={style.title}>
      <h1>GAME LIST</h1>
    </div>
    <div className={style.p}>
      <p>The best games are here.</p>
    </div>
    <div className={style.cards}>
      <CardContainer currentGame={currentGame} />
    </div>
  </div>
  <div>
    <Paging
      className={style.b}
      gamePrePage={gamePrePage}
      games={games.length}
      paging={paging}
    />
  </div>
</>

    )
}

export default Home;