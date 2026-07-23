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
title:"▶ YouTube",
apps:[

{name:"YouTube TV",badge:"Hot",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb.apk"},
{name:"YouTube Quốc tế",badge:"New",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb2.apk"}

]
},

{
title:"🎬 nhà đài",
apps:[

{name:"VTV go",badge:"truyen hinh",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/VTVgo.TV_v12.6.29.apk"},
{name:"FPT",badge:"ổn định",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/net.fptplay.ottbox_base.apk"},
{name:"My TV",badge:"ổn định",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vn.mytvnet.b2cott_base.apk"},
{name:"TV 360",badge:"tốt",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/com.viettel.tv360.tv_base.apk"},
{name:"VTV prime",badge:"tốt",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/VTVprime_v1.11.0_1.apk"},

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