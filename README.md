# Exhibit - 全台展覽查詢平台

一個現代化的展覽查詢平台，提供直觀的使用者介面和智慧分類功能，讓用戶輕鬆發現並探索各種展覽活動。

## 🚀 專案特色

### 🎨 現代化設計系統

- **漸層背景設計**：採用多層次漸層背景，營造現代視覺效果
- **分類色彩系統**：不同展覽類別使用專屬配色方案
  - 🎨 藝術與文化：紫色系
  - 💻 科技與設計：藍色系
  - 🌱 自然：綠色系
  - 🎯 其他：橘色系
- **玻璃擬態設計**：使用 backdrop-filter 和半透明效果
- **響應式布局**：完整支援桌面和行動裝置

### 🔍 智慧搜尋與篩選

- **即時搜尋**：支援展覽名稱、地點、簡介關鍵字搜尋
- **分類篩選**：按展覽類型快速篩選
- **地區篩選**：支援北部、中部、南部、東部地區篩選
- **複合篩選**：可同時使用多種篩選條件

### 🤖 AI 智慧分類

- **自動分類**：基於展覽簡介內容自動分析分類
- **信心度顯示**：提供 AI 分類的可信度參考
- **分類建議**：為展覽提供最適合的類別建議
- **即時分析**：動態分析展覽內容並提供分類

### 🗺️ 地圖整合功能

- **Google Maps 整合**：一鍵開啟 Google 地圖查看展覽位置
- **位置資訊顯示**：清楚標示展覽地址和場館資訊
- **導航支援**：支援直接導航到展覽地點

## 📱 功能完整列表

### ✅ 已完成功能

#### 1. 核心展示功能

- **首頁展覽列表**：以卡片形式展示所有展覽
- **展覽詳細頁面**：完整展覽資訊，包含圖片、簡介、票價等
- **熱門展覽輪播**：首頁輪播展示精選展覽
- **購票連結整合**：直接連結官方網站和購票平台

#### 2. 互動功能

- **搜尋系統**：即時搜尋展覽內容
- **篩選系統**：多重篩選條件支援
- **AI 分類建議**：智慧展覽分類功能
- **地圖導航**：整合 Google Maps 服務

#### 3. 使用者體驗

- **現代化 UI/UX**：採用最新設計趨勢
- **流暢動畫效果**：按鈕懸停、頁面轉場動畫
- **載入狀態提示**：AI 分析時顯示載入動畫
- **錯誤處理**：完整的錯誤頁面和提示

#### 4. 技術架構

- **TypeScript 支援**：完整型別安全
- **模組化架構**：可重用元件設計
- **效能最佳化**：圖片延遲載入、元件最佳化
- **SEO 友好**：良好的 HTML 語意化結構

## 🏗️ 專案架構

```
exhibit/
├── public/                    # 靜態資源
│   ├── images/               # 圖片資源
│   └── index.html           # 主要 HTML 模板
├── src/
│   ├── components/          # 可重用元件
│   │   ├── Header/         # 頁面標頭導航
│   │   ├── ExhibitionCard/ # 展覽卡片元件
│   │   ├── FilterBar/      # 篩選功能列
│   │   ├── SearchBar/      # 搜尋輸入元件
│   │   ├── Map/           # 地圖顯示元件
│   │   ├── AIClassification/ # AI 分類元件
│   │   └── ExhibitionImage/  # 展覽圖片元件
│   ├── pages/              # 頁面元件
│   │   ├── HomePage/       # 首頁
│   │   ├── ExhibitionDetail/ # 展覽詳細頁
│   │   ├── CategoryPage/   # 分類頁面
│   │   └── DataIntegrationDemo/ # 資料整合示範
│   ├── services/           # 服務層
│   │   ├── aiClassification.ts # AI 分類服務
│   │   └── imageService.ts     # 圖片處理服務
│   ├── data/              # 資料層
│   │   ├── newExhibitions.ts  # 展覽資料
│   │   └── mockExhibitions.ts # 測試資料
│   ├── types/             # TypeScript 類型定義
│   ├── utils/             # 工具函數
│   └── test/              # 測試檔案
└── package.json           # 專案依賴配置
```

## 🚀 快速開始

### 環境需求

- Node.js 16+
- npm 或 yarn

### 安裝與啟動

```bash
# 克隆專案
git clone [repository-url]

# 進入專案目錄
cd exhibit

# 安裝依賴
npm install

# 啟動開發伺服器
npm start
```

專案將在 http://localhost:3000 啟動

### 建置生產版本

```bash
# 建置專案
npm run build

# 預覽建置結果
npm run build && npx serve -s build
```

## 🎯 使用指南

### 基本操作

1. **瀏覽展覽**：首頁顯示所有可用展覽
2. **搜尋展覽**：使用頁面頂部搜尋框輸入關鍵字
3. **篩選展覽**：使用篩選欄選擇類別和地區
4. **查看詳情**：點擊展覽卡片進入詳細頁面

## 🔧 技術規格

### 前端技術棧

- **React 18**：現代化 React 框架
- **TypeScript**：型別安全的 JavaScript
- **React Router**：單頁應用路由管理
- **CSS3**：現代 CSS 特性（Grid、Flexbox、backdrop-filter）

### 設計系統

- **響應式設計**：支援各種螢幕尺寸
- **可訪問性**：遵循 WCAG 指導原則
- **效能優化**：圖片延遲載入、程式碼分割
- **SEO 優化**：語意化 HTML、meta 標籤

## 👨‍💻 開發團隊

本專案由 @xx8897 主導開發，使用 [Claude Code](https://claude.ai/code) 作為 AI 程式開發助手，提供：

- 🎨 現代化 UI/UX 設計實作
- 🔧 React TypeScript 架構建置
- 🤖 AI 功能整合與最佳化
- 📱 響應式設計與使用者體驗優化

### 開發流程

1. Fork 專案
2. 創建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📝 授權資訊

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案
