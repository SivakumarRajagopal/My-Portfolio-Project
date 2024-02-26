import React from 'react';
import './footer.css';
import { footerLinks, footerSocialLink } from '../../appContants';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sivakumar</h1>

            <ul className="footer__list">
                {footerLinks.map((eachItem) => (<li key={eachItem.id}>
                    <a href={eachItem.hrefLink}
                     className="footer__link">{eachItem.linkContent}</a>
                </li>))}
            </ul>

            <div className="footer__social">
                {footerSocialLink.map(eachItem => (<a key={eachItem.id} href={eachItem.hrefLink} className="footer__social-link" target="_blank" rel="noreferrer">
                <i className={`bx ${eachItem.iconName}`} ></i>
                </a>))}
            </div>

            <span className="footer__copy">
                All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
