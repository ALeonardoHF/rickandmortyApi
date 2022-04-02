import React, { useState } from "react";

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onChange = ({ target }) => {
    setSearch(target.value);
    if (target.value.length === 0) {
      onSearch(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <nav className="container">
      <div className="navbar-title">
        <h1>Rick & Morty</h1>
      </div>
      <div className="search">
        <input
          className="placeholder-search"
          placeholder="Search Character ..."
          onChange={onChange}
        />
        <button onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};
