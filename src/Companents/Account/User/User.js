import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./User.css";

const NewUser = () => {
  const [userPage, setUserPage] = useState([]);

  const cartFromLocalStorage = () => {
    let json = JSON.parse(localStorage.getItem("spiderman"));
    setUserPage(json);
  };
  const loOut = () => {
    window.location.reload()
    localStorage.clear();
  };

  useEffect(() => {
    cartFromLocalStorage();
  }, []);
  
  return (
    <div className={"user"}>
      <h2>{userPage?.username}</h2>
      <h2>{userPage?.email}</h2>
      
        <button
          onClick={loOut}
        ><NavLink exact to="/">
          Log out
          </NavLink>
        </button>
      
    </div>
  );
};

export default NewUser;
