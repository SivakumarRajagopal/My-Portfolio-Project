import React, { useState } from 'react';
import "./header.css";
import { navDetails } from '../../appContants';


const Header = () => {
      /* ========================= Change Background Header ========================= */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

  /* ========================= Toggle Menu ========================= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Sivakumar
            </a>

            <div className={Toggle ? "nav__menu show-menu" : 
        "nav__menu"}>
                <ul className="nav__list grid">

                    {navDetails.map((eachNavItem) => (
                        <li key={eachNavItem.id} className="nav__item">
                        <a href={eachNavItem.hrefLink} onClick={() => setActiveNav(eachNavItem.hrefLink)} className={activeNav === eachNavItem.hrefLink ?
                        "nav__link active-link" : "nav__link"}>
                            <i className={`uil ${eachNavItem.iconName} nav__icon`}></i> {eachNavItem.pageContent}
                        </a>
                    </li>
                    ))}
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
             <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>   
  )
}

export default Header
