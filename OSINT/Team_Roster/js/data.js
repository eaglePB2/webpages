"use strict";

const content = [{
  title: '冰焰蔷薇 IFR',
  description: '這裡是一個理念歸屬，可以自由發揮他/她的意願，追求自己的夢想。',
  keywords: ['Ice Flame Rose', '幻月狼(團長) ', '鉛筆不小心', '夜雨', '星塵', '飄仔', '爵森', '雪奈ゆきなSnow', '鮪魚(幕後)', '小A(幕後)'],
  preview: 'rosters/IFR.jpg'
}, {
  title: '科技學院 UST',
  description: '對於每個人而言都有自己想追尋的目標，這裡有著能創造夢想的種子，只要相信自己的信念莫忘初衷就一定能實現',
  keywords: ['吸血兔 ． 曉瑀 ． 德古拉', '休比醬(霜霜)', '月塊', '月下雪見櫻  (NOCH)', '墨綠', '凜雪', '冰洋', '阿尾'],
  preview: 'rosters/UST.jpg'
}, {
  title: 'Psycho Girl',
  description: '精神病搞起来！',
  keywords: ['病人Shinoa', '饼干Biscut', 'ZhanMie', 'JinBao', 'SoloLee', '5$', 'KenjiYiu'],
  preview: 'rosters/PSG.jpg'
}, {
  title: 'Vortex',
  description: 'Return to us. Our mission has yet to be completed.',
  keywords: [],
  preview: 'rosters/Vortex.png'
}, {
  title: 'The Earth',
  description: 'Earth is Amazing. As always.',
  keywords: [],
  preview: 'rosters/Earth.png'
}, {
  title: 'Imagination Overflow Team',
  description: 'N\'hésité pas a regarder les vidéos de nos membres et pourquoi pas, rejoindre le forum et progresser avec nous ! :)',
  keywords: ['Deathflag','Alexielios','YU-KUN','Amariyo','Azazel'],
  preview: 'rosters/IOT.jpg'
}, {
  title: '迷途麻糬 LMC',
  description: 'Blonde wavy hair amongst a leafy-green backdrop.',
  keywords: ['Lose Machi.Live', 'DoubleCheese', '小鼠', '阿熊', '阿月'],
  preview: 'rosters/LMC.jpg'
}, {
  title: '呼吸冷空气 BCA',
  description: '大家好歡迎來到呼吸冷空氣Breath Cold Air。我們是一群熱愛minecraft的團隊,如果喜歡我們的話可以去幫我們按一個讚哦～',
  keywords: ['Breath COld Air', '洛基','寂靜','黑貓','小Yu','橘橘','隱士','月櫻','熱狗','哀油'],
  preview: 'rosters/BCA.png'
}, {
  title: '翼想遙‧村',
  description: '五個擁有愚蠢念頭的孩子，將開創屬於彼此的篇章。 「要是，我們能有著雙翼，就能像小鳥一般自由的飛翔呢────」',
  keywords: ['FlyingDream', '佐耶(艾芋)', '釉央', '彌夜', '塔伊', '米秋', '錒鬼', '米果', '薯條', '奈奈', '樂音', '夏羽'],
  preview: 'rosters/FD.png'
}, {
  title: '御飯橘子 OWIS',
  description: '歡迎來到御飯橘子工作室！我們是來自台灣的小小實況團隊，名氣雖然不高，但我們對於遊戲實況和各種創作滿腔熱枕。',
  keywords: ['宇醬 Owen', '艾芋 Weidi', '奶昔 Milk Shake', '彌夜', '小宣嵐', '切西瓜', 'Tuna賤人', '布丁麻吉', '天羽', '蜂恩 Ien', '塔伊 Sumeng', '米糖 Mitang', '釉央 You Yang', '洨奈 Shiau Nai', '樂音 Le Yin', '砂神 Jih Hsiang Yi', '小沐 Little Mu'],
  preview: 'rosters/OWIS.png'
}, {
  title: '夏洛特　シャルロッテ',
  description: '我們是個實況團體～ 若有做的不好的地方請協助我們改進ｗｗ',
  keywords: ['寒','紫莘','まれな','吹雪嵐','希煥','炎夏','小J','紫包','阿玥'],
  preview: 'rosters/Charlotte.png'
}, {
  title: '魂夜之霜 SNC',
  description: '哈囉大家好，我們是S.N.C魂夜之霜。歡迎來到我們的家庭，這裡會放一些和別團多人合作的影片or全團的團聚.活動等，敬請期待OwO',
  keywords: ['Secluded sNow studio','幽雪Yosha','霜夜Souya','冰塊Ice Craft','雪人Shannon','狼鬼ghostwolf','呆毛Diamond','細菌Alex','布丁Pudding','寒月茗'],
  preview: 'rosters/SNC.jpg'
}, {
  title: '惡冰魔雨 ANZ',
  description: '“這個團體並沒有保留任何的簡介……”',
  keywords: ['欣音Shining','狼鬼Ghostwolf','霜夜Souya'],
  preview: 'rosters/ANZ.png'
}, {
  title: '魔物生怪磚',
  description: '魔物生怪磚是5年前的一個實況團體 ，現在我讓它復活了。雖然亞修、亞比、拔剌都不再了，但還是有覆蓋ㄛ_(:3」∠)_',
  keywords: ['Monster Spawner','覆盖','亞修','亞比','拔剌','沁風 翼','馬哈'],
  preview: 'rosters/MS.png'
}, {
  title: '夜貓嵐玥',
  description: '按下游戏，开始我们的奇妙旅程～',
  keywords: ['☆NightCat☆','小枫','佳佳','俊峰','江','智'],
  preview: 'rosters/NC.png'
}, {
  title: '藍櫻遊戲團隊',
  description: '“這個團體並沒有保留任何的簡介……”',
  keywords: ['BlueSakura Game Team','消遣','靈靈','水流','哞','樹仔','木材','虛吧','ERO','MUJO'],
  preview: 'rosters/BSGT.png'
}, {
  title: 'Kaguya Studio',
  description: '已知現象：活躍於steam的幻想鄉，台灣分支，是2005年就已經活躍的實況團隊？',
  keywords: ['Kaguya Studio','日向綾','望月梢（願晴‧雨希‧望月稍）'],
  preview: 'rosters/KS.png'
}, {
  title: 'Horoscopegaming - HRP',
  description: 'We are from Horoscopegaming!!!We will try post something in this page,Thx for like&share~~',
  keywords: ['Horoscopegaming','MELVIN QAQ','紫邪 bruselim','7RDX⍟伟正','days7389'],
  preview: 'rosters/HRP.png'
}, {
  title: 'WTOS實況團隊',
  description: '大家好，我們是WTOS實況團隊，我是團長晨夏（原名：月琉璃）我們是超級輕鬆的團隊，只要你能夠大家好好相處，我們歡迎你/妳的加入',
  keywords: ['WanTonly OccaSion .Studio','晨夏（月琉璃）','票風','語雷','楓葉','阿祖','語雷','楓葉','阿祖','嵐','軍師','冥','迪芯','未來','云朵','嵐凝','罪風','夢奈','抹茶','憂樂','神羽','蛇','黑凜','喵鵝','莉亞','亦亞','櫻太','日映','伊寒','蔥'],
  preview: 'rosters/WTOS.png'
}, {
  title: '萩露家族',
  description: '歡迎來到萩露家族，這裡是來自 FB 的製圖朋友。 以下是我們大力推薦的製圖好專頁們 //',
  keywords: ['SyuuRo','⊰ 空白筆記本 ⊱','玫蜜 ✪ Asami','小孩子 ✪ Child','鬼樱','幽語 ✪ Yuka'],
  preview: 'rosters/SRO.png'
}, {
  title: '唐雨工作室 DRS',
  description: '嘿！大家好，歡迎來到唐雨工作室！我們製作各式各樣的遊戲影片，涵蓋了?',
  keywords: ['Don rain Studio','零影','蜜蜂','放肆','濃湯','貓耳','小蓁','凡哥','史蒂夫','藤堂優'],
  preview: 'rosters/DRS.png'
}, {
  title: '这是模板',
  description: '这模板是用来记录老鹰考古过的已解散团体，顺便怀念一下时代的感伤。',
  keywords: ['考古系列'],
  preview: 'rosters/'
}];

function render() {
  let root = document.getElementById('root');
  let i, x = 0
  for (i = 0; i < content.length; i++) {
    let keywords = '';

    for (x = 0; x < content[i].keywords.length; x++) {
      keywords += `
        <a href="#" class="keyword">
          - ${content[i].keywords[x]}
        </a>
        `;
    }

    root.innerHTML += `
      <div class="item">
        <span class="title">
          ${content[i].title}
        </span>

        <span class="description">
          ${content[i].description}
        </span>

        <div class="image"
          style="background-image: url(${content[i].preview}?auto=compress&cs=tinysrgb&dpr=2&h=190&w=260)">
        </div>

        <span class="keywords">
          ${keywords}
        </span>
      </div>
    `;
  }
}

render();
