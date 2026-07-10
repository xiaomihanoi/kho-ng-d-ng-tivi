const apps = [

{name:"REMOTE ADB",link:"apk/adb.apk"},
{name:"DL Tivi",link:"apk/ADLTivi_v16.0.2.apk"},
{name:"App Release",link:"apk/app-release.apk"},
{name:"Rổ phim",link:"apk/cobephimtv.apk"},
{name:"Cò TV",link:"apk/cotv.apk"},
{name:"Đào TV",link:"apk/daotv.apk"},
{name:"DL Store",link:"apk/DLStore_v16.0.3.apk"},
{name:"Get Out",link:"apk/Get_Out_2.0.apk"},
{name:"Giọng Nói Kiki",link:"apk/kiki.apk"},
{name:"MStore",link:"apk/mstore.apk"},
{name:"Netflix",link:"apk/netflix.apk"},
{name:"OK Tivi",link:"apk/oktivi.apk"},
{name:"Phim4K",link:"apk/Phim4K-v2.6.0.apk"},
{name:"QuanTV",link:"apk/quantv.apk"},
{name:"Saigon Phim",link:"apk/saigonphim-tv.apk"},
{name:"Kho khác",link:"apk/smihomeall.apk"},
{name:"Sports TV",link:"apk/SportsTV_5.2.3.apk"},
{name:"Super Voice",link:"apk/supervoice.apk"},
{name:"TikTok",link:"apk/tiktok.apk"},
{name:"VAX",link:"apk/vax.apk"},
{name:"VietPlayTV",link:"apk/vietplaytv.apk"},
{name:"Xem TV365",link:"apk/Xem TV365 - V3.apk"},
{name:"YouTube TV",link:"apk/ytb.apk"},
{name:"YouTube Quốc tế",link:"apk/ytb2.apk"}

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