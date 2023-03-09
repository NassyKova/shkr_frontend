import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const Navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputText(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate.push(`/drinks/name/${inputText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;