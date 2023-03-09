import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const history = useNavigate();

  const handleInputChange = (event) => {
    setInputText(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/drinks/name/${inputText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{color: "back"}} type="text" value={inputText} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;