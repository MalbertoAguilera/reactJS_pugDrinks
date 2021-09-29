import React from 'react';
import './Error404.scss';
import error404 from '../../assets/img/error404.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
      return (  
            <div className="container-error404 container">
                  <div className="error404">
                        <img className="error404-image" src={error404} alt="error404"></img>
                        <h2 className="error404-title">ERROR 404</h2>
                        <p className="error404-text">PAGE NOT FOUND</p>
                        <div className="my-3"><Link className="btn buttons__goHome" to={"/"}>Volver a HOME</Link></div>
                  </div>
            </div>
      );
}

export default Error404;