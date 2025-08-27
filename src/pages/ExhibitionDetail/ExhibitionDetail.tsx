import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allExhibitions } from '../../data/allExhibitions';
import Map from '../../components/Map/Map';
import AIClassification from '../../components/AIClassification/AIClassification';
import './ExhibitionDetail.css';

const ExhibitionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exhibition = allExhibitions.find(ex => ex.id === id);

  if (!exhibition) {
    return (
      <div className="exhibition-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>展覽不存在</h2>
            <p>抱歉，找不到您要查看的展覽資訊。</p>
            <Link to="/" className="back-btn">返回首頁</Link>
          </div>
        </div>
      </div>
    );
  }

  const openGoogleMaps = () => {
    if (exhibition.latitude && exhibition.longitude) {
      window.open(`https://www.google.com/maps?q=${exhibition.latitude},${exhibition.longitude}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/${exhibition.address}`, '_blank');
    }
  };

  return (
    <div className="exhibition-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">首頁</Link> / <span>{exhibition.name}</span>
        </div>

        <div className="exhibition-detail">
          <div className="detail-header">
            <div className="detail-image">
              <img 
                src={exhibition.image || `${process.env.PUBLIC_URL}/C.jpg`} 
                alt={exhibition.name}
              />
            </div>
            <div className="detail-info">
              <div className="title-section">
                <h1>{exhibition.name}</h1>
              </div>
              <div className="badge-section">
                <span className={`category-badge category-${exhibition.category}`}>{exhibition.category}</span>
                {exhibition.region && (
                  <span className={`region-badge region-${exhibition.region}`}>{exhibition.region}</span>
                )}
              </div>
              
              <div className="info-grid">
                <div className="info-item">
                  <h3>展覽期間</h3>
                  <p>📅 {exhibition.period}</p>
                </div>
                <div className="info-item">
                  <h3>展覽地點</h3>
                  <p>📍 {exhibition.venue}</p>
                </div>
                <div className="info-item">
                  <h3>票價</h3>
                  <p>💰 {exhibition.price}</p>
                </div>
                <div className="info-item">
                  <h3>地址</h3>
                  <p>🏢 {exhibition.address}</p>
                </div>
              </div>
              
              <div className="action-buttons">
                <button onClick={openGoogleMaps} className="map-btn">
                  🗺️ 查看地圖
                </button>
                {exhibition.website && (
                  <a 
                    href={exhibition.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-btn"
                  >
                    🌐 官方網站
                  </a>
                )}
                {exhibition.ticketUrl && (
                  <a 
                    href={exhibition.ticketUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ticket-btn"
                  >
                    🎫 購票連結
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="detail-content">
            <div className="introduction-section">
              <h2>展覽簡介</h2>
              <p>{exhibition.introduction}</p>
            </div>
            
            <AIClassification 
              introduction={exhibition.introduction} 
              currentCategory={exhibition.category}
              showSuggestions={false}
            />
            
            <Map exhibition={exhibition} />
          </div>
        </div>
        
        <div className="back-to-list">
          <Link to="/" className="back-btn">← 返回展覽列表</Link>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionDetail;