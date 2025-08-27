import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { realExhibitions } from '../../data/realExhibitions';
import { Exhibition } from '../../types/Exhibition';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // 當URL參數改變時，自動設定選中的分類
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const getFilteredExhibitions = (): Exhibition[] => {
    const currentCategory = category || selectedCategory;
    return realExhibitions.filter(exhibition => {
      const categoryMatch = exhibition.category === currentCategory;
      
      const regionMap: { [key: string]: string[] } = {
        '北部': ['台北', '新北', '桃園', '新竹', '基隆', '宜蘭'],
        '中部': ['台中', '彰化', '南投', '雲林', '苗栗'],
        '南部': ['高雄', '台南', '屏東', '嘉義'],
        '東部': ['花蓮', '台東']
      };
      
      const regionMatch = !selectedRegion || 
        regionMap[selectedRegion]?.some(city => exhibition.address.includes(city));
      
      return categoryMatch && regionMatch;
    });
  };

  const filteredExhibitions = getFilteredExhibitions();

  const getCategoryDisplayName = (cat: string) => {
    switch(cat) {
      case '藝術與文化': return '藝術與文化展覽';
      case '科技與設計': return '科技與設計展覽';
      case '自然': return '自然主題展覽';
      case '其他': return '其他類型展覽';
      default: return '所有展覽';
    }
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="category-content">
          <h1>{getCategoryDisplayName(category || '')}</h1>
          <p>探索{category || '各類型'}的精彩展覽內容</p>
        </div>
      </div>
      
      <div className="main-content">
        <div className="container">
          <FilterBar
            selectedCategory={selectedCategory}
            selectedRegion={selectedRegion}
            onCategoryChange={setSelectedCategory}
            onRegionChange={setSelectedRegion}
          />
          
          <div className="exhibitions-grid">
            {filteredExhibitions.map(exhibition => (
              <ExhibitionCard 
                key={exhibition.id} 
                exhibition={exhibition} 
              />
            ))}
          </div>
          
          {filteredExhibitions.length === 0 && (
            <div className="no-results">
              <p>沒有符合條件的展覽</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;