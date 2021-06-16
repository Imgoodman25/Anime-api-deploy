$(document).ready(() => {
    anime();
    manga();
    anime_slider();
    manga_slider();
    


    function anime_slider() {
        let counter = 1;
        $('.figora-anime .next').click((e) => {
            let image = $('img');
            let size = image[0].offsetWidth;
            console.log(counter)
            if (counter <= 5){
                $('.figora-anime .prev .material-icons').css('opacity', '100%', 'transition', '0.5s');
                $('.figora-slide-anime').css('transition', 'transform 0.5s');
                counter++;
                $('.figora-slide-anime').css('transform', 'translateX(' + (-size * counter + 'px'));
            }
            else if (counter >= 5) {
                $('.figora-anime .next .material-icons').css('opacity', '10%', 'transition', '0.5s');
            }
        });
        $('.figora-anime .prev').click((e) => {
            let image = $('img');
            let size = image[0].offsetWidth;
            console.log(counter)
            if (counter <= 0) {
                $('.figora-anime .prev .material-icons').css('opacity', '10%', 'transition', '0.5s');
            } else if(counter >= 0) {
                $('.figora-anime .next span').css('opacity', '100%', 'transition');
                $('.figora-slide-anime').css('transition', 'transform 0.5s');
                counter--;
                $('.figora-slide-anime').css('transform', 'translateX(' + (-size * counter + 'px'));
            }
        })
    }
    function manga_slider() {
        let counter = 0;
        $('.figora-manga .next').click((e) => {
            let image = $('img');
            let size = image[0].offsetWidth;
            if (counter <= 5) {
                $('.figora-manga .prev .material-icons').css('opacity', '100%', 'transition', '0.5s');
                $('.figora-slide-manga').css('transition', 'transform 0.5s');
                counter++;
                $('.figora-slide-manga').css('transform', 'translateX(' + (-size * counter + 'px'));
            } else if (counter >= 5) {
                $('.figora-manga .next .material-icons').css('opacity', '10%', 'transition', '0.5s');
            }
        });
        $('.figora-manga .prev').click((e) => {
            let image = $('img');
            let size = image[0].offsetWidth;
            if (counter <= 0) {
                $('.figora-manga .prev .material-icons').css('opacity', '10%', 'transition', '0.5s');
            } else if (counter >= 0) {
                $('.figora-manga .next span').css('opacity', '100%', 'transition');
                $('.figora-slide-manga').css('transition', 'transform 0.5s');
                counter--;
                $('.figora-slide-manga').css('transform', 'translateX(' + (-size * counter + 'px'));
            }
        })
    }
    function anime() {
        $.ajax({
            url: "https://kitsu.io/api/edge/trending/anime",
            cache: false,
            success: function (data) {
                let panjang = data.data.length;
                console.log(data);
                for (let i = 0; i <= panjang; i++) {
                    $(".figora-slide-anime").append(`<img data="${data.data[i].id}" src="${data.data[i].attributes.posterImage.small}">`);
                }
            }
        });
    }
    function manga() {
        $.ajax({
            url: "https://kitsu.io/api/edge/trending/manga",
            cache: false,
            success: function (data) {
                let panjang = data.data.length;
                for (let i = 0; i <= panjang; i++){
                    $(".figora-slide-manga").append(`<img src="${data.data[i].attributes.posterImage.small}">`);
                }
            }
        });
    }
    
});