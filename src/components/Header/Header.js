import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
      fontWeight: "bold",
      color: "red",
    };
    return (
         <div>
        <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
        <NavLink activeStyle={activeStyle} to="/restaurent"> Restaurent</NavLink>
      </div>
    );
};

export default Header;