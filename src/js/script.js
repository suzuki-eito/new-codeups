
//ハンバーガーメニューのアニメーション
window.addEventListener('DOMContentLoaded',function(){
  const headerBlock = document.querySelector('.js-block');
  const hamburger = document.querySelector('.js-hamburger');
  const menu = document.querySelector('.js-menu');
  const body =document.querySelector('body');
  hamburger.addEventListener('click',function(){
    headerBlock.classList.toggle('is-active');
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    body.classList.toggle('is-active');
  })
});

//FVのスライダー
const fv__splide = new Splide('.fv__splide',{
  type: "fade",
  rewind: true,
  speed: 2000,
  autoplay: true,
  interval: 3000,
  perPage : 1,
  classes: {
    //ページネーション
    pagination: 'splide__pagination fv__pagination',
    //矢印
    arrows: 'splide__arrows fv__arrows',
  },
}).mount();

//campaignのスライド
const campaign__splide = new Splide('.campaign__splide',{
  type:'loop',
  gap:'40px',
  fixedWidth:'333px',
  classes: {
    //ページネーション
    pagination: 'splide__pagination campaign__pagination',
  },
  //768px以下の時
  breakpoints: {
    768: {
      gap:'24px',
      fixedWidth:'280px',
      autoplay: true,
      interval: 5000,
    },
  }
}).mount();

window.addEventListener('DOMContentLoaded',function(){
  //マスクアニメーション
  gsap.utils.toArray('.opening-mask').forEach((mask) =>{
    gsap.fromTo(
       mask,
       {xPercent:0},
         {xPercent:101,scrollTrigger:{
          trigger:mask,
          start:'top bottom',
          toggleActions:'play none none reverse',
         }}
    );
  })
});

//トップに戻るボタン
window.addEventListener('DOMContentLoaded',function(){
    const pageTopBtn = document.querySelector('.js-to-top');
    pageTopBtn.addEventListener('click',function(event){
        event.preventDefault();// aタグのときは必須
        window.scrollTo({top:0,behavior:'smooth'})
    })

    window.addEventListener('scroll',function(){
        // window.pageYOffset 現在の位置を取得
        if(window.scrollY > 100){
            pageTopBtn.classList.add('is-visible')
        }else{
            pageTopBtn.classList.remove('is-visible')
        }
    })

    //フッターの手前で固定する
    window.addEventListener('scroll',function(){
      const height = document.documentElement.scrollHeight;//ウィンドウの高さ
      const position = window.innerHeight + window.scrollY; //ページトップから現在地までの高さ
      const footer = document.querySelector('.js-footer').clientHeight;//footerの高さ
      if (height - position < footer ) {
        pageTopBtn.classList.add('is-end');
      } else {
        pageTopBtn.classList.remove('is-end');
      }
    })
})
