import React, { useState } from "react";

const SearchAndDelete = () => {
    const [searchInput, setSearchInput] = useState("");

    const HandleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <input
                type="search"
                placeholder="Search here"
                onChange={HandleChange}
                value={searchInput}
                style={{
                    color: "black",
                    borderRadius: "15px",
                    height: "50px",
                    width: "300px",
                    cursor: "pointer",
                    padding: "20px"
                }}
            />
        </div>
    );
};

export default SearchAndDelete;
