const itinerary = [
  {
    day: "Day 1",
    date: "6/13（六）",
    title: "抵達東京、新宿入住",
    schedule: [
      {
        time: "14:30-19:00",
        title: "CI108｜台北桃園 TPE → 東京成田 NRT",
        detail: "抵達後前往新宿／大久保住宿。",
      },
      {
        time: "19:00-21:00",
        title: "入境、領行李、成田 → 新宿／大久保",
        detail: "抵達日以交通與入住為主，保留緩衝。",
      },
      {
        time: "21:00 後",
        title: "東京 Airbnb 前半段入住",
        detail: "自助入住，住宿資訊見下方住宿卡。",
        map: "https://maps.google.com/maps?daddr=169-0072%2C+T%C5%8Dky%C5%8D-to%2C+Shinjuku+City%2C+1-ch%C5%8Dme-11-21+%C5%8Ckubo%2C+Japan",
      },
      {
        time: "彈性",
        title: "新宿宵夜",
        detail: "若有體力可去回憶橫丁或新宿二丁目。",
      },
    ],
    note:
      "抵達日以入境、交通、入住為主；若有體力可去回憶橫丁或新宿二丁目。",
  },
  {
    day: "Day 2",
    date: "6/14（日）",
    title: "豪德寺、下北澤、澀谷",
    schedule: [
      {
        time: "09:30-11:00",
        title: "豪德寺",
        detail: "世田谷線可考慮買一日券。",
        map: "https://www.google.com/maps/search/?api=1&query=%E8%B1%AA%E5%BE%B3%E5%AF%BA%20%E8%B1%AA%E5%BE%B3%E5%AF%BA",
      },
      {
        time: "11:30-15:00",
        title: "下北澤午餐／古著／咖啡",
        detail: "店家多 11:00 或 12:00 後較完整。",
        map: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa",
      },
      {
        time: "16:00-18:30",
        title: "澀谷十字路口／PARCO／Bic Camera",
        detail: "依體力選 1-2 個點，不要排太滿。",
        map: "https://www.google.com/maps/search/?api=1&query=Shibuya%20PARCO",
      },
      {
        time: "傍晚或夜間",
        title: "SHIBUYA SKY 或澀谷／新宿晚餐",
        detail: "SHIBUYA SKY 依天氣與票況決定。",
        map: "https://www.google.com/maps/search/?api=1&query=SHIBUYA%20SKY",
      },
    ],
    note: "澀谷晚間不要排太滿；SHIBUYA SKY 依天氣與票況決定。",
  },
  {
    day: "Day 3",
    date: "6/15（一）",
    title: "淺草浴衣、築地、東京鐵塔",
    schedule: [
      {
        time: "09:30-11:30",
        title: "淺草浴衣體驗",
        detail: "浴衣需提前預約；上午租借比較好拍。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%B7%BA%E8%8D%89%20%E6%B5%B4%E8%A1%A3%E4%BD%93%E9%A8%93",
      },
      {
        time: "12:00-13:00",
        title: "淺草寺／雷門／仲見世通",
        detail: "中午人潮多，抓重點拍。",
        map: "https://www.google.com/maps/search/?api=1&query=Sensoji+Temple",
      },
      {
        time: "13:30-15:00",
        title: "築地場外市場",
        detail: "築地不要太晚到，海鮮與小吃選擇會變少。",
        map: "https://www.google.com/maps/search/?api=1&query=%E7%AF%89%E5%9C%B0%E5%A0%B4%E5%A4%96%E5%B8%82%E5%A0%B4",
      },
      {
        time: "16:00-18:00",
        title: "增上寺／芝公園／東京鐵塔",
        detail: "東京鐵塔以外拍為主即可。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%90%B5%E5%A1%94",
      },
      {
        time: "晚餐",
        title: "銀座／有樂町或麻布台 Hills",
        detail: "視體力與天氣彈性選擇。",
      },
    ],
    note: "浴衣需提前預約；築地不要太晚到；東京鐵塔以外拍為主即可。",
  },
  {
    day: "Day 4",
    date: "6/16（二）",
    title: "富士吉田拍照、忍野八海、河口湖入住",
    schedule: [
      {
        time: "早上",
        title: "新宿 → 下吉田／富士吉田",
        detail: "景點分散，交通請另抓緩衝。",
      },
      {
        time: "10:00-12:00",
        title: "新倉山淺間公園／忠靈塔",
        detail: "富士山＋五重塔經典取景地。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92%20%E5%BF%A0%E9%9D%88%E5%A1%94",
      },
      {
        time: "12:00-13:30",
        title: "日川時計店／富士吉田街景",
        detail: "手機 2x/3x 或長焦更容易拍出富士山壓縮感。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E5%B7%9D%E6%99%82%E8%A8%88%E5%BA%97",
      },
      {
        time: "14:00-16:00",
        title: "忍野八海",
        detail: "建議避開太晚，保留回河口湖交通時間。",
        map: "https://www.google.com/maps/search/?api=1&query=Oshino%20Hakkai",
      },
      {
        time: "17:00-18:00",
        title: "有信旅館入住｜Yushin",
        detail: "18:00 前需領鑰匙。",
        map: "https://www.google.com/maps/search/?api=1&query=Yushin%20Kawaguchiko",
      },
    ],
    note: "景點分散，交通另抓緩衝；18:00 前需完成有信旅館領鑰匙。",
  },
  {
    day: "Day 5",
    date: "6/17（三）",
    title: "河口湖清晨、遙拜所、回東京",
    schedule: [
      {
        time: "清晨",
        title: "逆富士／大石公園或湖邊晨景",
        detail: "逆富士建議清晨，視天氣與能見度調整。",
        map: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E7%9F%B3%E5%85%AC%E5%9C%92%20%E6%B2%B3%E5%8F%A3%E6%B9%96",
      },
      {
        time: "上午",
        title: "河口淺間神社遙拜所／天空鳥居",
        detail: "建議確認計程車上下山，不要排太晚。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B7%BA%E9%96%93%E7%A5%9E%E7%A4%BE%20%E9%81%99%E6%8B%9D%E6%89%80",
      },
      {
        time: "中午前後",
        title: "河口湖站周邊／LAWSON 備選",
        detail: "依天氣與交通狀況加減。",
      },
      {
        time: "下午",
        title: "河口湖 → 東京／新宿",
        detail: "回東京後不要再排遠點。",
      },
      {
        time: "15:00 後",
        title: "東京 Airbnb 後半段入住／放行李",
        detail: "入住前需完成線上入住登記，當天約 11:00 提供密碼鎖密碼。",
        map: "https://maps.google.com/maps?daddr=35.7003557,139.704871",
      },
      {
        time: "晚上",
        title: "新宿自由活動",
        detail: "太累就直接回住宿休息。",
      },
    ],
    note:
      "逆富士建議清晨；遙拜所建議確認計程車上下山；下午回東京後不要再排遠點。",
  },
  {
    day: "Day 6",
    date: "6/18（四）",
    title: "鎌倉古都、江之電、七里ヶ浜夕陽",
    schedule: [
      {
        time: "08:00-09:30",
        title: "新宿 → 鎌倉",
        detail: "鎌倉一日遊的交通起點，建議早點出發。",
      },
      {
        time: "10:00-11:30",
        title: "鶴岡八幡宮",
        detail: "若明月院人潮耗時，可視情況取捨。",
        map: "https://www.google.com/maps/search/?api=1&query=鶴岡八幡宮",
      },
      {
        time: "11:30-13:00",
        title: "小町通午餐",
        detail: "各店約 10:00-18:00，午餐尖峰要抓排隊時間。",
        map: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%BA%E9%80%9A%E3%82%8A",
      },
      {
        time: "13:30-14:30",
        title: "高德院（鎌倉大佛）",
        detail: "可只外拍或略過胎內參觀。",
        map: "https://www.google.com/maps/search/?api=1&query=高德院+鎌倉大佛",
      },
      {
        time: "14:30-15:30",
        title: "長谷寺",
        detail: "繡球花季熱門，排隊過久就與高德院二選一。",
        map: "https://www.google.com/maps/search/?api=1&query=長谷寺+鎌倉",
      },
      {
        time: "16:00-17:00",
        title: "Windera Cafe 七里ヶ浜店",
        detail: "七里ヶ浜站步行約 3 分鐘。",
        map: "https://www.google.com/maps/search/?api=1&query=Windera%20Cafe%20%E4%B8%83%E9%87%8C%E3%83%B6%E6%B5%9C%E5%BA%97",
      },
      {
        time: "17:30 前後",
        title: "七里ヶ浜海岸夕陽 → 回東京",
        detail: "夕陽前不要把高校前排太晚。",
      },
    ],
    note: "17:30 前後建議抵達七里ヶ浜一帶；夕陽前不要把高校前排太晚。",
  },
  {
    day: "Day 7",
    date: "6/19（五）",
    title: "Outlet 購物日",
    schedule: [
      {
        time: "上午",
        title: "東京／新宿 → 木更津",
        detail: "建議搭高速巴士，車程約 50-60 分鐘，末班先確認。",
      },
      {
        time: "11:00-15:00",
        title: "三井 Outlet Park 木更津",
        detail: "預留購物、用餐、退稅時間。",
        map: "https://www.google.com/maps/search/?api=1&query=MITSUI%20OUTLET%20PARK%20KISARAZU",
      },
      {
        time: "傍晚",
        title: "回東京",
        detail: "最後 60-90 分鐘開始收尾、結帳與退稅。",
      },
      {
        time: "晚上",
        title: "新宿晚餐／歌舞伎町散步",
        detail: "依購物日疲勞度調整。",
      },
    ],
    note: "購物日記得帶護照辦理免稅；回程時間與交通末班先確認。",
  },
  {
    day: "Day 8",
    date: "6/20（六）",
    title: "退房、前往成田、回台灣",
    schedule: [
      {
        time: "11:00 前",
        title: "東京 Airbnb 後半段退房",
        detail: "住宿資料庫：退房 11:00 前。",
      },
      {
        time: "上午",
        title: "新宿／東京車站寄物或簡單補買",
        detail: "回程日以交通安全為主，不要塞太滿。",
        map: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E8%BB%8A%E7%AB%99%20%E4%B8%B8%E4%B9%8B%E5%85%A7",
      },
      {
        time: "14:30-17:15",
        title: "CI101｜東京成田 NRT → 台北桃園 TPE",
        detail: "建議至少起飛前 2.5-3 小時抵達機場。",
      },
    ],
    note: "回程日以交通安全為主，建議至少起飛前 2.5-3 小時抵達機場。",
  },
];

const alerts = [
  {
    title: "浴衣體驗",
    body: "安排在淺草，上午租借最順；雷門、仲見世通、淺草寺、隅田川與晴空塔遠景都可同線拍攝。",
  },
  {
    title: "繡球花季",
    body: "6/18 鎌倉以明月院為主角，長谷寺與高德院順路；花季人潮多，江之島只作體力備選。",
  },
  {
    title: "河口湖住宿",
    body: "6/16 有信旅館入住時間 15:00-18:00，下午請保留交通與入住緩衝。",
  },
];

const places = [
  {
    name: "豪德寺",
    day: "Day 2",
    area: "世田谷",
    type: "寺社",
    note: "招財貓、住宅區散步，適合接下北澤慢逛。",
    map: "https://www.google.com/maps/search/?api=1&query=%E8%B1%AA%E5%BE%B7%E5%AF%BA",
  },
  {
    name: "下北澤",
    day: "Day 2",
    area: "世田谷",
    type: "街區",
    note: "古著、小店、咖啡、生活感街拍；建議停留 3-4 小時。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%8C%97%E6%B2%A2",
  },
  {
    name: "澀谷 PARCO",
    day: "Day 2",
    area: "澀谷",
    type: "百貨",
    note: "任天堂東京、角色商品、潮流品牌，晚間視體力和人潮安排。",
    map: "https://www.google.com/maps/search/?api=1&query=Shibuya%20PARCO",
  },
  {
    name: "SHIBUYA SKY",
    day: "Day 2",
    area: "澀谷",
    type: "景觀",
    note: "視天氣與票況決定；夕陽時段需提前購票。",
    map: "https://www.google.com/maps/search/?api=1&query=SHIBUYA%20SKY",
    web: "https://www.shibuya-scramble-square.com/sky/",
  },
  {
    name: "淺草浴衣體驗",
    day: "Day 3",
    area: "淺草",
    type: "體驗",
    note: "建議預約淺草站或雷門附近店家，上午租借拍照最完整。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B7%BA%E8%8D%89%20%E6%B5%B4%E8%A1%A3%E4%BD%93%E9%A8%93",
  },
  {
    name: "淺草寺",
    day: "Day 3",
    area: "台東",
    type: "寺社",
    note: "雷門、仲見世通、寶藏門、本堂與五重塔可串成 1.5-2 小時經典線。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B7%BA%E8%8D%89%E5%AF%BA",
  },
  {
    name: "築地場外市場",
    day: "Day 3",
    area: "築地",
    type: "市場",
    note: "早餐與海鮮小吃，太晚到選擇會變少。",
    map: "https://www.google.com/maps/search/?api=1&query=%E7%AF%89%E5%9C%B0%E5%A0%B4%E5%A4%96%E5%B8%82%E5%A0%B4",
  },
  {
    name: "東京鐵塔",
    day: "Day 3",
    area: "港區",
    type: "景觀",
    note: "增上寺與芝公園外拍為主；晚餐可接銀座、六本木或麻布台。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%90%B5%E5%A1%94",
  },
  {
    name: "新倉山淺間公園",
    day: "Day 4",
    area: "富士吉田",
    type: "景觀",
    note: "忠靈塔、富士山與五重塔經典視角；下吉田站步行約 20 分鐘。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B7%BA%E9%96%93%E5%85%AC%E5%9C%92",
  },
  {
    name: "日川時計店",
    day: "Day 4",
    area: "富士吉田",
    type: "拍照",
    note: "街道盡頭富士山構圖，手機 2x/3x 或長焦更容易壓縮景深。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E5%B7%9D%E6%99%82%E8%A8%88%E5%BA%97",
  },
  {
    name: "忍野八海",
    day: "Day 4",
    area: "山梨",
    type: "自然",
    note: "富士山伏流水形成的湧泉池群，適合 1.5-2 小時散步拍照。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%BF%8D%E9%87%8E%E5%85%AB%E6%B5%B7",
  },
  {
    name: "有信旅館入住",
    day: "Day 4",
    area: "河口湖",
    type: "住宿",
    note: "入住 15:00-18:00，需 18:00 前領鑰匙。",
    map: "https://www.google.com/maps/search/?api=1&query=Yushin%20Kawaguchiko",
  },
  {
    name: "大石公園",
    day: "Day 5",
    area: "河口湖",
    type: "自然",
    note: "清晨湖景、花田與富士山。6 月中下旬到 7 月上旬常見花季景觀。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E7%9F%B3%E5%85%AC%E5%9C%92%20%E6%B2%B3%E5%8F%A3%E6%B9%96",
  },
  {
    name: "河口淺間神社遙拜所",
    day: "Day 5",
    area: "河口湖",
    type: "寺社",
    note: "天空鳥居視角；建議確認計程車上下山，避免排太晚。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B7%BA%E9%96%93%E7%A5%9E%E7%A4%BE%20%E9%81%99%E6%8B%9D%E6%89%80",
  },
  {
    name: "LAWSON 富士河口湖町役場前店",
    day: "Day 5",
    area: "河口湖",
    type: "拍照",
    note: "富士山與便利商店構圖備選，現場請留意人流與拍照規範。",
    map: "https://www.google.com/maps/search/?api=1&query=LAWSON%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E7%94%BA%E5%BD%B9%E5%A0%B4%E5%89%8D",
  },
  {
    name: "明月院",
    day: "Day 6",
    area: "鎌倉",
    type: "寺社",
    note: "鎌倉繡球花主角，6 月人潮多；花季門票較高。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%98%8E%E6%9C%88%E9%99%A2",
  },
  {
    name: "鶴岡八幡宮",
    day: "Day 6",
    area: "鎌倉",
    type: "寺社",
    note: "鎌倉古都代表景點，可接小町通午餐。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%B6%B4%E5%B2%A1%E5%85%AB%E5%B9%A1%E5%AE%AE",
  },
  {
    name: "高德院鎌倉大佛",
    day: "Day 6",
    area: "鎌倉",
    type: "寺社",
    note: "鎌倉代表大佛，與長谷寺順路。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%BE%B7%E9%99%A2%20%E9%8E%8C%E5%80%89%E5%A4%A7%E4%BD%9B",
  },
  {
    name: "長谷寺",
    day: "Day 6",
    area: "鎌倉",
    type: "寺社",
    note: "繡球花、海景與寺院散步，6 月需預留排隊時間。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%AF%BA%20%E9%8E%8C%E5%80%89",
  },
  {
    name: "Windera Cafe 七里ヶ浜店",
    day: "Day 6",
    area: "湘南",
    type: "美食",
    note: "海景用餐與夕陽收尾，建議 17:30 前後抵達七里ヶ浜。",
    map: "https://www.google.com/maps/search/?api=1&query=Windera%20Cafe%20%E4%B8%83%E9%87%8C%E3%83%B6%E6%B5%9C",
  },
  {
    name: "三井 Outlet Park 木更津",
    day: "Day 7",
    area: "木更津",
    type: "購物",
    note: "重度購物 4-6 小時；記得帶護照辦免稅，回程交通先確認。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E4%BA%95%20Outlet%20Park%20%E6%9C%A8%E6%9B%B4%E6%B4%A5",
    web: "https://mitsui-shopping-park.com/mop/kisarazu/",
  },
  {
    name: "東京車站／丸之內",
    day: "Day 8",
    area: "東京站",
    type: "交通",
    note: "回程日可寄物、補買伴手禮、拍紅磚站舍；不要塞太滿。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E8%BB%8A%E7%AB%99%20%E4%B8%B8%E4%B9%8B%E5%85%A7",
  },
  {
    name: "澀谷 Hikarie",
    day: "備選",
    area: "澀谷",
    type: "百貨",
    note: "雨天或炎熱日的室內逛街備案，也可作澀谷晚餐收尾。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%BE%80%E8%B0%B7%20Hikarie",
  },
  {
    name: "忠犬八公銅像",
    day: "備選",
    area: "澀谷",
    type: "拍照",
    note: "澀谷站前快閃拍照點，早上或平日白天畫面較乾淨。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%BF%A0%E7%8A%AC%E5%85%AB%E5%85%AC%E9%8A%85%E5%83%8F",
  },
  {
    name: "Bic Camera 澀谷東口 本館",
    day: "備選",
    area: "澀谷",
    type: "購物",
    note: "電器、相機配件、美容家電與日用品補貨點，澀谷站東口步行約 2 分鐘。",
    map: "https://www.google.com/maps/search/?api=1&query=Bic%20Camera%20%E6%BE%80%E8%B0%B7%E6%9D%B1%E5%8F%A3%20%E6%9C%AC%E9%A4%A8",
  },
  {
    name: "仲見世通",
    day: "備選",
    area: "淺草",
    type: "街區",
    note: "雷門到淺草寺的經典老街，伴手禮與和菓子小吃集中。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%BB%B2%E8%A6%8B%E4%B8%96%E9%80%9A",
  },
  {
    name: "新宿二丁目",
    day: "備選",
    area: "新宿",
    type: "夜生活",
    note: "新宿夜生活備選，適合晚餐後依體力安排 1-2 間酒吧或餐酒館。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%AE%BF%E4%BA%8C%E4%B8%81%E7%9B%AE",
  },
  {
    name: "麻布台 Hills／六本木晚餐備選",
    day: "備選",
    area: "六本木",
    type: "美食",
    note: "成熟城市感晚餐與夜景備選，可接東京鐵塔或六本木。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%BA%BB%E5%B8%83%E5%8F%B0%20Hills%20%E5%85%AD%E6%9C%AC%E6%9C%A8",
  },
  {
    name: "GINZA SIX",
    day: "備選",
    area: "銀座",
    type: "百貨",
    note: "銀座大型地標商場，雨天室內逛街、晚餐與屋頂花園備選。",
    map: "https://www.google.com/maps/search/?api=1&query=GINZA%20SIX",
    web: "https://ginza6.tokyo/",
  },
  {
    name: "銀座",
    day: "備選",
    area: "銀座",
    type: "街區",
    note: "精品百貨、成熟商圈與精緻餐飲，適合晚上補成熟東京感。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%8A%80%E5%BA%A7",
  },
  {
    name: "上野恩賜公園",
    day: "備選",
    area: "上野",
    type: "公園",
    note: "公園、博物館、美術館集中；雨天可把重心轉到館內。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E9%87%8E%E6%81%A9%E8%B3%9C%E5%85%AC%E5%9C%92",
  },
  {
    name: "阿美橫丁",
    day: "備選",
    area: "上野",
    type: "市場",
    note: "庶民感商店街與小吃補貨點，可從上野一路逛到御徒町。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E7%BE%8E%E6%A9%AB%E4%B8%81",
  },
  {
    name: "東照宮（上野）",
    day: "備選",
    area: "上野",
    type: "寺社",
    note: "上野公園內的金色神社，雨天也有不錯的建築氛圍。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E9%87%8E%E6%9D%B1%E7%85%A7%E5%AE%AE",
  },
  {
    name: "池袋陽光水族館",
    day: "備選",
    area: "池袋",
    type: "室內",
    note: "雨天、親子或情侶備案，可順逛 Sunshine City。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B1%A0%E8%A2%8B%E9%99%BD%E5%85%89%E6%B0%B4%E6%97%8F%E9%A4%A8",
  },
  {
    name: "原宿",
    day: "備選",
    area: "原宿",
    type: "街區",
    note: "竹下通、街頭流行與甜點小店，可與明治神宮、表參道串連。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%8E%9F%E5%AE%BF",
  },
  {
    name: "表參道",
    day: "備選",
    area: "表參道",
    type: "街區",
    note: "林蔭大道、精品、設計感建築與咖啡，適合質感散步。",
    map: "https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%83%E9%81%93",
  },
  {
    name: "明治神宮",
    day: "備選",
    area: "原宿",
    type: "寺社",
    note: "城市森林與神社散步，可接代代木公園或表參道。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE",
  },
  {
    name: "明治神宮御苑（菖蒲花）",
    day: "備選",
    area: "原宿",
    type: "花季",
    note: "6 月菖蒲花備選，可與明治神宮本殿、表參道同線安排。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E5%BE%A1%E8%8B%91",
  },
  {
    name: "代代木公園",
    day: "備選",
    area: "代代木",
    type: "公園",
    note: "明治神宮後的散步或市集備選，也可步行接澀谷。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%BB%A3%E4%BB%A3%E6%9C%A8%E5%85%AC%E5%9C%92",
  },
  {
    name: "中目黑（目黑川散策）",
    day: "備選",
    area: "中目黑",
    type: "街區",
    note: "6 月新綠、咖啡與選物街區，可替代原宿表參道慢逛。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E7%9B%AE%E9%BB%91%20%E7%9B%AE%E9%BB%91%E5%B7%9D",
  },
  {
    name: "代官山",
    day: "備選",
    area: "代官山",
    type: "街區",
    note: "高級住宅區、蔦屋書店與選物小店，適合慢步調散步。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%BB%A3%E5%AE%98%E5%B1%B1",
  },
  {
    name: "小石川後樂園（菖蒲花）",
    day: "備選",
    area: "文京",
    type: "花季",
    note: "6 月花菖蒲備選，歷史庭園氛圍安靜。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%9F%B3%E5%B7%9D%E5%BE%8C%E6%A8%82%E5%9C%92",
  },
  {
    name: "白山神社（繡球花名所）",
    day: "備選",
    area: "文京",
    type: "花季",
    note: "東京市區繡球花備案，可搭配白山公園與富士塚。",
    map: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E5%B1%B1%E7%A5%9E%E7%A4%BE%20%E7%B9%A1%E7%90%83%E8%8A%B1",
  },
  {
    name: "文京繡球花祭",
    day: "備選",
    area: "文京",
    type: "花季",
    note: "6 月上旬至中旬常見花季活動，若鎌倉太滿可作市區替代。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%96%87%E4%BA%AC%E3%81%82%E3%81%98%E3%81%95%E3%81%84%E3%81%BE%E3%81%A4%E3%82%8A",
  },
  {
    name: "飛鳥山公園（繡球花／單軌電車）",
    day: "備選",
    area: "北區",
    type: "花季",
    note: "繡球花、單軌電車與博物館三館，適合知性散步備選。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%A3%9B%E9%B3%A5%E5%B1%B1%E5%85%AC%E5%9C%92",
  },
  {
    name: "高幡不動尊金剛寺（繡球花）",
    day: "備選",
    area: "多摩",
    type: "花季",
    note: "繡球花與寺院散步，可順遊多摩動物公園或京王百草園。",
    map: "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E5%B9%A1%E4%B8%8D%E5%8B%95%E5%B0%8A%E9%87%91%E5%89%9B%E5%AF%BA",
  },
  {
    name: "國營昭和紀念公園（花卉）",
    day: "備選",
    area: "立川",
    type: "花季",
    note: "大型公園與花木園，可租腳踏車，6 月可看菖蒲等花卉。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E7%87%9F%E6%98%AD%E5%92%8C%E7%B4%80%E5%BF%B5%E5%85%AC%E5%9C%92",
  },
  {
    name: "濱離宮恩賜庭園",
    day: "備選",
    area: "汐留",
    type: "庭園",
    note: "6 月可見花菖蒲與紫陽花，適合築地、銀座附近加點。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%BF%B1%E9%9B%A2%E5%AE%AE%E6%81%A9%E8%B3%9C%E5%BA%AD%E5%9C%92",
  },
  {
    name: "日枝神社",
    day: "備選",
    area: "赤坂",
    type: "寺社",
    note: "山王祭與赤坂散步備選，紅色鳥居階梯很適合拍照。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%97%A5%E6%9E%9D%E7%A5%9E%E7%A4%BE%20%E8%B5%A4%E5%9D%82",
  },
  {
    name: "山王祭",
    day: "備選",
    area: "赤坂",
    type: "祭典",
    note: "6 月中旬祭典備選；偶數年神幸祭規模較大。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E7%8E%8B%E7%A5%AD%20%E6%97%A5%E6%9E%9D%E7%A5%9E%E7%A4%BE",
  },
  {
    name: "台場",
    day: "備選",
    area: "台場",
    type: "海灣",
    note: "自由女神、鋼彈、彩虹大橋與商場，需要半天以上。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%A0%B4",
  },
  {
    name: "豐洲市場",
    day: "備選",
    area: "豐洲",
    type: "市場",
    note: "市場、美食與千客萬來，可與台場或 teamLab 串成半日。",
    map: "https://www.google.com/maps/search/?api=1&query=%E8%B1%90%E6%B4%B2%E5%B8%82%E5%A0%B4",
  },
  {
    name: "teamLab Planets TOKYO",
    day: "備選",
    area: "豐洲",
    type: "室內",
    note: "沈浸式展覽，雨天或室內備選；需要先看票況。",
    map: "https://www.google.com/maps/search/?api=1&query=teamLab%20Planets%20TOKYO",
    web: "https://planets.teamlab.art/tokyo/",
  },
  {
    name: "六本木 Hills 展望台",
    day: "備選",
    area: "六本木",
    type: "景觀",
    note: "Tokyo City View、森美術館與毛利庭園，可替代東京鐵塔夜景。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E6%9C%AC%E6%9C%A8%20Hills%20%E5%B1%95%E6%9C%9B%E5%8F%B0",
  },
  {
    name: "東京哈利波特影城",
    day: "備選",
    area: "練馬",
    type: "室內",
    note: "大型室內景點，建議排半天以上並提前確認票券。",
    map: "https://www.google.com/maps/search/?api=1&query=Warner%20Bros.%20Studio%20Tour%20Tokyo",
  },
  {
    name: "PokéPark KANTO",
    day: "備選",
    area: "多摩",
    type: "遊樂園",
    note: "寶可夢主題區備選，需看票況與入場規則，可接 HANA・BIYORI。",
    map: "https://www.google.com/maps/search/?api=1&query=Pok%C3%A9Park%20KANTO",
  },
  {
    name: "江之島",
    day: "備選",
    area: "藤澤",
    type: "海邊",
    note: "鎌倉延伸備選；若體力與天氣好，可追加海島散步。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B1%9F%E4%B9%8B%E5%B3%B6",
  },
  {
    name: "七里ヶ浜海岸",
    day: "備選",
    area: "湘南",
    type: "海邊",
    note: "鎌倉海邊收尾備選，天氣好可看夕陽或往稻村崎延伸。",
    map: "https://www.google.com/maps/search/?api=1&query=%E4%B8%83%E9%87%8C%E3%83%B6%E6%B5%9C%E6%B5%B7%E5%B2%B8",
  },
  {
    name: "河口湖音樂と森の美術館",
    day: "備選",
    area: "河口湖",
    type: "博物館",
    note: "歐式庭園、自動演奏樂器與富士山背景，河口湖雨天或花季備選。",
    map: "https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%9F%B3%E6%A8%82%E3%81%A8%E6%A3%AE%E3%81%AE%E7%BE%8E%E8%A1%93%E9%A4%A8",
  },
  {
    name: "天上山公園・カチカチ山ロープウェイ",
    day: "備選",
    area: "河口湖",
    type: "景觀",
    note: "河口湖與富士山展望備選，趕行程時可視天氣取捨。",
    map: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E4%B8%8A%E5%B1%B1%E5%85%AC%E5%9C%92%20%E3%82%AB%E3%83%81%E3%82%AB%E3%83%81%E5%B1%B1%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4",
  },
  {
    name: "ほうとう不動 東恋路店",
    day: "備選",
    area: "河口湖",
    type: "美食",
    note: "河口湖鄉土料理ほうとう備選，白色圓弧建築也很適合拍照。",
    map: "https://www.google.com/maps/search/?api=1&query=%E3%81%BB%E3%81%86%E3%81%A8%E3%81%86%E4%B8%8D%E5%8B%95%20%E6%9D%B1%E6%81%8B%E8%B7%AF%E5%BA%97",
  },
  {
    name: "つながるcafe",
    day: "備選",
    area: "河口湖",
    type: "咖啡",
    note: "河口湖北岸富士山景觀咖啡備選，能見度看天氣。",
    map: "https://www.google.com/maps/search/?api=1&query=%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8Bcafe%20%E6%B2%B3%E5%8F%A3%E6%B9%96",
  },
];

const stays = [
  {
    name: "東京 Airbnb｜前半段",
    dates: "6/13 - 6/16",
    area: "新宿／大久保一帶",
    platform: "Airbnb",
    status: "待付款",
    checkin: "入住 15:00 後",
    checkout: "退房 10:00 前",
    address: "169-0072 東京都新宿區大久保 1-11-21",
    note: "自助入住，使用密碼鑰匙盒；銜接抵達日與 6/16 前往河口湖。",
    map: "https://maps.google.com/maps?daddr=169-0072%2C+T%C5%8Dky%C5%8D-to%2C+Shinjuku+City%2C+1-ch%C5%8Dme-11-21+%C5%8Ckubo%2C+Japan",
  },
  {
    name: "河口湖 Booking｜Yushin／有信旅館",
    dates: "6/16 - 6/17",
    area: "河口湖",
    platform: "Booking.com",
    status: "已排程扣款",
    checkin: "入住 15:00-18:00",
    checkout: "退房 08:00-10:00",
    address: "401-0304 富士河口湖町 河口2719-90",
    note: "18:00 前需領鑰匙，晚到需提前聯絡；禁止吸菸、禁止寵物，夜間需降低音量。",
    map: "https://www.google.com/maps/search/?api=1&query=Yushin%20Kawaguchiko",
  },
  {
    name: "東京 Airbnb｜後半段",
    dates: "6/17 - 6/20",
    area: "東新宿／新大久保一帶",
    platform: "Airbnb",
    status: "待付款",
    checkin: "入住 15:00 後",
    checkout: "退房 11:00 前",
    address: "169-0072 東京都新宿區大久保 1-9-24",
    note: "入住前必須完成線上入住登記；入住當天約 11:00 發送密碼鎖密碼。",
    map: "https://maps.google.com/maps?daddr=35.7003557,139.704871",
  },
];

const areas = [
  {
    name: "新宿",
    body: "夜生活、交通樞紐、晚餐宵夜與臨時補貨。可替代澀谷夜晚或六本木夜景。",
  },
  {
    name: "上野",
    body: "阿美橫丁、博物館、公園與藥妝補貨。可接在淺草後或作雨天備案。",
  },
  {
    name: "銀座／有樂町",
    body: "精品百貨、成熟商圈與精緻餐飲。適合 6/15 或 6/19 晚間彈性安排。",
  },
  {
    name: "文京區",
    body: "白山神社、文京繡球花祭、小石川後樂園。可作鎌倉花季備案。",
  },
  {
    name: "台場／豐洲",
    body: "teamLab、豐洲市場、千客萬來與海灣景。需要半天以上，這趟不硬塞。",
  },
  {
    name: "中目黑／代官山",
    body: "咖啡、選物、生活感街區。可替代 6/19 原宿表參道散步。",
  },
];

const usefulLinks = [
  {
    title: "河口湖高速巴士訂票",
    note: "新宿至河口湖方向",
    href: "https://www.highwaybus.com/gp/inbound/inbPlanList?mode=search#direction",
  },
  {
    title: "河口淺間神社遙拜所即時影像",
    note: "查看富士山天氣與能見度",
    href: "https://live.fujigoko.tv/?n=38",
  },
  {
    title: "三井 Outlet Park 木更津",
    note: "店鋪與交通資訊",
    href: "https://mitsui-shopping-park.com/mop/kisarazu/",
  },
  {
    title: "SHIBUYA SKY",
    note: "票券與營業資訊",
    href: "https://www.shibuya-scramble-square.com/sky/",
  },
];

const tabs = document.querySelector("#dayTabs");
const timeline = document.querySelector("#timeline");
const alertsNode = document.querySelector("#alerts");
const stayNode = document.querySelector("#stayList");
const areasNode = document.querySelector("#areaGrid");
const linksNode = document.querySelector("#linkList");
const placeList = document.querySelector("#placeList");
const placeSearch = document.querySelector("#placeSearch");
const dayFilter = document.querySelector("#dayFilter");
const areaFilter = document.querySelector("#areaFilter");
const typeFilter = document.querySelector("#typeFilter");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function dayClass(day) {
  const normalized = String(day).toLowerCase().replace(/\s+/g, "-");
  return `day-chip--${normalized}`;
}

function renderAlerts() {
  alertsNode.innerHTML = alerts
    .map(
      (item) => `
        <article class="notice">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderTabs(activeIndex = 0) {
  tabs.innerHTML = itinerary
    .map(
      (item, index) => `
        <button class="day-tab" role="tab" aria-selected="${index === activeIndex}" data-index="${index}">
          <span>${escapeHtml(item.day)}</span>
          <small>${escapeHtml(item.date)}</small>
        </button>
      `,
    )
    .join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      renderTabs(Number(button.dataset.index));
      renderDay(Number(button.dataset.index));
    });
  });
}

function renderDay(index = 0) {
  const item = itinerary[index];
  timeline.innerHTML = `
    <article class="day-panel">
      <div class="day-meta">
        <span class="chip">${escapeHtml(item.day)}</span>
        <span class="chip">${escapeHtml(item.date)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <ol class="route">
        ${item.schedule
          .map(
            (stop) => `
              <li>
                <span class="route-time">${escapeHtml(stop.time)}</span>
                <span class="route-body">
                  <strong>${escapeHtml(stop.title)}</strong>
                  <small>${escapeHtml(stop.detail)}</small>
                  ${
                    stop.map
                      ? `<a class="mini-link" href="${stop.map}" target="_blank" rel="noreferrer">Google Maps</a>`
                      : ""
                  }
                </span>
              </li>
            `,
          )
          .join("")}
      </ol>
      <p class="note">${escapeHtml(item.note)}</p>
    </article>
  `;
}

function populateFilters() {
  const days = ["全部日期", ...new Set(places.map((place) => place.day))];
  const areas = ["全部地區", ...new Set(places.map((place) => place.area).sort((a, b) => a.localeCompare(b, "zh-Hant")))];
  const types = ["全部類型", ...new Set(places.map((place) => place.type))];
  dayFilter.innerHTML = days
    .map((day) => `<option value="${escapeHtml(day)}">${escapeHtml(day)}</option>`)
    .join("");
  areaFilter.innerHTML = areas
    .map((area) => `<option value="${escapeHtml(area)}">${escapeHtml(area)}</option>`)
    .join("");
  typeFilter.innerHTML = types
    .map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`)
    .join("");
}

function renderPlaces() {
  const keyword = placeSearch.value.trim().toLowerCase();
  const day = dayFilter.value;
  const area = areaFilter.value;
  const type = typeFilter.value;
  const filtered = places.filter((place) => {
    const text = `${place.name} ${place.day} ${place.area} ${place.type} ${place.note}`.toLowerCase();
    return (
      (!keyword || text.includes(keyword)) &&
      (day === "全部日期" || place.day === day) &&
      (area === "全部地區" || place.area === area) &&
      (type === "全部類型" || place.type === type)
    );
  });

  placeList.innerHTML = filtered
    .map(
      (place) => `
        <article class="place-card">
          <div class="day-meta">
            <span class="chip day-chip ${dayClass(place.day)}">${escapeHtml(place.day)}</span>
            <span class="chip area-chip">${escapeHtml(place.area)}</span>
            <span class="chip">${escapeHtml(place.type)}</span>
          </div>
          <h3>${escapeHtml(place.name)}</h3>
          <p>${escapeHtml(place.area)}｜${escapeHtml(place.note)}</p>
          <div class="links">
            <a class="action-link" href="${place.map}" target="_blank" rel="noreferrer">Google Maps</a>
            ${
              place.web
                ? `<a class="action-link secondary" href="${place.web}" target="_blank" rel="noreferrer">官網</a>`
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderStays() {
  stayNode.innerHTML = stays
    .map(
      (stay) => `
        <article class="stay-card">
          <div class="day-meta">
            <span class="chip">${escapeHtml(stay.dates)}</span>
            <span class="chip">${escapeHtml(stay.platform)}</span>
            <span class="chip">${escapeHtml(stay.status)}</span>
          </div>
          <h3>${escapeHtml(stay.name)}</h3>
          <dl class="stay-facts">
            <div>
              <dt>區域</dt>
              <dd>${escapeHtml(stay.area)}</dd>
            </div>
            <div>
              <dt>入住</dt>
              <dd>${escapeHtml(stay.checkin)}</dd>
            </div>
            <div>
              <dt>退房</dt>
              <dd>${escapeHtml(stay.checkout)}</dd>
            </div>
            <div>
              <dt>地址</dt>
              <dd>${escapeHtml(stay.address)}</dd>
            </div>
          </dl>
          <p>${escapeHtml(stay.note)}</p>
          <div class="links">
            <a class="action-link" href="${stay.map}" target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAreas() {
  areasNode.innerHTML = areas
    .map(
      (area) => `
        <article class="area-card">
          <strong>${escapeHtml(area.name)}</strong>
          <p>${escapeHtml(area.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderLinks() {
  linksNode.innerHTML = usefulLinks
    .map(
      (link) => `
        <a class="link-item" href="${link.href}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(link.title)}</strong>
          <span>${escapeHtml(link.note)}</span>
        </a>
      `,
    )
    .join("");
}

renderAlerts();
renderTabs();
renderDay();
populateFilters();
renderPlaces();
renderStays();
renderAreas();
renderLinks();

[placeSearch, dayFilter, areaFilter, typeFilter].forEach((control) => {
  control.addEventListener("input", renderPlaces);
});
