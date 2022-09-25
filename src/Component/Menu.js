import React, { useEffect } from "react";
// import { MenuList } from './MenuList';

function Menu({ title, menuObject }) {
  //prop.title

  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer ul")
      .querySelectorAll("li");
    // console.log(allLi);

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id} >
              {" "}
              <a href="#">
                {" "}
                <i> {menu.icon} </i> <span> {menu.name} </span>{" "}
              </a>{" "}
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
