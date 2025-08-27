import { Exhibition } from '../types/Exhibition';

// 地址到區域映射函數
const getRegionFromAddress = (address: string): string => {
  if (!address) return '其他';
  
  if (address.includes('台北') || address.includes('臺北')) return '北部';
  if (address.includes('新北')) return '北部';
  if (address.includes('桃園')) return '北部';
  if (address.includes('新竹')) return '北部';
  if (address.includes('台中') || address.includes('臺中')) return '中部';
  if (address.includes('彰化')) return '中部';
  if (address.includes('苗栗')) return '中部';
  if (address.includes('雲林')) return '中部';
  if (address.includes('南投')) return '中部';
  if (address.includes('嘉義')) return '南部';
  if (address.includes('台南') || address.includes('臺南')) return '南部';
  if (address.includes('高雄')) return '南部';
  if (address.includes('屏東')) return '南部';
  if (address.includes('台東') || address.includes('臺東')) return '東部';
  if (address.includes('花蓮')) return '東部';
  if (address.includes('宜蘭')) return '東部';
  
  return '其他';
};

// 類型映射函數
const mapCategoryType = (type: string): string => {
  switch (type) {
    case '藝術':
      return '藝術與文化';
    case '科學教育':
      return '科技與設計';
    case '歷史文化':
      return '文化';
    case '其他':
    default:
      return '其他';
  }
};

// 解析展覽期間
const parseExhibitionPeriod = (period: string) => {
  if (!period || period === '持續中' || period === '常設展（長期）' || period.includes('長期展出')) {
    return {
      startDate: new Date('2023-01-01'),
      endDate: new Date('2026-12-31')
    };
  }

  // 處理日期格式 "2025/06/21 - 2025/09/21" 或 "2025-06-21 - 2025-09-21"
  const dateMatch = period.match(/(\d{4})[\/\-](\d{2})[\/\-](\d{2})\s*\-\s*(\d{4})[\/\-](\d{2})[\/\-](\d{2})/);
  if (dateMatch) {
    const [, startYear, startMonth, startDay, endYear, endMonth, endDay] = dateMatch;
    return {
      startDate: new Date(parseInt(startYear), parseInt(startMonth) - 1, parseInt(startDay)),
      endDate: new Date(parseInt(endYear), parseInt(endMonth) - 1, parseInt(endDay))
    };
  }

  // 處理單一日期格式
  const singleDateMatch = period.match(/(\d{4})[\/\-](\d{2})[\/\-](\d{2})/);
  if (singleDateMatch) {
    const [, year, month, day] = singleDateMatch;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return {
      startDate: date,
      endDate: new Date(date.getTime() + 90 * 24 * 60 * 60 * 1000) // 默認3個月後結束
    };
  }

  // 默認值
  return {
    startDate: new Date(),
    endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  };
};

// 圖片映射
const getImagePath = (imageCode: string): string => {
  const baseUrl = process.env.PUBLIC_URL || '';
  const imageMap: { [key: string]: string } = {
    'A': `${baseUrl}/A.jpg`,
    'B': `${baseUrl}/B.jpg`, 
    'C': `${baseUrl}/C.jpg`,
    'D': `${baseUrl}/D.jpg`
  };
  
  return imageMap[imageCode] || `${baseUrl}/C.jpg`; // 默認使用 C.jpg
};

// CSV 資料轉換為 Exhibition 物件
export const updatedExhibitions: Exhibition[] = [
  {
    id: '1',
    name: '奧拉弗．埃利亞松：你的好奇旅程',
    period: '2025/06/21 - 2025/09/21',
    startDate: new Date(2025, 5, 21),
    endDate: new Date(2025, 8, 21),
    introduction: '國際知名藝術家奧拉弗．埃利亞松的大型個展，探索光、空間與感知，帶來一系列沉浸式裝置藝術作品。',
    venue: '臺北市立美術館',
    price: '全票 NT30,優待票NT15',
    address: '台北市中山區中山北路三段181號',
    category: '藝術與文化',
    image: getImagePath('C'),
    region: getRegionFromAddress('台北市中山區中山北路三段181號')
  },
  {
    id: '2',
    name: '懷德樂美—倪蔣懷紀念展',
    period: '2025/06/26 - 2025/09/28',
    startDate: new Date(2025, 5, 26),
    endDate: new Date(2025, 8, 28),
    introduction: '紀念台灣前輩畫家倪蔣懷，展出其家族近年捐贈的大量重要水彩作品和文獻資料，包含多件未曾公開展出的畫作。',
    venue: '臺北市立美術館',
    price: '全票 NT30,優待票NT15',
    address: '台北市中山區中山北路三段181號',
    category: '藝術與文化',
    image: getImagePath('C'),
    region: getRegionFromAddress('台北市中山區中山北路三段181號')
  },
  {
    id: '3',
    name: '碁人弈事—古代圍棋文化',
    period: '2025/07/12 - 2025/09/28',
    startDate: new Date(2025, 6, 12),
    endDate: new Date(2025, 8, 28),
    introduction: '展出與古代圍棋文化相關的書畫與器物，探索圍棋在歷史長河中的文化意涵與藝術表現。',
    venue: '國立故宮博物院 北部院區',
    price: '國人 NT150,外籍人士NT350',
    address: '台北市士林區至善路二段221號',
    category: '藝術與文化',
    image: getImagePath('C'),
    region: getRegionFromAddress('台北市士林區至善路二段221號')
  },
  // 可以繼續添加更多展覽資料...
];

// 從 CSV 資料動態生成展覽列表的輔助函數
export const createExhibitionFromCSVRow = (data: {
  ID: string;
  類型: string;
  展覽名稱: string;
  展覽期間: string;
  展覽簡介: string;
  '展覽地點/場館': string;
  票價: string;
  地址: string;
  圖片: string;
}): Exhibition => {
  const { startDate, endDate } = parseExhibitionPeriod(data.展覽期間);
  
  return {
    id: data.ID,
    name: data.展覽名稱,
    period: data.展覽期間,
    startDate,
    endDate,
    introduction: data.展覽簡介,
    venue: data['展覽地點/場館'],
    price: data.票價,
    address: data.地址,
    category: mapCategoryType(data.類型),
    image: getImagePath(data.圖片),
    region: getRegionFromAddress(data.地址)
  };
};

export { getRegionFromAddress, mapCategoryType, getImagePath };