import React from 'react';
import './FilterBar.css';

interface FilterBarProps {
  selectedCategory: string;
  selectedRegion: string;
  onCategoryChange: (category: string) => void;
  onRegionChange: (region: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange
}) => {
  const categories = ['藝術與文化', '科技與設計', '自然', '其他'];
  const regions = ['北部', '中部', '南部', '東部'];

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <h3>展覽類型</h3>
        <div className="filter-options">
          <button
            className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => onCategoryChange('')}
          >
            全部類型
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              data-category={category}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3>地區篩選</h3>
        <div className="filter-options">
          <button
            className={`filter-btn ${selectedRegion === '' ? 'active' : ''}`}
            onClick={() => onRegionChange('')}
          >
            全部地區
          </button>
          {regions.map(region => (
            <button
              key={region}
              className={`filter-btn ${selectedRegion === region ? 'active' : ''}`}
              data-region={region}
              onClick={() => onRegionChange(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;