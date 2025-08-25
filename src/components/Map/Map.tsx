import React from 'react';
import { Exhibition } from '../../types/Exhibition';
import './Map.css';

interface MapProps {
  exhibition: Exhibition;
  className?: string;
}

const Map: React.FC<MapProps> = ({ exhibition, className = '' }) => {
  const openGoogleMaps = () => {
    if (exhibition.latitude && exhibition.longitude) {
      window.open(`https://www.google.com/maps?q=${exhibition.latitude},${exhibition.longitude}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/${exhibition.address}`, '_blank');
    }
  };


  return (
    <div className={`map-container ${className}`}>
      <div className="map-header">
        <h3>展覽位置</h3>
        <p className="address">📍 {exhibition.address}</p>
      </div>
      
      <div className="map-placeholder">
        <div className="map-icon">🗺️</div>
        <p>地圖顯示位置</p>
        <p className="venue-name">{exhibition.venue}</p>
        <button onClick={openGoogleMaps} className="open-maps-btn">
          在 Google 地圖中開啟
        </button>
      </div>
      
      <div className="location-info">
        <div className="info-row">
          <span className="label">場館：</span>
          <span className="value">{exhibition.venue}</span>
        </div>
        <div className="info-row">
          <span className="label">地址：</span>
          <span className="value">{exhibition.address}</span>
        </div>
        {exhibition.latitude && exhibition.longitude && (
          <div className="info-row">
            <span className="label">座標：</span>
            <span className="value">{exhibition.latitude}, {exhibition.longitude}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;