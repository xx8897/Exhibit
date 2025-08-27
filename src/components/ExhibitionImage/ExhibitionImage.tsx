import React, { useState } from 'react';
import './ExhibitionImage.css';

interface ExhibitionImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ExhibitionImage: React.FC<ExhibitionImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // 備用圖片 - 使用本地預設圖片
  const getDefaultImage = () => {
    return `${process.env.PUBLIC_URL}/C.jpg`; // 預設使用藝術展覽圖片
  };

  return (
    <div className={`exhibition-image-container ${className}`}>
      {isLoading && (
        <div className="image-loading">
          <div className="loading-spinner"></div>
          <p>載入中...</p>
        </div>
      )}
      
      <img
        src={hasError ? getDefaultImage() : src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`exhibition-image ${isLoading ? 'loading' : 'loaded'}`}
      />
    </div>
  );
};

export default ExhibitionImage;