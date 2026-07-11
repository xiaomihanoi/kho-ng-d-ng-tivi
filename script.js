const apps = [

{name:"REMOTE ADB",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/adb.apk"},
{name:"DL Tivi",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ADLTivi_v16.0.2.apk"},
{name:"Chợ Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/app-release.apk"},
{name:"Rổ phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/cobephimtv.apk"},
{name:"Cò TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/cotv.apk"},
{name:"Đào TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/daotv.apk"},
{name:"DL Store",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/DLStore_v16.0.3.apk"},
{name:"Get Out",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Get_Out_2.0.apk"},
{name:"Giọng Nói Kiki",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/kiki.apk"},
{name:"MStore",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/mstore.apk"},
{name:"Netflix",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/netflix.apk"},
{name:"OK Tivi",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/oktivi.apk"},
{name:"Phim4K",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Phim4K-v2.6.0.apk"},
{name:"QuanTV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/quantv.apk"},
{name:"Saigon Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/saigonphim-tv.apk"},
{name:"Kho khác",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/smihomeall.apk"},
{name:"Sports TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/SportsTV_5.2.3.apk"},
{name:"Super Voice",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/supervoice.apk"},
{name:"TikTok",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/tiktok.apk"},
{name:"VAX",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vax.apk"},
{name:"VietPlayTV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vietplaytv.apk"},
{name:"Xem TV365",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Xem.TV365.-.V3.apk"},
{name:"YouTube TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb.apk"},
{name:"YouTube Quốc tế",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb2.apk"}

];

const list=document.getElementById("app-list");

apps.forEach(app=>{

list.innerHTML+=`

<div class="card">

<h2>${app.name}</h2>

<a href="${app.link}" download>

<button>Tải Về</button>

</a>

</div>

`;

})