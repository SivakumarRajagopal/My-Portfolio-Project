import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sivakumar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about"
                     className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio"
                     className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Testimonial</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="mailto:sivakumar07civil@gmail.com" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class='bx bxl-gmail' ></i>
                </a>

                <a href="https://www.linkedin.com/in/sivakumar140798/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class='bx bxl-linkedin' ></i>
                </a>

                <a href="https://github.com/SivakumarRajagopal" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class='bx bxl-github' ></i>
                </a>
            </div>

            <span className="footer__copy">
                All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
