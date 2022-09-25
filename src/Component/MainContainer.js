import React, { useEffect } from "react";
import "../Stlyles/MainContainer.css";
import { Banner } from "./Banner";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");
    // console.log(allLi);

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            
            <a href="#"></a>Popular
          </li>
          <li>
            
            <a href="#"></a>Albums
          </li>
          <li>
            
            <a href="#"></a>Songs
          </li>
          <li>
            
            <a href="#"></a>Fans
          </li>
          <li>
            
            <a href="#"></a>About
          </li>
        </ul>
        <p>
          
          <i>
            
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <AudioList/>
    </div>
  );
}

export { MainContainer };
