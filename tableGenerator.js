// データを表に挿入する汎用関数
function insertDataIntoTable(data, tableId, defaultBgColor) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    const lines = data.split('\n').filter(line => line.trim() !== '');

    lines.forEach(line => {
        const [firstColumn, secondColumn, thirdColumn] = line.trim().split(': ');
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = firstColumn.trim();
        row.insertCell(1).textContent = secondColumn.trim();
        row.insertCell(2).textContent = thirdColumn.trim();

        // 背景色の設定
        if (tableId === 'qualificationsTable') {
            let matched = false;
            const bgColorCriteria = [
                { keyword: '技術者', color: '#E6E6FA' },
                { keyword: 'Microsoft', color: '#E6E6FA' },
                { keyword: '簿記', color: '#ADD8E6' },
                { keyword: 'ファイナンシャル', color: '#ADD8E6' },
                { keyword: 'TOEIC', color: '#FFB6C1' }
            ];
            bgColorCriteria.forEach(criteria => {
                if (thirdColumn.includes(criteria.keyword)) {
                    row.style.backgroundColor = criteria.color;
                    matched = true;
                }
            });
            if (!matched) {
                row.style.backgroundColor = defaultBgColor;
            }
        } else {
            row.style.backgroundColor = defaultBgColor;
        }
    });
}

// ページ読み込み時にデータを挿入する
window.addEventListener('load', function() {
    const htmlCssJsMonths = calculateMonthsSinceJune();
    // プログラミング言語一覧のデータ挿入
    const programmingLanguagesData = `
        Python: 4年: 卒業研究，自動化スクリプトの制作，大学の授業
        C#: 2年: 研究室のグループワーク，卒業研究（主にUnity）
        Java: 4年: Android Studioでのアプリ開発，大学の授業
        Matlab: 3年: 大学のレポート課題で積極的に活用
        C++: 1年: 研究室の課題
        HTML, CSS, js: ${htmlCssJsMonths}ヶ月: 本サイトの構築
        Kotlin: 1ヶ月: 趣味でのアプリ開発
        Swift: 1ヶ月: 趣味でのアプリ開発
    `;
    insertDataIntoTable(programmingLanguagesData, 'programmingLanguagesTable', '#FFFFFF'); // デフォルトは白色

    // 経歴のデータ挿入
    const careerData = `
        2017: 4: 早稲田摂陵高等学校　入学
        2020: 3: 早稲田摂陵高等学校　卒業
        2020: 4: 立命館大学　情報理工学部　入学
        2024: 3: 立命館大学　情報理工学部　卒業
        2024: 4: 立命館大学大学院　情報理工学研究科　入学
    `;
    insertDataIntoTable(careerData, 'careerTable', '#FFFFFF'); // デフォルトは白色

    // 保有資格のデータ挿入
    const qualificationsData = `
        2022: 5: 基本情報技術者試験　合格
        2022: 6: 応用情報技術者試験　合格
        2022: 12: 上級バーチャルリアリティ技術者　取得
        2023: 7: Microsoft Office Specialist Associate 2019　取得
        2023: 1: TOEIC L&R 公開テスト　745点　取得
        2022: 2: 日商簿記検定試験２級　合格
        2024: 6: ２級ファイナンシャル・プランニング技能士　取得
        2021: 2: 実用漢字能力検定２級　合格
        2021: 9: 世界遺産検定２級　合格
        2021: 12: 色彩検定２級　合格
        2022: 2: 秘書技能検定試験２級　合格
        2024: 5: 国家公務員総合職採用試験　最終合格
    `;
    insertDataIntoTable(qualificationsData, 'qualificationsTable', '#D3FFD3'); // デフォルトは薄黄緑
});

// htmlの利用歴（2024年6月から今まで）を動的に計算する
function calculateMonthsSinceJune() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 月は0から始まるので+1
    const startYear = 2024;
    const startMonth = 6; // 6月

    let months = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    if (months < 0) months = 0;

    return months;
}