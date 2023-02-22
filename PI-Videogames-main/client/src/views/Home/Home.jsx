import CardContainer from '../../components/CardContainer/CardContainer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGames } from '../../redux/action'

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getGames())
    },[dispatch])
    return(
        <>
        <h1>Estoy en el Home</h1>
        <CardContainer />
        </>
    )
}

export default Home;