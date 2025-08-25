import { Exhibition, ExhibitionCategory } from '../types/Exhibition';

export interface CSVExhibition {
  ID: string;
  類型: string;
  展覽名稱: string;
  展覽期間: string;
  展覽簡介: string;
  "展覽地點/場館": string;
  票價: string;
  地址: string;
  縣市: string;
  AI分類: string;
  整合分類: string;
}

export const parseExhibitionDate = (dateString: string): { startDate: Date; endDate: Date; period: string } => {
  // 處理各種日期格式：2025/06/21 - 2025/09/21, 持續中, 長期展出等
  const cleanDateString = dateString.trim();
  
  if (cleanDateString.includes('持續中') || cleanDateString.includes('長期展出') || cleanDateString.includes('常設展')) {
    return {
      startDate: new Date(),
      endDate: new Date(2026, 11, 31), // 設定為2026年底
      period: cleanDateString
    };
  }
  
  // 匹配標準日期格式 YYYY/MM/DD - YYYY/MM/DD 或 YYYY-MM-DD 至 YYYY-MM-DD
  const dateRangeMatch = cleanDateString.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\s*[-至]\s*(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  
  if (dateRangeMatch) {
    const [, startYear, startMonth, startDay, endYear, endMonth, endDay] = dateRangeMatch;
    const startDate = new Date(parseInt(startYear), parseInt(startMonth) - 1, parseInt(startDay));
    const endDate = new Date(parseInt(endYear), parseInt(endMonth) - 1, parseInt(endDay));
    
    return {
      startDate,
      endDate,
      period: cleanDateString
    };
  }
  
  // 如果無法解析，回傳預設值
  return {
    startDate: new Date(),
    endDate: new Date(2025, 11, 31),
    period: cleanDateString
  };
};

export const mapCategoryToEnum = (category: string): ExhibitionCategory => {
  const categoryMap: { [key: string]: ExhibitionCategory } = {
    '藝術': ExhibitionCategory.ART,
    '美術': ExhibitionCategory.ART,
    '美術與典藏': ExhibitionCategory.ART,
    '當代與數位藝術': ExhibitionCategory.ART,
    '當代藝術': ExhibitionCategory.ART,
    '歷史': ExhibitionCategory.HISTORY,
    '地方文史': ExhibitionCategory.HISTORY,
    '科學': ExhibitionCategory.SCIENCE,
    '科技': ExhibitionCategory.TECHNOLOGY,
    '文化': ExhibitionCategory.CULTURE,
    '攝影': ExhibitionCategory.PHOTOGRAPHY,
    '設計': ExhibitionCategory.DESIGN,
    '設計與工藝': ExhibitionCategory.DESIGN,
    '工藝': ExhibitionCategory.DESIGN,
    'IP與主題特展': ExhibitionCategory.CULTURE,
    '表演藝術': ExhibitionCategory.CULTURE,
    '藝術節與博覽會': ExhibitionCategory.ART,
    '其他': ExhibitionCategory.OTHER
  };
  
  return categoryMap[category] || ExhibitionCategory.OTHER;
};

export const parseCSVToExhibitions = (csvData: CSVExhibition[]): Exhibition[] => {
  return csvData.map((row) => {
    const { startDate, endDate, period } = parseExhibitionDate(row.展覽期間);
    const paddedId = row.ID.padStart(5, '0'); // 確保ID為5位數
    
    return {
      id: paddedId,
      name: row.展覽名稱.trim(),
      period: period,
      startDate,
      endDate,
      introduction: row.展覽簡介.trim(),
      venue: row["展覽地點/場館"].trim(),
      price: row.票價.trim(),
      address: row.地址.trim(),
      category: mapCategoryToEnum(row.類型 || row.AI分類 || row.整合分類),
      // 可以後續加入的欄位
      image: `https://via.placeholder.com/400x300?text=${encodeURIComponent(row.展覽名稱)}`,
      website: undefined,
      ticketUrl: undefined,
      latitude: undefined,
      longitude: undefined
    } as Exhibition;
  });
};