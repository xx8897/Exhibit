import { Exhibition } from '../types/Exhibition';

// 展覽資料 - 等待新資料
export const realExhibitions: Exhibition[] = [];

// 根據地區取得展覽資料
export const getRealExhibitionsByRegion = (region: string): Exhibition[] => {
  const regionMap: { [key: string]: string[] } = {
    '北部': ['臺北', '新北', '桃園', '新竹', '基隆', '宜蘭'],
    '中部': ['臺中', '彰化', '南投', '雲林', '苗栗'],
    '南部': ['高雄', '臺南', '屏東', '嘉義'],
    '東部': ['花蓮', '臺東']
  };

  return realExhibitions.filter(exhibition => {
    const cities = regionMap[region] || [];
    return cities.some(city => exhibition.address.includes(city));
  });
};

// 根據分類取得展覽資料
export const getRealExhibitionsByCategory = (category: string): Exhibition[] => {
  return realExhibitions.filter(exhibition => exhibition.category === category);
};