import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../../style/Navbar.css";

function NavbarRight(props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      props.setSearchQuery(searchQuery);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(searchQuery);
  };

  const clearSearchHandler = (e) => {
    e.preventDefault();
    setSearchQuery("");
    props.setSearchQuery("");
  };

  return (
    <div className="navbar-right">
      <div className="search">
        <form role="search" className="search-bar" onSubmit={handleSearch}>
          <div className="box">
            <input
              type="text"
              className="input"
              placeholder="Search . . ."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button
              className={`clear-button ${!searchQuery && "invisible"}`}
              type="button"
              onClick={clearSearchHandler}
            >
              <RxCross2 />
            </button>
            <button className="search-button" type="submit">
              <BsSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavbarRight;
