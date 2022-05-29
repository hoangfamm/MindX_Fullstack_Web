var resources = [
    {
        "Bài viết": [
            {

                no: 1,
                title: "10 dấu hiệu phổ biến của chứng 'trầm cảm thầm lặng' (Perfectly Hidden Depression)",
                source: "tamlyhoctoipham.com",
                url: "https://tamlyhoctoipham.com/10-dau-hieu-pho-bien-cua-chung-tram-cam-tham-lang-perfectly-hidden-depression"
            },
            {

                no: 2,
                title: "Mình đã đánh mất những gì kể từ khi bị trầm cảm",
                source: "acrazymind.vn",
                url: "https://acrazymind.vn/minh-da-danh-mat-nhung-gi-ke-tu-khi-bi-tram-camfy8itj"
            },
            {

                no: 3,
                title: "Liều thuốc bí mật cho bệnh trầm cảm",
                source: "tamlyhoctoipham.com",
                url: "https://tamlyhoctoipham.com/lieu-thuoc-bi-mat-cho-benh-tram-cam"
            },

        ]
    },
    {
        "Podcast": [
            {

                no: 1,
                title: "#48:On Depression - Nói về trầm cảm",
                source: "open.spotify.com",
                url: "https://open.spotify.com/episode/3pDYWgf9Nw3FblPqFxD1yy"
            },
            {

                no: 2,
                title: "Số 2 — InPsychOut Kể Chuyện Gãy: Bàn về Trầm Cảm",
                source: "soundcloud.com",
                url: "https://soundcloud.com/nhacgay/ipoxgay-so2"
            },
            {

                no: 3,
                title: "\"Em đã từng bị trầm cảm...\" - M2T13",
                source: "open.spotify.com",
                url: "https://open.spotify.com/episode/1h4pRIjYC2qG2nVj7bSCNK"
            },

        ]
    },
    {
        "Video": [
            {

                no: 1,
                title: "Tôi có một con chó mực, tên nó là trầm cảm.",
                source: "youtube.com",
                url: "https://www.youtube.com/watch?v=dqBRN7aV9Cc"
            },
            {

                no: 2,
                title: "9 Dấu hiệu Trầm cảm nặng |Psych2Go Vietnam",
                source: "youtube.com",
                url: "https://www.youtube.com/watch?v=n83Dd3oNa1A"
            },
            {

                no: 3,
                title: "Understanding & Conquering Depression | Huberman Lab Podcast #34",
                source: "youtube.com",
                url: "https://www.youtube.com/watch?v=Xu1FMCxoEFc"
            },

        ]
    },

]

// Chi hien nhung box co gia tri nhu nguoi dung chon



myFilter("all");

function myFilter(c) {
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == 'all') {c = ""};
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
        }
    }
}
myFilter('all');

function addClass(element, nam) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = nam.split(" ");
    for (i = 0; i < nam.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, nam) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = nam.split(" ");
    for ( i = 0; i < nam.length; i++) {
        if (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// how to dynamic button????
