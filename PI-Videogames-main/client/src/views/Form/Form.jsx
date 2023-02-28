import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllGenres, postGames } from '../../redux/action';
import style from './Form.module.css'

function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Debes ingresar un nombre";
    } else if (!input.description) {
      errors.description = "Debes ingresar una descripción";
    }
    return errors;
}

const Form = () =>{

    const dispatch = useDispatch();
    const history = useHistory()
    const genres = useSelector((state) => state.allGenres);
    const [error, setError] = useState({})

    const [form, setForm] = useState({
        name: '',
        image:'',
        description:'',
        platforms:[],
        relased:'',
        rating:'',
        genres:[],
    });

    const handleDelete = (el) =>{
        setForm({
          ...form,
          genres: form.genres.filter((genre) => genre !== el),
        });
    }

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]:value})
    };

    const handleSelect = (e) =>{
        setForm({
          ...form,
          genres: [...form.genres, e.target.value],
        });
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        dispatch(postGames(form));
        alert("VideoJuego Creado");
        setForm({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
        });
        history.push("/home"); 
    };

    useEffect(() => {
        dispatch(getAllGenres());
    },[dispatch]);

    const randomPlatforms = [
        "PC",
        "PS2",
        "PS3",
        "PS4",
        "XBOX",
        "SWITCH",
        "XBOX ONE",
        "NINTENDO DS",
        "NINTENDO 64",
        "NINTENDO WII",
        "NINTENDO SWITCH",
        "NINTENDO GAMECUBE",
    ];

    return(
        <form onSubmit={submitHandler} className={style.container}>
            <div className={style.form}>
            <div className={style.lab}>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name='name' />
                {error.name && <p>{error.name}</p>}
            </div>
            <div className={style.lab}>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name='image' />
            </div>
            <div className={style.lab}>
                <label>Description: </label>
                <input type="text" value={form.description} onChange={changeHandler} name='description' />
                {error.description && <p>{error.description}</p>}
            </div>
            <div>
                <label className={style.title}>Platform: </label>
                <div className={style.plat}> {randomPlatforms.map((P) => (
                    <div key={P}>
                        <input type="checkbox" name="platforms" value={P}></input>
                        <label name={P}>{P}</label>
                    </div>
                ))}
                </div>
            </div>
            <div className={style.lab}>
                <label>Relased: </label>
                <input type="text" value={form.relased} onChange={changeHandler} name='relased' />
            </div>
            <div className={style.lab}>
                <label>Rating: </label>
                <input type="text" value={form.rating} onChange={changeHandler} name='rating' />
            </div>
            <div>
                <label className={style.title}>Genre: </label>
                <select className={style.gen} defaultValue='Label' onChange={(e) => handleSelect(e)}>
                    {genres.map((genres) => (
                        <option key={genres.id} value={genres.name}>{genres.name}</option>
                    ))}
                </select>
                <ul className={style.ul}>
                    <li>{form.genres.map((el) => el + " ,")}</li>
                </ul>
            </div>
            {form.genres.map((el) => (
                <div>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>X</button>
                </div>
            ))}
            <button className={style.button} type='submit'>CREATE</button>
            </div>
        </form>
    )
}

export default Form;