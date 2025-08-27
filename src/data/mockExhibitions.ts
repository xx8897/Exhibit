import { Exhibition, ExhibitionCategory, Region } from '../types/Exhibition';

export const mockExhibitions: Exhibition[] = [
  {
    id: "12345",
    name: "臺灣美術雙年展",
    period: "2025年3月15日-10月22日",
    startDate: new Date("2025-03-15"),
    endDate: new Date("2025-10-22"),
    introduction: "展現臺灣當代藝術多元面貌，結合傳統與創新的美術作品展覽。",
    venue: "國立臺灣美術館",
    price: "免費",
    address: "臺中市西區五權西路一段2號",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.ntmofa.gov.tw",
    ticketUrl: "https://www.ntmofa.gov.tw/tickets",
    latitude: 24.1417,
    longitude: 120.6736
  },
  {
    id: "12346",
    name: "古文明探索展",
    period: "2025年4月1日-8月31日",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-08-31"),
    introduction: "深度探索古埃及、古希臘羅馬等古文明的歷史文物與藝術珍品。",
    venue: "國立故宮博物院",
    price: "全票350元",
    address: "臺北市士林區至善路二段221號",
    category: ExhibitionCategory.HISTORY,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.npm.gov.tw",
    ticketUrl: "https://www.npm.gov.tw/tickets",
    latitude: 25.1023,
    longitude: 121.5485
  },
  {
    id: "12347",
    name: "未來科技體驗展",
    period: "2025年5月10日-9月15日",
    startDate: new Date("2025-05-10"),
    endDate: new Date("2025-09-15"),
    introduction: "透過互動展示體驗人工智慧、虛擬實境等前沿科技應用。",
    venue: "國立科學工藝博物館",
    price: "全票200元",
    address: "高雄市三民區九如一路720號",
    category: ExhibitionCategory.TECHNOLOGY,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.nstm.gov.tw",
    ticketUrl: "https://www.nstm.gov.tw/tickets",
    latitude: 22.6599,
    longitude: 120.3021
  },
  {
    id: "12348",
    name: "台灣攝影家聯展",
    period: "2025年6月1日-12月20日",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-12-20"),
    introduction: "匯聚台灣頂尖攝影師作品，展現寶島風光與人文之美。",
    venue: "台北當代藝術館",
    price: "全票150元",
    address: "臺北市大同區長安西路39號",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.mocataipei.org.tw",
    ticketUrl: "https://www.mocataipei.org.tw/tickets",
    latitude: 25.0478,
    longitude: 121.5167
  },
  {
    id: "12349",
    name: "原住民文化藝術展",
    period: "2025年7月15日-11月30日",
    startDate: new Date("2025-07-15"),
    endDate: new Date("2025-11-30"),
    introduction: "呈現台灣原住民族豐富的文化藝術傳統與當代創作。",
    venue: "花蓮文化創意產業園區",
    price: "全票100元",
    address: "花蓮縣花蓮市中華路144號",
    category: ExhibitionCategory.CULTURE,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.hccp.com.tw",
    ticketUrl: "https://www.hccp.com.tw/tickets",
    latitude: 23.9753,
    longitude: 121.6015
  },
  {
    id: "12350",
    name: "現代設計美學展",
    period: "2025年8月1日-12月15日",
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-12-15"),
    introduction: "探索現代設計美學理念，從工業設計到生活美學的全方位呈現。",
    venue: "松山文創園區",
    price: "全票280元",
    address: "臺北市信義區光復南路133號",
    category: ExhibitionCategory.DESIGN,
    image: "https://via.placeholder.com/300x200",
    website: "https://www.songshanculturalpark.org",
    ticketUrl: "https://www.songshanculturalpark.org/tickets",
    latitude: 25.0434,
    longitude: 121.5614
  }
];

export const getExhibitionsByRegion = (region: string): Exhibition[] => {
  const regionMap: { [key: string]: string[] } = {
    [Region.NORTH]: ["臺北", "新北", "桃園", "新竹", "基隆", "宜蘭"],
    [Region.CENTRAL]: ["臺中", "彰化", "南投", "雲林", "苗栗"],
    [Region.SOUTH]: ["高雄", "臺南", "屏東", "嘉義"],
    [Region.EAST]: ["花蓮", "臺東"]
  };

  return mockExhibitions.filter(exhibition => {
    const cities = regionMap[region] || [];
    return cities.some(city => exhibition.address.includes(city));
  });
};

export const getExhibitionsByCategory = (category: string): Exhibition[] => {
  return mockExhibitions.filter(exhibition => exhibition.category === category);
};