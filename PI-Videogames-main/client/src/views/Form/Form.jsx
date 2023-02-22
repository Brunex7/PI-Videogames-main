import axios from 'axios'
import { useState } from 'react';


const Form = () =>{
    const [form, setForm] = useState({
        name: '',
        image:'',
        description:'',
        platform:'',
        relased:'',
        rating:'',
        genre:'',
    });

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]:value})
    };

    const submitHandler = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3001/genres', form)
        .then(res => alert(res))
    };

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name='name' />
            </div>
            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name='image' />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" value={form.description} onChange={changeHandler} name='description' />
            </div>
            <div>
                <label>Platform: </label>
                <input type="text" value={form.platform} onChange={changeHandler} name='platform' />
            </div>
            <div>
                <label>Relased: </label>
                <input type="text" value={form.relased} onChange={changeHandler} name='relased' />
            </div>
            <div>
                <label>Rating: </label>
                <input type="text" value={form.rating} onChange={changeHandler} name='rating' />
            </div>
            <div>
                <label>Genre: </label>
                <input type="text" value={form.genre} onChange={changeHandler} name='genre' />
            </div>
            <button type='submit'>CREATE</button>
        </form>
    )
}

export default Form;