const categories = [

{
title:"📺 Truyền hình",
apps:[

{name:"DL Tivi",badge:"Mới",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ADLTivi_v16.0.2.apk"},
{name:"OK Tivi",badge:"Ổn định",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/oktivi.apk"},
{name:"QuanTV",badge:"TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/quantv.apk"},
{name:"VietPlayTV",badge:"TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vietplaytv.apk"},
{name:"TV365",badge:"TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Xem.TV365.-.V3.apk"}

]
},

{
title:"⚽ Thể thao",
apps:[

{name:"Đào TV",badge:"Hot",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/daotv.apk"},
{name:"Get Out",badge:"Live",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Get_Out_2.0.apk"},
{name:"Sports TV",badge:"HD",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/SportsTV_5.2.3.apk"}

]
},

{
title:"▶ YouTube",
apps:[

{name:"YouTube TV",badge:"Hot",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb.apk"},
{name:"YouTube Quốc tế",badge:"New",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb2.apk"}

]
},

{
title:"🎬 Phim",
apps:[

{name:"Chợ Phim",badge:"4K",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/app-release.apk"},
{name:"Rổ Phim",badge:"HD",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/cobephimtv_1.apk"},
{name:"Phim4K",badge:"4K",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Phim4K-v2.6.0.apk"},
{name:"Saigon Phim",badge:"HD",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/saigonphim-tv.apk"},
{name:"Tiệm Phim",badge:"HD",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/tiemphim.apk"},
{name:"VaX",badge:"VIP",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vax.apk"}

]
},

{
title:"🛠 Tiện ích",
apps:[

{name:"REMOTE ADB",badge:"ADB",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/adb.apk"},
{name:"DL Store",badge:"Store",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/DLStore_v16.0.4.apk"},
{name:"MStore",badge:"Store",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/mstore.apk"},
{name:"Netflix",badge:"Official",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/netflix.apk"},
{name:"TikTok",badge:"New",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/tiktok.apk"},
{name:"Giọng nói Kiki",badge:"Voice",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/kiki.apk"},
{name:"Super Voice",badge:"Voice",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/supervoice.apk"}

]
}

];

const list=document.getElementById("app-list");

categories.forEach(category=>{

list.innerHTML+=`

<div class="category-title">
${category.title}
</div>

<div class="grid"></div>

`;

const grid=document.querySelectorAll(".grid");
const currentGrid=grid[grid.length-1];

category.apps.forEach(app=>{

currentGrid.innerHTML+=`

<div class="card">

<div class="top">

<h3>${app.name}</h3>

<span class="badge">
${app.badge}
</span>

</div>

<p>${category.title.replace("📺 ","").replace("⚽ ","").replace("▶ ","").replace("🎬 ","").replace("🛠 ","")}</p>

<a href="${app.link}" download>

<button>⬇️ Tải về</button>

</a>

</div>

`;

});

});
