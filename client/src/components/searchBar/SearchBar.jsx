import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideoGamebyName , getAllVideogames} from "../actions/actions.js";

function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const searchVideoGameByName = (e) => {
    setInput(e.target.value);
    if(e.target.value.length > 1){
    dispatch(getVideoGamebyName(e.target.value));
    }
    else {
      console.log("entre")
      dispatch(getAllVideogames());
    }

    
  }

  return (
    <div>
    <label>
      Search by name:
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => searchVideoGameByName(e)}
      />
    </label>
    </div>
  );
}

export default SearchBar;