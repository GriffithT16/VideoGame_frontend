import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({searched, setSearched}) => {
  
  let navigate = useNavigate();
  function returnHome() {
    navigate("/");
  }

  return (

<div className="main-title font-link" >
  
        <button className = 'text-shadow title-button' onClick={() => {setSearched(false) ; returnHome()}}>The Gaming Codex</button>

</div>

  );
};

export default NavBar;
