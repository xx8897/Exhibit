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

  // 備用圖片 - 根據展覽類型提供不同的預設圖片
  const getDefaultImage = () => {
    if (alt.includes('藝術') || alt.includes('美術')) {
      return 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop';
    }
    if (alt.includes('科技') || alt.includes('數位')) {
      return 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop';
    }
    if (alt.includes('文化') || alt.includes('歷史')) {
      return 'https://images.unsplash.com/photo-1566408669585-3ab02d4b5296?w=800&h=600&fit=crop';
    }
    if (alt.includes('自然')) {
      return 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop';
    }
    return 'https://images.unsplash.com/photo-1594736797933-d0a9e6f4b3f8?w=800&h=600&fit=crop';
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