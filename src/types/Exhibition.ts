export interface Exhibition {
  id: string;
  name: string;
  period: string;
  startDate: Date;
  endDate: Date;
  introduction: string;
  venue: string;
  price: string;
  address: string;
  category: string;
  region?: string;
  image?: string;
  website?: string;
  ticketUrl?: string;
  latitude?: number;
  longitude?: number;
}

export interface ExhibitionFilters {
  category?: string;
  region?: string;
  dateFrom?: Date;
  dateTo?: Date;
  keyword?: string;
}

export enum Region {
  NORTH = "北部",
  CENTRAL = "中部", 
  SOUTH = "南部",
  EAST = "東部",
  TAIPEI = "台北市",
  NEW_TAIPEI = "新北市"
}

export enum ExhibitionCategory {
  ART = "藝術與文化",
  TECHNOLOGY = "科技與設計", 
  NATURE = "自然",
  OTHER = "其他",
  // 新增的分類，保持與舊資料相容
  CULTURE = "文化",
  HISTORY = "歷史",
  DESIGN = "設計"
}