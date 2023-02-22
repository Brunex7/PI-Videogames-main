import { useState } from 'react';


export default function SearchBar(props) {
   
   const [id, setId] = useState('');
   
   const handleChange = e =>{
      const{ value } = e.target;
      setId(value)
   }

   return (
      <div>
         <input type='search' name='search' id='' onChange={handleChange} />
         <button onClick={() => props.onSearch(id)}>BUSCAR</button> 
      </div>
   );
}
