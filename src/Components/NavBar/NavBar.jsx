import React from "react";


const NavBar = ({searched, setSearched}) => {
  
  return (

<div className="main-title font-link" >
    <button className = 'text-shadow title-button' onClick={() => setSearched(false)}>The Gaming Codex</button>
</div>

  );
};

export default NavBar;
