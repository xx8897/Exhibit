// 圖片服務 - 使用免費API或預設圖片
export const getExhibitionImage = (exhibitionName: string): string => {
  // 使用 Unsplash API 取得相關圖片
  const unsplashAPI = `https://source.unsplash.com/800x600/?`;
  
  // 根據展覽類型和名稱生成關鍵字
  const getImageKeywords = (name: string): string => {
    if (name.includes('藝術') || name.includes('美術') || name.includes('畫')) {
      return 'art,painting,gallery';
    }
    if (name.includes('科技') || name.includes('數位')) {
      return 'technology,digital,innovation';
    }
    if (name.includes('文化') || name.includes('歷史')) {
      return 'culture,museum,history';
    }
    if (name.includes('設計')) {
      return 'design,creative,modern';
    }
    if (name.includes('自然')) {
      return 'nature,botanical,organic';
    }
    if (name.includes('攝影')) {
      return 'photography,camera,lens';
    }
    return 'exhibition,museum,gallery';
  };
  
  const keywords = getImageKeywords(exhibitionName);
  return `${unsplashAPI}${keywords}`;
};

// 為特定展覽提供圖片
export const getSpecificExhibitionImages = (): { [key: string]: string } => {
  return {
    // 奧拉弗．埃利亞松：你的好奇旅程
    '00001': 'https://source.unsplash.com/800x600/?art,installation,light',
    
    // 懷德樂美—倪蔣懷紀念展
    '00002': 'https://source.unsplash.com/800x600/?watercolor,painting,art',
    
    // 碁人弈事—古代圍棋文化
    '00003': 'https://source.unsplash.com/800x600/?go,board-game,traditional',
    
    // 絕對．好字－院藏對聯選萃
    '00004': 'https://source.unsplash.com/800x600/?calligraphy,chinese,brush',
    
    // 從印象派到現代主義─美國大都會博物館名作展
    '00005': 'https://source.unsplash.com/800x600/?impressionism,museum,painting',
    
    // 祀與戎：古代兵器攻略 - 等待圖片資源
    '00008': '',
    
    // 愛硯成痴特展 - 等待圖片資源
    '00009': '',
    
    // 噁の食物博物館 - 等待圖片資源
    '00023': '',
    
    // TOMICA小汽車55週年博覽會 - 等待圖片資源
    '00027': '',
    
    // Becoming Real｜設計的生成時刻｜2025年iF學生設計獎 - 等待圖片資源
    '00032': '',
    
    // 2024臺灣國際陶藝雙年展 - 等待圖片資源
    '00035': '',
    
    // 2025臺灣文博會 - 等待圖片資源
    '00053': '',
    
    // 航海王ONE PIECE歡樂派對嘉年華 - 等待圖片資源
    '00068': '',
    
    // 虎姑婆和他的朋友沉浸式遊戲場 - 等待圖片資源
    '00072': '',
    
    // 森之市珈琲コーヒーと花物語・第三回 - 等待圖片資源
    '00081': ''
  };
};