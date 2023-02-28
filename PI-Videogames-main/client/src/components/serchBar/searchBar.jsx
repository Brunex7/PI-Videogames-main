import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesName } from "../../redux/action";
import style from './SearchBar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) { alert("You must enter a name") }
        else {
            dispatch(getGamesName(name));
            setName("");
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div>
            <input className={style.inp}
            type="text" 
            id="search" 
            value={name}
            placeholder="Search Games..."
            autoComplete='off'
            onChange={(e) => handleInputChange(e)}/>
            <button className={style.button} type='submit' >Search</button>
        </div>
    </form>
    )
};