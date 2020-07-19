import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = props => {
  return (
    <>
      <header className="header-section">
        <h1>Study With Quizzes</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li className="navbar-nav"><Link to="/registration">Register</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default PageTemplate;