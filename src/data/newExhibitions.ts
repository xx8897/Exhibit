import { Exhibition } from '../types/Exhibition';
import { getSpecificExhibitionImages } from '../services/imageService';

// 取得展覽圖片映射
const exhibitionImages = getSpecificExhibitionImages();

// 根據新的CSV檔案建立展覽資料
export const newExhibitions: Exhibition[] = [
  {
    id: "00001",
    name: "奧拉弗．埃利亞松：你的好奇旅程",
    period: "2025/06/21 - 2025/09/21",
    startDate: new Date(2025, 5, 21),
    endDate: new Date(2025, 8, 21),
    introduction: "國際知名藝術家奧拉弗．埃利亞松的大型個展，探索光、空間與感知，帶來一系列沉浸式裝置藝術作品。",
    venue: "臺北市立美術館",
    price: "全票 NT30,優待票NT15",
    address: "台北市中山區中山北路三段181號",
    category: "藝術與文化",
    image: exhibitionImages['00001']
  },
  {
    id: "00002",
    name: "懷德樂美—倪蔣懷紀念展",
    period: "2025/06/26 - 2025/09/28",
    startDate: new Date(2025, 5, 26),
    endDate: new Date(2025, 8, 28),
    introduction: "紀念台灣前輩畫家倪蔣懷，展出其家族近年捐贈的大量重要水彩作品和文獻資料，包含多件未曾公開展出的畫作。",
    venue: "臺北市立美術館",
    price: "全票 NT30,優待票NT15",
    address: "台北市中山區中山北路三段181號",
    category: "藝術與文化",
    image: exhibitionImages['00002']
  },
  {
    id: "00003",
    name: "碁人弈事—古代圍棋文化",
    period: "2025/07/12 - 2025/09/28",
    startDate: new Date(2025, 6, 12),
    endDate: new Date(2025, 8, 28),
    introduction: "展出與古代圍棋文化相關的書畫與器物，探索圍棋在歷史長河中的文化意涵與藝術表現。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: "藝術與文化",
    image: exhibitionImages['00003']
  },
  {
    id: "00004",
    name: "絕對．好字－院藏對聯選萃",
    period: "2025/07/05 - 2025/09/30",
    startDate: new Date(2025, 6, 5),
    endDate: new Date(2025, 8, 30),
    introduction: "精選院藏書法對聯作品，展現漢字書寫的藝術之美與對仗格律的文學趣味。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: "藝術與文化",
    image: exhibitionImages['00004']
  },
  {
    id: "00005",
    name: "從印象派到現代主義─美國大都會博物館名作展",
    period: "2025/06/14 - 2025/10/12",
    startDate: new Date(2025, 5, 14),
    endDate: new Date(2025, 9, 12),
    introduction: "展出美國大都會藝術博物館羅伯特·雷曼收藏的印象派至現代主義經典畫作，為國際級藝術大展。",
    venue: "國立故宮博物院 北部院區 第二展覽館",
    price: "全票 NT500,優待票NT450",
    address: "台北市士林區至善路二段221號",
    category: "藝術與文化",
    image: exhibitionImages['00005']
  },
  {
    id: "00008",
    name: "祀與戎：古代兵器攻略",
    period: "2023/12/01 - 長期展出",
    startDate: new Date(2023, 11, 1),
    endDate: new Date(2026, 11, 31),
    introduction: "展出故宮院藏古代玉器與青銅兵器，探討其在祭祀禮儀與軍事戰爭中的雙重角色。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: "其他",
    image: exhibitionImages['00008']
  },
  {
    id: "00009",
    name: "愛硯成痴特展",
    period: "2023/09/28 - 長期展出",
    startDate: new Date(2023, 8, 28),
    endDate: new Date(2026, 11, 31),
    introduction: "展出故宮精選的各式硯台珍品，涵蓋陶瓷、玉器、珍玩等多種材質，呈現文房四寶的工藝之美。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: "科技與設計",
    image: exhibitionImages['00009']
  },
  {
    id: "00023",
    name: "噁の食物博物館",
    period: "2025/06/28 - 2025/09/28",
    startDate: new Date(2025, 5, 28),
    endDate: new Date(2025, 8, 28),
    introduction: "亞洲首展，展出85道來自世界各地的奇特食物，顛覆感官體驗，反思文化偏見與食物的未來。",
    venue: "松山文創園區",
    price: "全票 NT450,愛心票NT225",
    address: "台北市信義區光復南路133號",
    category: "藝術與文化",
    image: exhibitionImages['00023']
  },
  {
    id: "00027",
    name: "TOMICA小汽車55週年博覽會",
    period: "2025/06/28 - 2025/09/14",
    startDate: new Date(2025, 5, 28),
    endDate: new Date(2025, 8, 14),
    introduction: "呈現TOMICA小汽車55年的歷程，設有彩繪車競速賽、車款展示、街道城市區和遊戲工坊等四大主題展區。",
    venue: "華山1914文化創意產業園區 中4B館",
    price: "單人票 NT299,小汽車套票NT399",
    address: "台北市中正區八德路一段1號",
    category: "其他",
    image: exhibitionImages['00027']
  },
  {
    id: "00032",
    name: "Becoming Real｜設計的生成時刻｜2025年iF學生設計獎獲獎作品展",
    period: "2025/07/29 - 2025/08/23",
    startDate: new Date(2025, 6, 29),
    endDate: new Date(2025, 7, 23),
    introduction: "集結來自23個國家地區、共100件iF學生設計獎的獲獎作品，展現新世代如何用設計回應生活與未來。",
    venue: "松山文創園區",
    price: "免費入場",
    address: "台北市信義區光復南路133號",
    category: "科技與設計",
    image: exhibitionImages['00032']
  },
  {
    id: "00035",
    name: "2024臺灣國際陶藝雙年展",
    period: "2024/10/04 - 2025/04/06",
    startDate: new Date(2024, 9, 4),
    endDate: new Date(2025, 3, 6),
    introduction: "台灣陶藝界的國際級競賽與展覽，展出來自世界各國陶藝家的得獎與入選作品，呈現當代陶瓷藝術的多元面貌。",
    venue: "新北市立鶯歌陶瓷博物館",
    price: "全票 NT$80, 新北市民免費",
    address: "新北市鶯歌區文化路200號",
    category: "藝術與文化",
    image: exhibitionImages['00035']
  },
  {
    id: "00053",
    name: "2025臺灣文博會",
    period: "2025-08-02 至 2025-08-11",
    startDate: new Date(2025, 7, 2),
    endDate: new Date(2025, 7, 11),
    introduction: "年度主題「水風景」，匯集互動體驗、文創商品。",
    venue: "松山文創園區及南港展覽館",
    price: "待補充",
    address: "台北市信義區光復南路133號",
    category: "科技與設計",
    image: exhibitionImages['00053']
  },
  {
    id: "00068",
    name: "航海王ONE PIECE歡樂派對嘉年華",
    period: "2025-06-28 至 2025-08-30",
    startDate: new Date(2025, 5, 28),
    endDate: new Date(2025, 7, 30),
    introduction: "慶祝《航海王》25年冒險故事，包含互動體驗、空島沉浸、海底監獄場景及AR遊戲挑戰，適合親子參與。",
    venue: "台北兒童新樂園",
    price: "NT$490起",
    address: "台北市士林區承德路五段55號",
    category: "科技與設計",
    image: exhibitionImages['00068']
  },
  {
    id: "00072",
    name: "虎姑婆和他的朋友沉浸式遊戲場",
    period: "2025-06-12 至 2025-10-12",
    startDate: new Date(2025, 5, 12),
    endDate: new Date(2025, 9, 12),
    introduction: "提供360度全息投影劇場、AR互動及STEAM創作區，帶領孩子探索台灣民間故事與想像力冒險。",
    venue: "國立臺灣科學教育館七樓",
    price: "NT$200起",
    address: "台北市士林區士商路189號",
    category: "科技與設計",
    image: exhibitionImages['00072']
  },
  {
    id: "00081",
    name: "森之市珈琲コーヒーと花物語・第三回",
    period: "持續中",
    startDate: new Date(2025, 0, 1),
    endDate: new Date(2026, 11, 31),
    introduction: "結合咖啡、花藝與故事的文創展覽，探索日式美學與自然元素的互動體驗。",
    venue: "松山文創園區",
    price: "NT$200起",
    address: "台北市信義區光復南路133號",
    category: "自然",
    image: exhibitionImages['00081']
  }
];

// 所有可用的展覽分類
export const exhibitionCategories = [
  "藝術與文化",
  "科技與設計", 
  "其他",
  "自然"
];

// 地區分類
export const regions = [
  "北部",
  "中部",
  "南部", 
  "東部"
];

// 根據分類篩選展覽
export const getExhibitionsByCategory = (category: string): Exhibition[] => {
  return newExhibitions.filter(exhibition => exhibition.category === category);
};

// 根據地區篩選展覽
export const getExhibitionsByRegion = (region: string): Exhibition[] => {
  const regionMap: { [key: string]: string[] } = {
    '北部': ['台北', '新北', '桃園', '新竹', '基隆', '宜蘭'],
    '中部': ['台中', '彰化', '南投', '雲林', '苗栗'],
    '南部': ['高雄', '台南', '屏東', '嘉義'],
    '東部': ['花蓮', '台東']
  };

  return newExhibitions.filter(exhibition => {
    const cities = regionMap[region] || [];
    return cities.some(city => exhibition.address.includes(city));
  });
};