$('.avaliacoes').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '.prev-avaliacoes',
    nextArrow: '.next-avaliacoes',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 615,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
    ]
});
$('.diferenciais').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '.prev-diferenciais',
    nextArrow: '.next-diferenciais',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 415,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
    ]
});

$(window).on('scroll',()=>{
    if($(window).scrollTop() > 30){
        $('header').addClass('bg');
    }
    else{
        $('header').removeClass('bg');
    }
});
$(window).trigger('scroll');

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('header a').on('click',()=>{
    setTimeout(()=>{
        $('header a').removeClass('selected');
        $(`[href="#${window.location.href.split('#')[1]}"]`).addClass('selected');
    },100);
});

let openMenu = ()=>{
    $('header nav ul').toggleClass('active');
    $('nav svg').remove();
    if($('header nav ul.active').length){
        $('nav').append(`
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" onClick="openMenu()">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        `);
    }
    else{
        $('nav').append(`
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick="openMenu()">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
            </svg>
        `);
    }
};
$('open-menu').on('click',()=>{
    openMenu();
});

let openImg = src =>{
    $('body').append(`
        <div class="modal-img" style="display: none">
            <img src="${src}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    `);
    setTimeout(()=>{
        $('.modal-img').fadeIn(300);
        $('.modal-img svg').on('click',()=>{
            setTimeout(()=>{
                console.log('ué');
                $('.modal-img').fadeOut(300,()=>{
                    $('.modal-img').remove();
                });
            },1);
        });
    });
}