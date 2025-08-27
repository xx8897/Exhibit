import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Exhibition } from '../../types/Exhibition';
import ExhibitionImage from '../ExhibitionImage/ExhibitionImage';
import './ExhibitionCard.css';

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({ exhibition }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/exhibition/${exhibition.id}`);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/exhibition/${exhibition.id}`);
  };

  return (
    <div className="exhibition-card" onClick={handleCardClick}>
      <div className="card-image">
        <img 
          src={exhibition.image || `${process.env.PUBLIC_URL}/C.jpg`} 
          alt={exhibition.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{exhibition.name}</h3>
          <div className="card-badges">
            <span className={`card-category category-${exhibition.category}`}>{exhibition.category}</span>
            {exhibition.region && (
              <span className={`card-region region-${exhibition.region}`}>{exhibition.region}</span>
            )}
          </div>
        </div>
        <div className="card-details">
          <p className="card-period">📅 {exhibition.period}</p>
          <p className="card-venue">📍 {exhibition.venue}</p>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;