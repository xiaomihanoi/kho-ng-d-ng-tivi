const categories = [
    {
        title: "📺 Truyền hình",
        apps: [
            {name:"DL Tivi",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ADLTivi_v16.0.2.apk"},
            {name:"OK Tivi",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/oktivi.apk"},
            {name:"Cò TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/cotv.apk"},
            {name:"QuanTV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/quantv.apk"},
            {name:"VietPlayTV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vietplaytv.apk"},
            {name:"Xem TV365",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Xem.TV365.-.V3.apk"}
        ]
    },
    {
        title:"🎬 Phim",
        apps:[
            {name:"Chợ Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/app-release.apk"},
            {name:"Rổ Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/cobephimtv.apk"},
            {name:"Netflix",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/netflix.apk"},
            {name:"Phim4K",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Phim4K-v2.6.0.apk"},
            {name:"Saigon Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/saigonphim-tv.apk"},
            {name:"VaX",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/vax.apk"},
            {name:"Tiệm Phim",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/tiemphim.apk"}
        ]
    },
    {
        title:"⚽ Thể thao",
        apps:[
            {name:"Đào TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/daotv.apk"},
            {name:"DL Store",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/DLStore_v16.0.3.apk"},
            {name:"Sports TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/SportsTV_5.2.3.apk"},
            {name:"Get Out",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/Get_Out_2.0.apk"}
        ]
    },
    {
        title:"▶ Youtube",
        apps:[
            {name:"YouTube TV",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb.apk"},
            {name:"YouTube Quốc tế",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/ytb2.apk"}
        ]
    },
    {
        title:"🛠 Tiện ích",
        apps:[
            {name:"REMOTE ADB",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/adb.apk"},
            {name:"Giọng Nói Kiki",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/kiki.apk"},
            {name:"MStore",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/mstore.apk"},
            {name:"TikTok",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/tiktok.apk"},
            {name:"Super Voice",link:"https://github.com/xiaomihanoi/kho-ng-d-ng-tivi/releases/download/v1.0/supervoice.apk"}
        ]
    }
];

const list = document.getElementById("app-list");

categories.forEach(category=>{

    list.innerHTML += `
    <div class="category-title">${category.title}</div>
    <div class="grid" id="${category.title}"></div>
    `;

    const grid=document.getElementById(category.title);

    category.apps.forEach(app=>{

        grid.innerHTML += `
        <div class="card">
            <h3>${app.name}</h3>

            <a href="${app.link}" download>
                <button>Tải xuống</button>
            </a>

        </div>
        `;
    });

});