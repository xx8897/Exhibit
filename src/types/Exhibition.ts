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
  ART = "藝術",
  HISTORY = "歷史",
  SCIENCE = "科學",
  CULTURE = "文化",
  PHOTOGRAPHY = "攝影",
  DESIGN = "設計",
  TECHNOLOGY = "科技",
  OTHER = "其他"
}