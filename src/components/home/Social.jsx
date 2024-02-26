import React from 'react';
import { socialLinkDetails } from '../../appContants';

const Social = () => {
  return (
    <div>
      <div className="home__social">
        {socialLinkDetails.map(eachItem => (<a key={eachItem.id} href={eachItem.hrefLink} className="home__social-icon" target="_blank" rel="noreferrer">
        <i className={`uil ${eachItem.iconName}`}></i>
        </a>))}
      </div>
    </div>
  )
}

export default Social
