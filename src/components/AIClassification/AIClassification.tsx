import React, { useState, useEffect } from 'react';
import { classifyExhibitionByAI, suggestCategories } from '../../services/aiClassification';
import './AIClassification.css';

interface AIClassificationProps {
  introduction: string;
  currentCategory?: string;
  onCategoryChange?: (category: string) => void;
  showSuggestions?: boolean;
}

const AIClassification: React.FC<AIClassificationProps> = ({
  introduction,
  currentCategory,
  onCategoryChange,
  showSuggestions = true
}) => {
  const [aiCategory, setAiCategory] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Array<{category: string, confidence: number}>>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (introduction && introduction.length > 10) {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        const classified = classifyExhibitionByAI(introduction);
        const categoryOptions = suggestCategories(introduction);
        
        setAiCategory(classified);
        setSuggestions(categoryOptions);
        setIsAnalyzing(false);
      }, 500);
    }
  }, [introduction]);

  const handleSuggestionClick = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  if (!introduction || introduction.length <= 10) {
    return null;
  }

  return (
    <div className="ai-classification">
      <div className="ai-header">
        <h3>🤖 AI 分類建議</h3>
        {isAnalyzing && <div className="analyzing">分析中...</div>}
      </div>
      
      {!isAnalyzing && (
        <>
          <div className="ai-result">
            <div className="main-category">
              <span className="label">建議分類：</span>
              <span className="category-badge primary">{aiCategory}</span>
            </div>
          </div>
          
          {showSuggestions && suggestions.length > 0 && (
            <div className="ai-suggestions">
              <h4>其他可能分類：</h4>
              <div className="suggestions-list">
                {suggestions.map(({ category, confidence }) => (
                  <button
                    key={category}
                    className={`suggestion-btn ${currentCategory === category ? 'active' : ''}`}
                    onClick={() => handleSuggestionClick(category)}
                  >
                    <span className="category-name">{category}</span>
                    <span className="confidence">{Math.round(confidence * 100)}%</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="ai-disclaimer">
            <small>
              ⚠️ AI分類僅供參考，實際分類可能因展覽特色而有所不同
            </small>
          </div>
        </>
      )}
    </div>
  );
};

export default AIClassification;