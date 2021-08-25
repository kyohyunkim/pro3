//-----------마이페이지----------------------------------------
const elErow = document.querySelector('.erow a');
const elErow2 = document.querySelector('.erow2 a');
const elIntro = document.querySelector('.intro');

elErow.addEventListener('click',function(){
    elIntro.classList.add('active');
})
elErow2.addEventListener('click',function(){
    elIntro.classList.remove('active');
})
//----------포토&비디오버튼----------------------------------------
const elSvgblue1 = document.querySelector('.p-1')
const elSvgblue2 = document.querySelector('.p-2')
const elSvgyellow1 = document.querySelector('.y-1')
const elSvgyellow2 = document.querySelector('.y-2')
const elCon2 = document.querySelector('main .con2')
const elCon3 = document.querySelector('main .con3')

elSvgblue1.addEventListener('click',function(){
    elSvgblue1.classList.add('active');
    elSvgblue2.classList.add('active');
    elSvgyellow1.classList.remove('active')
    elSvgyellow2.classList.remove('active')
    elCon2.classList.remove('active');
    elCon3.classList.add('active');
  
})
elSvgyellow1.addEventListener('click',function(){
    elSvgyellow1.classList.add('active')
    elSvgyellow2.classList.add('active')
    elSvgblue1.classList.remove('active');
    elSvgblue2.classList.remove('active');
    elCon2.classList.add('active');
    elCon3.classList.remove('active');
})
//------------버거-----------------------------------
const elBuger = document.querySelector('.menu-trigger');
const elNav = document.querySelector('.nav');
elBuger.addEventListener('click',function(){
    this.classList.toggle('active-1');
    elNav.classList.toggle('active');
})


const elBm1 = document.querySelector('.pm-1')
const elBm2 = document.querySelector('.pm-2')
const elYm1 = document.querySelector('.ym-1')
const elYm2 = document.querySelector('.ym-2')

elBm1.addEventListener('click',function(){
    elBm1.classList.add('active');
    elBm2.classList.add('active');
    elYm1.classList.remove('active')
    elYm2.classList.remove('active')

    elNav.classList.remove('active');
    elBuger.classList.remove('active-1');

    elCon2.classList.remove('active');
    elCon3.classList.add('active');

    elSvgyellow1.classList.remove('active')
    elSvgyellow2.classList.remove('active')
    elSvgblue1.classList.add('active');
    elSvgblue2.classList.add('active');
})
elBm2.addEventListener('click',function(){
    elBm1.classList.remove('active');
    elBm2.classList.remove('active');
})
elYm1.addEventListener('click',function(){
    elBm1.classList.remove('active');
    elBm2.classList.remove('active');
    elYm1.classList.add('active')
    elYm2.classList.add('active')

    elNav.classList.remove('active');
    elBuger.classList.remove('active-1');

    elCon2.classList.add('active');
    elCon3.classList.remove('active');

    elSvgyellow1.classList.add('active')
    elSvgyellow2.classList.add('active')
    elSvgblue1.classList.remove('active');
    elSvgblue2.classList.remove('active');
})
elYm2.addEventListener('click',function(){
    elYm1.classList.remove('active')
    elYm2.classList.remove('active')
})
//------------인포-----------------------------------
const elErowb = document.querySelectorAll('.box1 li a');
const elInfo = document.querySelectorAll('.in');
console.log(elErowb);
console.log(elInfo);

const a= '▼';
const b = '▲';
console.log(a);

for(let i=0; i<15; i++){
    elErowb[i].innerHTML = '<a>▼</a>';
elErowb[i].addEventListener('click',function(){
    if(a == 0){
        elInfo[i].classList.add('active');
        elErowb[i].innerText = b;
    }else if(elErowb[i].innerText == b){
        elInfo[i].classList.remove('active');
        elErowb[i].innerText = '▼';
    }else{
        elInfo[i].classList.add('active');
        elErowb[i].innerText = b;
    }
    
})
}
//---------------video-----------------------------------------------------
const elVideo = document.querySelectorAll('video');

for(let i=0; i<elVideo.length; i++){
    elVideo[i].addEventListener('click',function(){
        if(elVideo[i].paused){
            elVideo[i].play()
        } else {
            // elVideo[i].play()
            elVideo[i].pause()
        }
    })
}




//-------------마이페이지 눈알----------------------------------------------
function rotate (event) 
{
    const elImg = document.querySelectorAll('.cls-1');
    const x = event.clientX;
    const y = event.clientY;
    const w = window.innerWidth/2;
    const h = window.innerHeight/5;
    const kyo = x - w;
    const m = y - h;
    const img1 = (kyo / w)*10;
    const img2 = (m / h)*5;

    for(let i=0; i<elImg.length; i++){
        elImg[i].style.transform = `translateY(${img2}px) translateX(${img1}px)`;
    }
}
document.addEventListener("click", function (event){
	rotate (event)
});


//-----------footer 애니메이션-------------------------------------------------
const elAni1 = document.querySelector('.footer-ani .k-1');
const elAni2 = document.querySelector('.footer-ani .k-2');

elAni1.classList.add('on');
elAni2.classList.add('on');


//------------메인페이지 눈알---------------------------------------------------
const elEyeball = document.querySelector('.head .Top-1 .eye .eyeball');


let pos = {y:0, y2:0, state: '', eyeMove: true}
let bbb = 0;

window.addEventListener('scroll',function(){

    if(pos.eyeMove){
        elEyeball.style.transform = `translateX(${bbb}px)`;
        bbb += 1;
        if(bbb === 10) pos.eyeMove = false;
    }else{
        elEyeball.style.transform = `translateX(${bbb}px)`;
        bbb -= 1;
        if(bbb == -10) pos.eyeMove = true;
    }

})