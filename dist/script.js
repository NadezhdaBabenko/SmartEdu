//на втором блоке кнопки переключения (надо доделать переключение самих картинок)
var second_block_bnt1=document.getElementById('second_block_bnt1');
var second_block_bnt2=document.getElementById('second_block_bnt2');
var second_block_bnt3=document.getElementById('second_block_bnt3');

var second_block_content_img1=document.getElementById('second_block_content_img1');

var second_block_content1=document.getElementById('second_block_content1');
var second_block_content2=document.getElementById('second_block_content2');

second_block_bnt1.addEventListener('click', block2_change_img1);
second_block_bnt2.addEventListener('click', block2_change_img2);
second_block_bnt3.addEventListener('click', block2_change_img3);

function block2_change_img1(){
    second_block_bnt1.style.backgroundColor='white';
    second_block_bnt2.style.backgroundColor='#aad0d9';
    second_block_bnt3.style.backgroundColor='#aad0d9';
    second_block_content_img1.src="pictures/second_block_img3.png";
    second_block_content1.innerHTML='Платформа позволит вам собрать собственный курс онлайн обучения.';
    second_block_content2.innerHTML='Это быстрорастущий рынок. При этом мало кто знает, что создание онлайн-школы — достаточно шаблонный процесс, подобный сборке конструктора LEGO. При этом платформа постоянно обновляется и улучшается.';
}

function block2_change_img2(){
    second_block_bnt1.style.backgroundColor='#aad0d9';
    second_block_bnt2.style.backgroundColor='white';
    second_block_bnt3.style.backgroundColor='#aad0d9';
    second_block_content_img1.src="/Users/a1/Desktop/AIDA servise/Сайт SmartEDU/сайт/pictures/second_block_img2.png";
    second_block_content1.innerHTML='У вас есть шанс воспользоваться преимуществом первопроходца и стать первым в своей нише.';
    second_block_content2.innerHTML='Так же начать зарабатывать без собственного участия в процессе обучения. Привяжите карту и получайте оплаты за 1 раз качественно составленный онлайн курс';
}

function block2_change_img3(){
    second_block_bnt1.style.backgroundColor='#aad0d9';
    second_block_bnt2.style.backgroundColor='#aad0d9';
    second_block_bnt3.style.backgroundColor='white';
    second_block_content_img1.src="pictures/second_block_img1.png";
    second_block_content1.innerHTML='В ближайшие 1-2 года выйти на рынок онлайн-образования можно будет легко и быстро. ';
    second_block_content2.innerHTML='Но по нашим прогнозам, уже в следующем году конкуренция возрастет в большинстве ниш. На рынок выйдут более зрелые игроки, которые сейчас только стартуют или размышляют над созданием онлайн-школы. ';
}

        //Запускает таймер
        window.setInterval(timer, 10000);
        function timer() {
            var img1 = document.getElementById('second_block_content_img1');
            if (img1.src.endsWith('3.png'))
            {
                img1.src = '/Users/a1/Desktop/AIDA servise/Сайт SmartEDU/сайт/pictures/second_block_img2.png';
                second_block_bnt1.style.backgroundColor='#aad0d9';
                second_block_bnt2.style.backgroundColor='white';
                second_block_bnt3.style.backgroundColor='#aad0d9';
                second_block_content1.innerHTML='У вас есть шанс воспользоваться преимуществом первопроходца и стать первым в своей нише.';
                second_block_content2.innerHTML='Так же начать зарабатывать без собственного участия в процессе обучения. Привяжите карту и получайте оплаты за 1 раз качественно составленный онлайн курс';
            }
            else if (img1.src.endsWith('2.png'))
            {
                img1.src = '/Users/a1/Desktop/AIDA servise/Сайт SmartEDU/сайт/pictures/second_block_img1.png';
                second_block_bnt1.style.backgroundColor='#aad0d9';
                second_block_bnt2.style.backgroundColor='#aad0d9';
                second_block_bnt3.style.backgroundColor='white';
                second_block_content1.innerHTML='В ближайшие 1-2 года выйти на рынок онлайн-образования можно будет легко и быстро. ';
                second_block_content2.innerHTML='Но по нашим прогнозам, уже в следующем году конкуренция возрастет в большинстве ниш. На рынок выйдут более зрелые игроки, которые сейчас только стартуют или размышляют над созданием онлайн-школы. ';
            }
            else if (img1.src.endsWith('1.png'))
            {
                img1.src = 'pictures/second_block_img3.png';
                second_block_bnt1.style.backgroundColor='white';
                second_block_bnt2.style.backgroundColor='#aad0d9';
                second_block_bnt3.style.backgroundColor='#aad0d9';
                second_block_content1.innerHTML='Платформа позволит вам собрать собственный курс онлайн обучения.';
                second_block_content2.innerHTML='Это быстрорастущий рынок. При этом мало кто знает, что создание онлайн-школы — достаточно шаблонный процесс, подобный сборке конструктора LEGO. При этом платформа постоянно обновляется и улучшается.';
            }
        }
	
// аккордеон 7 блока
var acc = document.getElementsByClassName("accordion");
var count = 0;
var i;
var selected = '';

function openPanel(id){
    var fa = document.getElementById('fa' + id.getAttribute("data-panel-id"));
    let panel = document.getElementById('panel' + id.getAttribute("data-panel-id"));
    
    if(count == 0){
        setTimeout(function(){
        panel.style.display = "block";
    }, 100);
    setTimeout(function(){
        fa.style.transition = "ease" + ".3s";
        fa.style.transform = "rotate(180deg)"
        fa.classList.remove('fa-plus');
        fa.classList.add('fa-minus');
    },100);
    count++;
    fa.style = '';
    }else{
        setTimeout(function(){
            panel.style.display = "none";
            fa.style.transition = "ease" + ".3s";
            fa.style.transform = "rotate(180deg)"
            fa.classList.remove('fa-minus');
            fa.classList.add('fa-plus');
        }, 100);
    count--;
    fa.style = '';
    }
}

// скролл меню
let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.1;  
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        let w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}









