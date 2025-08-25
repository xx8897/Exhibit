import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Exhibit</h1>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">首頁</Link>
          <Link to="/category/藝術與文化" className="nav-link">藝術與文化</Link>
          <Link to="/category/科技與設計" className="nav-link">科技與設計</Link>
          <Link to="/category/自然" className="nav-link">自然</Link>
          <Link to="/category/其他" className="nav-link">其他</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;