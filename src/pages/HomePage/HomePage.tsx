import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { newExhibitions } from '../../data/newExhibitions';
import { Exhibition } from '../../types/Exhibition';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 前五個展覽用於輪播
  const carouselExhibitions = newExhibitions.slice(0, 5);
  

  // 自動播放功能 - 每15秒切換
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % carouselExhibitions.length;
        return nextSlide;
      });
    }, 15000); // 15秒間隔

    return () => clearInterval(interval);
  }, [carouselExhibitions.length, isAutoPlaying]);

  // 輪播導航函數
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselExhibitions.length) % carouselExhibitions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselExhibitions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getFilteredExhibitions = (): Exhibition[] => {
    return newExhibitions.filter(exhibition => {
      const categoryMatch = !selectedCategory || exhibition.category === selectedCategory;
      
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

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Exhibit帶你探索全台精彩展覽</h1>
          <p>發現藝術、文化、科技等各類展覽資訊</p>
        </div>
      </div>
      
      <div className="main-content">
        <div className="container">
          <section className="hot-exhibitions">
            <div className="banner-container">
              {/* 左右導航按鈕 */}
              <button className="carousel-nav carousel-nav-left" onClick={goToPrevious}>
                <span>‹</span>
              </button>
              <button className="carousel-nav carousel-nav-right" onClick={goToNext}>
                <span>›</span>
              </button>

              {/* 輪播主容器 */}
              <div className="carousel-container">
                <div 
                  className="carousel-wrapper"
                  style={{ transform: `translateX(-${currentSlide * 20}%)` }}
                >
                  {carouselExhibitions.map((exhibition, index) => (
                    <Link 
                      key={exhibition.id} 
                      to={`/exhibition/${exhibition.id}`}
                      className="carousel-slide"
                    >
                      <div className="carousel-image-container">
                        <img 
                          src={exhibition.image || 'https://source.unsplash.com/800x600/?exhibition,museum,art'} 
                          alt={exhibition.name}
                          className="carousel-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://source.unsplash.com/800x600/?exhibition,museum,art';
                          }}
                        />
                        <div className="carousel-overlay">
                          <div className="carousel-content">
                            <h3>{exhibition.name}</h3>
                            <p>{exhibition.venue}</p>
                            <span className="carousel-date">
                              {new Date(exhibition.startDate).toLocaleDateString('zh-TW')} - {new Date(exhibition.endDate).toLocaleDateString('zh-TW')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 指示點導航 */}
              <div className="carousel-indicators">
                {carouselExhibitions.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="exhibitions-section">
            <h2>展覽列表區</h2>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;