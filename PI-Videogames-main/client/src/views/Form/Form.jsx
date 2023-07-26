import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllGenres, postGames } from '../../redux/action';
import style from './Form.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.allGenres);

  const [form, setForm] = useState({
    name: '',
    image: '',
    description: '',
    platforms: [],
    relased: '',
    rating: '',
    genres: [],
  });

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  const validate = (form) => {
    const newErrors = {};

    if (form.name.length < 1) {
      newErrors.name = 'Videogame name is required';
    }

    const ratingValue = parseFloat(form.rating);
    if (isNaN(ratingValue) || ratingValue < 0.0 || ratingValue > 10.0) {
      newErrors.rating = 'Rating should be a number between 0 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDelete = (el) => {
    setForm({
      ...form,
      genres: form.genres.filter((genre) => genre !== el),
    });
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSelect = (e) => {
    setForm({
      ...form,
      genres: [...form.genres, e.target.value],
    });
  };

  const handleReleasedDateChange = (date) => {
    setReleasedDate(date);
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US');
      setForm({ ...form, relased: formattedDate });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isValid = validate(form);
    if (isValid) {
      dispatch(postGames(form));
      alert('New Videogame created');
      setForm({
        name: '',
        image: '',
        description: '',
        platforms: [],
        relased: '',
        rating: '',
        genres: [],
      });
      history.push('/home');
    } else {
      alert('Error! incorrect data, please check');
    }
  };

  const randomPlatforms = [
    "PC",
    "PS2",
    "PS3",
    "PS4",
    "PS5",
    "XBOX",
    "SWITCH",
    "XBOX ONE",
    "NINTENDO DS",
    "NINTENDO 64",
    "NINTENDO WII",
    "NINTENDO SWITCH",
    "NINTENDO GAMECUBE",
  ];

  return (
    <form onSubmit={submitHandler} className={style.container}>
      <div className={style.form}>
        <div className={style.lab}>
          <label>Name: </label>
          <input type="text" value={form.name} onChange={changeHandler} name='name' autoComplete='off' />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.lab}>
          <label>Image: </label>
          <input type="text" value={form.image} onChange={changeHandler} name='image' autoComplete='off' />
        </div>
        <div className={style.lab}>
          <label>Description: </label>
          <input type="text" value={form.description} onChange={changeHandler} name='description' autoComplete='off' />
        </div>
        <div>
          <label className={style.title}>Platform: </label>
          <div className={style.plat}>
            {randomPlatforms.map((P) => (
              <div key={P}>
                <input type="checkbox" name="platforms" value={P} id={P} />
                <label htmlFor={P}>{P}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={style.lab}>
          <label>Released: </label>
          <DatePicker selected={releasedDate} onChange={handleReleasedDateChange} name="releasedDate" />
        </div>
        <div className={style.lab}>
          <label>Rating: </label>
          <input type="text" value={form.rating} onChange={changeHandler} name='rating' autoComplete='off' />
          {errors.rating && <span>{errors.rating}</span>}
        </div>
        <div>
          <label className={style.title}>Genre: </label>
          <select className={style.gen} defaultValue='Label' onChange={(e) => handleSelect(e)}>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
          <ul className={style.ul}>
            <li>{form.genres.map((el, index) => el + (index < form.genres.length - 1 ? ' ,' : ''))}</li>
          </ul>
        </div>
        {form.genres.map((el) => (
          <div key={el}>
            <p>{el}</p>
            <button onClick={() => handleDelete(el)}>X</button>
          </div>
        ))}
        <button className={style.button} type='submit'>
          CREATE
        </button>
      </div>
    </form>
  );
};

export default Form;
