import { classifyExhibitionByAI, suggestCategories } from '../services/aiClassification';
import { realExhibitions } from '../data/realExhibitions';

// 測試AI分類功能
export const testAIClassification = () => {
  console.log('=== AI分類功能測試 ===\n');

  // 測試部分真實展覽資料
  const testExhibitions = realExhibitions.slice(0, 10);

  testExhibitions.forEach((exhibition, index) => {
    console.log(`${index + 1}. 展覽名稱: ${exhibition.name}`);
    console.log(`   原始分類: ${exhibition.category}`);
    console.log(`   展覽簡介: ${exhibition.introduction.substring(0, 50)}...`);
    
    // AI分類結果
    const aiCategory = classifyExhibitionByAI(exhibition.introduction);
    console.log(`   AI建議分類: ${aiCategory}`);
    
    // 分類建議
    const suggestions = suggestCategories(exhibition.introduction);
    console.log(`   其他建議: ${suggestions.map(s => `${s.category}(${Math.round(s.confidence * 100)}%)`).join(', ')}`);
    
    // 比較結果
    const match = exhibition.category === aiCategory ? '✓ 匹配' : '✗ 不匹配';
    console.log(`   結果: ${match}\n`);
  });

  // 統計準確度
  let correctCount = 0;
  testExhibitions.forEach(exhibition => {
    const aiCategory = classifyExhibitionByAI(exhibition.introduction);
    if (exhibition.category === aiCategory) {
      correctCount++;
    }
  });

  const accuracy = (correctCount / testExhibitions.length) * 100;
  console.log(`=== 測試結果統計 ===`);
  console.log(`測試樣本數: ${testExhibitions.length}`);
  console.log(`分類正確數: ${correctCount}`);
  console.log(`準確度: ${accuracy.toFixed(1)}%`);
};

// 測試特定展覽簡介的分類
export const testSpecificIntroduction = (introduction: string) => {
  console.log('\n=== 特定簡介分類測試 ===');
  console.log(`簡介: ${introduction}`);
  
  const aiCategory = classifyExhibitionByAI(introduction);
  console.log(`AI分類: ${aiCategory}`);
  
  const suggestions = suggestCategories(introduction);
  console.log('分類建議:');
  suggestions.forEach(suggestion => {
    console.log(`  - ${suggestion.category}: ${Math.round(suggestion.confidence * 100)}%`);
  });
};