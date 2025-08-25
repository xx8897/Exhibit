import React from 'react';
import { Exhibition } from '../../types/Exhibition';
import ExhibitionImage from '../ExhibitionImage/ExhibitionImage';
import './ExhibitionCard.css';

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({ exhibition }) => {
  const handleCardClick = () => {
    window.location.href = `/exhibition/${exhibition.id}`;
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `/exhibition/${exhibition.id}`;
  };

  return (
    <div className="exhibition-card" onClick={handleCardClick}>
      <div className="card-image">
        <ExhibitionImage 
          src={exhibition.image || 'https://via.placeholder.com/300x200'} 
          alt={exhibition.name}
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{exhibition.name}</h3>
          <span className={`card-category category-${exhibition.category}`}>{exhibition.category}</span>
        </div>
        <div className="card-details">
          <p className="card-period">📅 {exhibition.period}</p>
          <p className="card-venue">📍 {exhibition.venue}</p>
          <p className="card-price">💰 {exhibition.price}</p>
        </div>
        <div className="card-introduction-container">
          <p className="card-introduction">{exhibition.introduction}</p>
        </div>
        <div className="card-footer">
          <button 
            className="view-details-btn"
            onClick={handleButtonClick}
          >
            查看詳情
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;