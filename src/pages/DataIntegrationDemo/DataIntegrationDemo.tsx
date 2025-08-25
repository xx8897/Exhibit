import React, { useState } from 'react';
import { realExhibitions } from '../../data/realExhibitions';
import { classifyExhibitionByAI, suggestCategories } from '../../services/aiClassification';
import './DataIntegrationDemo.css';

const DataIntegrationDemo: React.FC = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(realExhibitions[0]);

  const handleExhibitionChange = (exhibitionId: string) => {
    const exhibition = realExhibitions.find(ex => ex.id === exhibitionId);
    if (exhibition) {
      setSelectedExhibition(exhibition);
    }
  };

  const aiCategory = classifyExhibitionByAI(selectedExhibition.introduction);
  const suggestions = suggestCategories(selectedExhibition.introduction);

  return (
    <div className="data-demo-page">
      <div className="demo-header">
        <h1>TPE Expo 資料整合展示</h1>
        <p>展示真實展覽資料與AI分類功能的整合結果</p>
      </div>

      <div className="demo-content">
        <div className="exhibition-selector">
          <h2>選擇展覽</h2>
          <select 
            value={selectedExhibition.id} 
            onChange={(e) => handleExhibitionChange(e.target.value)}
            className="exhibition-select"
          >
            {realExhibitions.map(exhibition => (
              <option key={exhibition.id} value={exhibition.id}>
                {exhibition.name}
              </option>
            ))}
          </select>
        </div>

        <div className="demo-sections">
          <div className="section exhibition-info">
            <h3>展覽資訊</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>展覽名稱：</strong>
                <span>{selectedExhibition.name}</span>
              </div>
              <div className="info-item">
                <strong>展覽期間：</strong>
                <span>{selectedExhibition.period}</span>
              </div>
              <div className="info-item">
                <strong>展覽地點：</strong>
                <span>{selectedExhibition.venue}</span>
              </div>
              <div className="info-item">
                <strong>票價：</strong>
                <span>{selectedExhibition.price}</span>
              </div>
              <div className="info-item">
                <strong>地址：</strong>
                <span>{selectedExhibition.address}</span>
              </div>
              <div className="info-item full-width">
                <strong>展覽簡介：</strong>
                <span>{selectedExhibition.introduction}</span>
              </div>
            </div>
          </div>

          <div className="section ai-classification">
            <h3>AI分類分析</h3>
            <div className="classification-result">
              <div className="current-category">
                <strong>原始分類：</strong>
                <span className="category-badge original">{selectedExhibition.category}</span>
              </div>
              <div className="ai-category">
                <strong>AI建議分類：</strong>
                <span className={`category-badge ai ${selectedExhibition.category === aiCategory ? 'match' : 'different'}`}>
                  {aiCategory}
                </span>
                {selectedExhibition.category === aiCategory && <span className="match-indicator">✓ 匹配</span>}
              </div>
            </div>
            
            {suggestions.length > 0 && (
              <div className="suggestions">
                <h4>其他分類建議：</h4>
                <div className="suggestion-list">
                  {suggestions.map(suggestion => (
                    <div key={suggestion.category} className="suggestion-item">
                      <span className="suggestion-category">{suggestion.category}</span>
                      <span className="suggestion-confidence">{Math.round(suggestion.confidence * 100)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="section statistics">
            <h3>資料統計</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{realExhibitions.length}</span>
                <span className="stat-label">總展覽數量</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {realExhibitions.filter(ex => ex.address.includes('台北')).length}
                </span>
                <span className="stat-label">台北市展覽</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {realExhibitions.filter(ex => ex.category === '藝術').length}
                </span>
                <span className="stat-label">藝術類展覽</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {realExhibitions.filter(ex => ex.price === '免費' || ex.price.includes('免費')).length}
                </span>
                <span className="stat-label">免費展覽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataIntegrationDemo;