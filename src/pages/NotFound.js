import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/notFound.scss';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div className="not-found">
      <Header />
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
