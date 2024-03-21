
// 假設的資料
var wine_varieties = [
    'Abouriou(阿布麗由)',
    'Aglianico(阿里安尼科)',
    'Airén(艾聯)',
    'Albana(阿巴納)',
    'Albariño(阿爾巴利諾)',
    'Baga(巴格)',
    'Barbarossa(巴巴羅莎)',
    'Barbera(巴貝拉)',
    'Black Muscat(漢堡蜜思嘉)',
    'Bobal(博巴爾)',
    'Cabernet(卡本內)',
    'Cabernet Franc(卡本內弗朗)',
    'Cabernet Sauvignon(卡本內蘇維濃)',
    'Camaralet(卡馬赫雷)',
    'Cannonau(格那希)',
    'Chardonnay(夏多內)',
    'Chasselas(夏思拉)',
    'Chenin Blanc(白梢楠)',
    'Champagne Blend(香檳調配品種)',
    'Dolcetto(多切托)',
    'Encruzado(安庫撒多)',
    'Fer(費爾)',
    'Fiano(費安諾)',
    'Frappato(法帕多)',
    'Freisa(弗雷莎)',
    'Friulano(弗里烏拉諾)',
    'Furmint(弗明)',
    'Gamay(加美)',
    'Gamay Beaujolais(Gamay Beaujolais)',
    'Garnacha(格那希)',
    'Garnacha Blanca(白格那希)',
    'Garnacha Tintorera(格那希丁朵蕾拉)',
    'Gewürztraminer(格烏茲塔明那)',
    'Gros Plant(大普隆)',
    'Hárslevelű(Harslevelu)',
    'Hondarrabi(Hondarrabi)',
    'Huxelrebe(Huxelrebe)',
    'Incrocio(Incrocio)',
    'Inzolia(Inzolia)',
    'Jacpuère(Jacpuere)',
    'Jaen(Jaen)',
    'Kadarka(Kadarka)',
    'Kerner(克納)',
    'Koshu(甲州)',
    'Kai Blanc(甲斐)',
    'Lambrusco(拉布魯斯柯)',
    'Lladoner-Pelut(央多內–伯律)',
    'Macabeo(馬卡貝歐)',
    'Malbec(馬爾貝克)',
    'Malvasia(馬勒瓦西亞)',
    'Merlot(梅洛)',
    'Merlot Branc(白梅洛)',
    'Moscatel(蜜思嘉)',
    'Moscato(蜜思嘉)',
    'Muscat(蜜思嘉)',
    'Musann Blanc(木杉)',
    'Nebbiolo(內比歐露)',
    'Negroamaro(黑曼羅)',
    'Orange Muscat(橙花蜜思嘉)',
    'Palomino(巴婁米諾)',
    'Petit Manseng(小蒙仙)',
    'Petit Verdot(小維鐸)',
    'Petite Sirah(小希哈)',
    'Pinot(Pinot)',
    'Pinot Beurot(灰皮諾)',
    'Pinot Bianco(白皮諾)',
    'Pinot Blanc(白皮諾)',
    'Pinot Gris(灰皮諾)',
    'Pinot Noir(黑皮諾)',
    'Raboso(Raboso)',
    'Riesling(麗絲玲)',
    'Rhône Blend(隆河調配品種)',
    'Sangiovese(山吉歐維榭)',
    'Sauvignon Blanc(白蘇維濃)',
    'Sémillon(榭密雍)',
    'Shiraz(希哈)',
    'Syrah(希哈)',
    'Tannat(塔那)',
    'Tempranillo(田帕尼優)',
    'Tinta Barroca(巴羅卡)',
    'Ugni Blanc(白于尼)',
    'Vaccarèse(瓦卡黑斯)',
    'Verdejo(維岱荷)',
    'Weisser Riesling(Weisser Riesling)',
    'Xarel-lo(薩雷羅)',
    'Yama Sauvignon(Yama Sauvignon)',
    'Zinfandel(金芬黛)',
    'Malvasia nera(黑馬瓦西亞)',
    'こうしゅう(甲州)',
];
var wine_classification = [
    '法定產區管制AC',
    '保證法定產區DOCG',
    '美國葡萄酒法定產區AVA',
    '紐澳產區分級GI',
    '法定產區DOC'
]
    
// 儲存初始資料
// 複製一份資料以供搜尋時使用
var wine_varieties_original = wine_varieties.slice();

// 初始化時顯示所有資料
displayData(wine_varieties_original);

// 顯示所有資料的函式
function displayData(wine_varieties) {
    var searchResults = $("#searchResults");
    searchResults.empty(); // 清空之前的列表
    var searchResultsShow = $("#searchResultsShow");

    // 顯示所有資料
    $.each(wine_varieties, function(index, value) {
        var paddedIndex = pad(index, 3); // 將索引填充為三位數
        var item_label_html = '<li><label class="catalogue__filterPanel__item" title="' + value + '">' + value + '<span class="catalogue__filterPanel__itemNumber">(' + (index + 1) + ')</span><input type="checkbox" id="grape-varieties-' + paddedIndex + '" value="' + value + '"></label></li>';
        searchResultsShow.append(item_label_html);
        var item_input_html = '<li><label for="grape-varieties-' + paddedIndex + '" title="' + value + '">' + value + '<span class="catalogue__filterPanel__itemNumber">(' + (index + 1) + ')</span></label></li>';
        searchResults.append(item_input_html);
    });
}

// 搜尋功能的函式
function search() {
    var searchTerm = $("#searchInput").val();

    // 隱藏所有項目
    $("#searchResults li").hide();

    // 尋找符合搜尋條件的項目，並顯示它們
    $("#searchResults li:contains(" + searchTerm + ")").show();

    // 如果沒有符合條件的項目，顯示提示訊息
    if ($("#searchResults li:visible").length === 0) {
        $("#searchResults").html("<li>找不到符合條件的項目</li>");
    }
}

// 點擊搜尋按鈕時觸發搜尋函式
$("#searchButton").click(function() {
    search();
});

// 當搜尋框的內容變更時觸發搜尋函式
$("#searchInput").on("input", function() {
    var searchTerm = $(this).val();
    if (searchTerm === "") {
        displayData(wine_varieties); // 如果搜尋框為空，重新顯示所有資料
    } else {
        search(); // 否則執行搜尋功能
    }
});

// 將數字填充為指定長度的字串
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}