import { Exhibition, ExhibitionCategory } from '../types/Exhibition';

// 從CSV檔案手動轉換的真實展覽資料
export const realExhibitions: Exhibition[] = [
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
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E5%A5%A7%E6%8B%89%E5%BC%97%EF%BC%8E%E5%9F%83%E5%88%A9%E4%BA%9E%E6%9D%BE"
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
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E6%87%B7%E5%BE%B7%E6%A8%82%E7%BE%8E"
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
    category: ExhibitionCategory.CULTURE,
    image: "https://via.placeholder.com/400x300?text=%E7%A2%81%E4%BA%BA%E5%BC%88%E4%BA%8B"
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
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E7%B5%95%E5%B0%8D%E5%A5%BD%E5%AD%97"
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
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E5%8D%B0%E8%B1%A1%E6%B4%BE%E5%88%B0%E7%8F%BE%E4%BB%A3%E4%B8%BB%E7%BE%A9"
  },
  {
    id: "00006",
    name: "神聖藝術的當代回聲｜長流美術館與宗教藝術對話的省思錄",
    period: "2025/08/22 - 2025/10/26",
    startDate: new Date(2025, 7, 22),
    endDate: new Date(2025, 9, 26),
    introduction: "探討宗教藝術在當代社會的回響與變革，透過長流美術館的收藏與當代作品進行一場跨時空的對話。",
    venue: "長流美術館",
    price: "免費",
    address: "台北市中正區仁愛路二段63號B1",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E7%A5%9E%E8%81%96%E8%97%9D%E8%A1%93"
  },
  {
    id: "00007",
    name: "《每個人心中都有一座夢幻島》賴新龍個展",
    period: "2025/08/22 - 2025/10/11",
    startDate: new Date(2025, 7, 22),
    endDate: new Date(2025, 9, 11),
    introduction: "藝術家賴新龍的個人畫展，以色彩斑斕的創作帶領觀眾進入充滿想像與童趣的內心世界。",
    venue: "長流美術館",
    price: "免費",
    address: "台北市中正區仁愛路二段63號B1",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E5%A4%A2%E5%B9%BB%E5%B3%B6"
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
    category: ExhibitionCategory.HISTORY,
    image: "https://via.placeholder.com/400x300?text=%E7%A5%80%E8%88%87%E6%88%8E"
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
    category: ExhibitionCategory.DESIGN,
    image: "https://via.placeholder.com/400x300?text=%E6%84%9B%E7%A1%AF%E6%88%90%E7%99%A1"
  },
  {
    id: "00010",
    name: "華麗魔法屋─故宮的洛可可珍藏",
    period: "2021/12/24 - 長期展出",
    startDate: new Date(2021, 11, 24),
    endDate: new Date(2026, 11, 31),
    introduction: "展出故宮收藏的洛可可風格器物，呈現18世紀歐洲宮廷華麗、繁複的裝飾藝術風格。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E8%8F%AF%E9%BA%97%E9%AD%94%E6%B3%95%E5%B1%8B"
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
    category: ExhibitionCategory.CULTURE,
    image: "https://via.placeholder.com/400x300?text=%E5%99%81%E3%81%AE%E9%A3%9F%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A4%A8"
  },
  {
    id: "00025",
    name: "會動的浮世繪展-日本藝術絕代之華台北站",
    period: "2025/07/05 - 2025/10/06",
    startDate: new Date(2025, 6, 5),
    endDate: new Date(2025, 9, 6),
    introduction: "結合實體名畫與3D CG動畫、光雕投影技術，讓超過300件浮世繪大師經典作品「動」起來，打造沉浸式互動空間。",
    venue: "松山文創園區 一號倉庫",
    price: "全票 NT450,優惠票NT400",
    address: "台北市信義區光復南路133號",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E6%9C%83%E5%8B%95%E7%9A%84%E6%B5%AE%E4%B8%96%E7%B9%AA"
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
    category: ExhibitionCategory.CULTURE,
    image: "https://via.placeholder.com/400x300?text=TOMICA%E5%B0%8F%E6%B1%BD%E8%BB%8A"
  },
  {
    id: "00013",
    name: "眾神降臨——沉浸故宮3.0數位展",
    period: "2025/05/27 - 2025/08/31",
    startDate: new Date(2025, 4, 27),
    endDate: new Date(2025, 7, 31),
    introduction: "運用新媒體技術，將故宮典藏的神祇相關文物轉化為沉浸式數位藝術體驗，讓觀眾走入神話世界。",
    venue: "國立故宮博物院 北部院區",
    price: "國人 NT150,外籍人士NT350",
    address: "台北市士林區至善路二段221號",
    category: ExhibitionCategory.TECHNOLOGY,
    image: "https://via.placeholder.com/400x300?text=%E7%9C%BE%E7%A5%9E%E9%99%8D%E8%87%A8"
  },
  {
    id: "00031",
    name: "波隆那世界插畫大獎展",
    period: "2025/07/12 - 2025/10/06",
    startDate: new Date(2025, 6, 12),
    endDate: new Date(2025, 9, 6),
    introduction: "被譽為「插畫界奧斯卡」的年度大展，展出世界頂尖插畫家的得獎作品，是插畫迷不容錯過的盛會。",
    venue: "松山文創園區",
    price: "售票 (詳洽主辦單位)",
    address: "台北市信義區光復南路133號",
    category: ExhibitionCategory.ART,
    image: "https://via.placeholder.com/400x300?text=%E6%B3%A2%E9%9A%86%E9%82%A3%E6%8F%92%E7%95%AB%E5%A4%A7%E7%8D%8E"
  }
];

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