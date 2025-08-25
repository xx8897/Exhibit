import { ExhibitionCategory } from '../types/Exhibition';

const AI_CLASSIFICATION_KEYWORDS: Record<string, string[]> = {
  [ExhibitionCategory.ART]: [
    '藝術', '美術', '畫展', '藝術家', '雕塑', '繪畫', '當代藝術', '現代藝術', '抽象', '油畫', '水彩',
    '個展', '聯展', '創作展', '回顧展', '典藏', '作品', '畫作', '畫家', '視覺藝術', '裝置藝術',
    '印象派', '現代主義', '色彩', '光影', '沉浸式', '感知', '空間', '美術館', '畫廊', '展覽'
  ],
  [ExhibitionCategory.HISTORY]: [
    '歷史', '古代', '文物', '考古', '博物館', '遺跡', '古文明', '朝代', '傳統', '古董', '文化遺產',
    '兵器', '青銅', '玉器', '器物', '文獻', '史料', '前輩', '紀念', '探索', '歷史長河', '時代'
  ],
  [ExhibitionCategory.SCIENCE]: [
    '科學', '自然', '生物', '天文', '地理', '物理', '化學', '實驗', '研究', '發現', '探索',
    '博物學', '標本', '蘭花', '植物', '動物', '生態', '環境', '教育'
  ],
  [ExhibitionCategory.CULTURE]: [
    '文化', '民俗', '傳統', '習俗', '節慶', '原住民', '族群', '信仰', '宗教', '儀式', '生活',
    '圍棋', '對聲', '書法', '文字', '文學', '神話', '神祇', '祭祀', '故事', '民間', '食物',
    'IP', '主題', '卡通', '動漫', '角色', '品牌', '快閃', '療癒', '童趣', '想像'
  ],
  [ExhibitionCategory.PHOTOGRAPHY]: [
    '攝影', '照片', '相片', '攝影師', '鏡頭', '光影', '黑白', '彩色', '風景', '人像', '紀實',
    '影像', '拍攝', '錄像', '聲音', '聲納'
  ],
  [ExhibitionCategory.DESIGN]: [
    '設計', '工業設計', '產品設計', '平面設計', '室內設計', '時尚', '服裝', '建築', '創意', '美學', '視覺',
    '工藝', '陶瓷', '陶藝', '硯台', '文房', '插畫', '捷克', '獲獎', '學生', '生成', '材料', '物件',
    '紙造', '永續', '城市工廠', '洛可可', '裝飾', '華麗', '繁複'
  ],
  [ExhibitionCategory.TECHNOLOGY]: [
    '科技', '技術', '數位', '電腦', '網路', 'AI', '人工智慧', '機器人', '虛擬', '互動', '創新',
    '沉浸', '3D', 'CG', '動畫', '光雕', '投影', '新媒體', '數位藝術', '沉浸式', 'AR', 'VR',
    '全息', 'STEAM', '科技展', '未來', '智慧', '自動', '體驗'
  ],
  [ExhibitionCategory.OTHER]: ['其他', '綜合', '複合', '跨域', '實境', '解謎', '遊戲']
};

export const classifyExhibitionByAI = (introduction: string): string => {
  const scores: { [key: string]: number } = {};
  
  Object.keys(AI_CLASSIFICATION_KEYWORDS).forEach(category => {
    scores[category] = 0;
    const keywords = AI_CLASSIFICATION_KEYWORDS[category as ExhibitionCategory];
    
    keywords.forEach((keyword: string) => {
      const regex = new RegExp(keyword, 'gi');
      const matches = introduction.match(regex);
      if (matches) {
        scores[category] += matches.length;
      }
    });
  });
  
  let maxScore = 0;
  let bestCategory = ExhibitionCategory.OTHER;
  
  Object.keys(scores).forEach(category => {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      bestCategory = category as ExhibitionCategory;
    }
  });
  
  if (maxScore === 0) {
    return ExhibitionCategory.OTHER;
  }
  
  return bestCategory;
};

export const suggestCategories = (introduction: string): Array<{category: string, confidence: number}> => {
  const scores: { [key: string]: number } = {};
  let totalMatches = 0;
  
  Object.keys(AI_CLASSIFICATION_KEYWORDS).forEach(category => {
    scores[category] = 0;
    const keywords = AI_CLASSIFICATION_KEYWORDS[category as ExhibitionCategory];
    
    keywords.forEach((keyword: string) => {
      const regex = new RegExp(keyword, 'gi');
      const matches = introduction.match(regex);
      if (matches) {
        scores[category] += matches.length;
        totalMatches += matches.length;
      }
    });
  });
  
  if (totalMatches === 0) {
    return [{ category: ExhibitionCategory.OTHER, confidence: 1.0 }];
  }
  
  return Object.keys(scores)
    .filter(category => scores[category] > 0)
    .map(category => ({
      category,
      confidence: scores[category] / totalMatches
    }))
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 3);
};