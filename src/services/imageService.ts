// 圖片服務 - 使用穩定的圖片來源
export const getExhibitionImage = (exhibitionName: string): string => {
  // 使用穩定的 Unsplash 直接連結避免 API 限制
  const getImageByType = (name: string): string => {
    if (name.includes('藝術') || name.includes('美術') || name.includes('畫')) {
      return 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop';
    }
    if (name.includes('科技') || name.includes('數位')) {
      return 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop';
    }
    if (name.includes('文化') || name.includes('歷史')) {
      return 'https://images.unsplash.com/photo-1566408669585-3ab02d4b5296?w=800&h=600&fit=crop';
    }
    if (name.includes('設計')) {
      return 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
    }
    if (name.includes('自然')) {
      return 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop';
    }
    if (name.includes('攝影')) {
      return 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop';
    }
    return 'https://images.unsplash.com/photo-1594736797933-d0a9e6f4b3f8?w=800&h=600&fit=crop';
  };
  
  return getImageByType(exhibitionName);
};

// 為特定展覽提供圖片 - 使用本地四張圖片
export const getSpecificExhibitionImages = (): { [key: string]: string } => {
  const baseUrl = process.env.PUBLIC_URL || '';
  return {
    // 奧拉弗．埃利亞松：你的好奇旅程 - 現代藝術裝置 (D.jpg 現代展覽空間)
    '00001': `${baseUrl}/D.jpg`,
    
    // 懷德樂美—倪蔣懷紀念展 - 傳統水彩畫展 (C.jpg 彩色藝術風格)
    '00002': `${baseUrl}/C.jpg`,
    
    // 碁人弈事—古代圍棋文化 - 古代文化 (A.jpg 傳統建築風格)
    '00003': `${baseUrl}/A.jpg`,
    
    // 絕對．好字－院藏對聯選萃 - 書法文物 (A.jpg 傳統建築風格)
    '00004': `${baseUrl}/A.jpg`,
    
    // 從印象派到現代主義─美國大都會博物館名作展 - 經典畫展 (C.jpg 彩色藝術風格)
    '00005': `${baseUrl}/C.jpg`,
    
    // 神聖藝術的當代回聲 - 宗教藝術 (A.jpg 傳統建築風格)
    '00006': `${baseUrl}/A.jpg`,
    
    // 每個人心中都有一座夢幻島 - 色彩創作 (C.jpg 彩色藝術風格)
    '00007': `${baseUrl}/C.jpg`,
    
    // 祀與戎：古代兵器攻略 - 古代文物 (A.jpg 傳統建築風格)
    '00008': `${baseUrl}/A.jpg`,
    
    // 愛硯成痴特展 - 文房用品工藝 (A.jpg 傳統建築風格)
    '00009': `${baseUrl}/A.jpg`,
    
    // 華麗魔法屋─故宮的洛可可珍藏 - 宮廷藝術 (C.jpg 彩色藝術風格)
    '00010': `${baseUrl}/C.jpg`,
    
    // 眾神降臨——沉浸故宮3.0數位展 - 數位科技 (B.jpg 抽象科技感)
    '00013': `${baseUrl}/B.jpg`,
    
    // 噁の食物博物館 - 特色文化展 (D.jpg 現代展覽空間)
    '00023': `${baseUrl}/D.jpg`,
    
    // 會動的浮世繪展 - 數位藝術 (B.jpg 抽象科技感)
    '00025': `${baseUrl}/B.jpg`,
    
    // TOMICA小汽車55週年博覽會 - 文創展覽 (D.jpg 現代展覽空間)
    '00027': `${baseUrl}/D.jpg`,
    
    // 波隆那世界插畫大獎展 - 插畫藝術 (C.jpg 彩色藝術風格)
    '00031': `${baseUrl}/C.jpg`
  };
};