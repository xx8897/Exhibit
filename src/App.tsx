import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ExhibitionDetail from './pages/ExhibitionDetail/ExhibitionDetail';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
