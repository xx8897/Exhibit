import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExhibitionCard from '../../components/ExhibitionCard/ExhibitionCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import Pagination from '../../components/Pagination/Pagination';
import { allExhibitions } from '../../data/allExhibitions';
import { Exhibition } from '../../types/Exhibition';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // 每頁顯示9個展覽

  // 每個類別的第一個展覽用於輪播：藝術(ID:1)、科學教育(ID:81)、歷史文化(ID:128)、其他(ID:8)
  const carouselExhibitions = allExhibitions.filter(exhibition => 
    ['1', '81', '128', '8'].includes(exhibition.id)
  );
  

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
    return allExhibitions.filter(exhibition => {
      const categoryMatch = !selectedCategory || exhibition.category === selectedCategory;
      const regionMatch = !selectedRegion || exhibition.region === selectedRegion;
      
      return categoryMatch && regionMatch;
    });
  };

  const filteredExhibitions = getFilteredExhibitions();
  
  // 分頁計算
  const totalPages = Math.ceil(filteredExhibitions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExhibitions = filteredExhibitions.slice(startIndex, endIndex);

  // 重置頁碼當篩選條件改變時
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedRegion]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                  style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                >
                  {carouselExhibitions.map((exhibition, index) => (
                    <Link 
                      key={exhibition.id} 
                      to={`/exhibition/${exhibition.id}`}
                      className="carousel-slide"
                    >
                      <div className="carousel-image-container">
                        <img 
                          src={exhibition.image || `${process.env.PUBLIC_URL}/C.jpg`} 
                          alt={exhibition.name}
                          className="carousel-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const defaultImage = `${process.env.PUBLIC_URL}/C.jpg`;
                            if (target.src !== defaultImage) {
                              target.src = defaultImage;
                            } else {
                              // 如果連預設圖片都失敗，使用純色背景
                              target.style.display = 'none';
                              target.parentElement!.style.backgroundColor = '#f0f0f0';
                            }
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
            <FilterBar
              selectedCategory={selectedCategory}
              selectedRegion={selectedRegion}
              onCategoryChange={setSelectedCategory}
              onRegionChange={setSelectedRegion}
            />
            <div className="exhibitions-grid">
              {currentExhibitions.map(exhibition => (
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
            {filteredExhibitions.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                totalItems={filteredExhibitions.length}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;