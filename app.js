const navbar={
    logo:"Jadoo",
    home:"desitnations",
    about:"hotel",
    contact:"flights",
    login:"bookings",
    signup:"login",
    logout:"sign up",
    lang:{
        en:"ENG",
        ru:"RUS",
        uz:"UZB"
    }
    
    
};
const section_1={
    title:"Best Destinations around the world",
    subtitle:"Travel, enjoy <br> and live a new <br> and full life",
    discription:"Built Wicket longer admire do barton vanity itself do in it. <br> Preferred to sportsmen it engrossed listening. Park gate <br> sell they west hard for the.",
    button:"Find out more",
    button2svg:"./jpg/play.png",
    button2p:"Play Demo"
};
const section_2={
    title:"CATEGORY",
    subtitle:"We Offer Best Services",
    cards:{
        card1:{
            img:"./jpg/cards/card1.png",
            title:"Calculated Weather",
            discription:"Built Wicket longer <br> admire do barton <br>vanity itself do in it."
        },
        card2:{
            img:"./jpg/cards/card2.png",
            img2:"./jpg/cards/card2.1.png",
            title:"Best Flights",
            discription:"Engrossed listening.<br>Park gate sell they<br> west hard for the."
        },
        card3:{
            img:"./jpg/cards/card3.png",
            title:"Local Events",
            discription:"Barton vanity itself do<br> in it. Preferd to men it<br> engrossed listening. "
        },
        card4:{
            img:"./jpg/cards/card4.png",
            title:"Customization",
            discription:"We deliver outsourced<br> aviation services for<br> military customers"
        }
    }
}
const section_3={
    title:"Top Selling",
    subtitle:"Top Destinations",
    cards:{
        card1:{
            img:"./jpg/cards/card3.1.png",
            title:{
                title1:"Rome, Italty",
                title2:"$5,42k"
            },
            discription:{
                img:"./jpg/cards/all.png",
                par:"10 Days Trip"
            }
        },
        card2:{
            img:"./jpg/cards/card3.2.png",
            title:{
                title1:"London, UK",
                title2:"$4,2k"
            },
            discription:{
                img:"./jpg/cards/icon3A.png",
                par:"12 Days Trip"
            }
        },
        card3:{
            img:"./jpg/cards/card3.3.png",
            title:{
                title1:"Full Europe",
                title2:"$15k"
            },
            discription:{
                img:"./jpg/cards/icon3A.png",
                par:"28 Days Trip"
            }
        }
        
    }
}

const logs = document.querySelector('.logs'),
buttons = document.querySelector('.buttons'),
section1 = document.querySelector('.section1'),
section2 = document.querySelector('.section2'),
section3 = document.querySelector('.section3');



logs.innerHTML=`
<a href="#" id="logos">${navbar.logo}</a>
`
buttons.innerHTML=`
<a href="#">${navbar.home}</a>
<a href="#">${navbar.about}</a>
<a href="#">${navbar.contact}</a>
<a href="#">${navbar.login}</a>
<a href="#">${navbar.signup}</a>
<a href="#" id="signup">${navbar.logout}</a>
<select><option>${navbar.lang.en}</option>
<option>${navbar.lang.ru}</option>
<option>${navbar.lang.uz}</option></select>

`
section1.innerHTML=`

<h6>${section_1.title}</h6>
<h1>${section_1.subtitle}</h1>
<p>${section_1.discription}</p>
<div id="btns">
<a href="#" id="btn1">${section_1.button}</a>
<div id="btn2">
<img src="${section_1.button2svg}" alt="">
<a href="#">${section_1.button2p}</a>
</div>
</div>



`
section2.innerHTML=`

<p id="sec2Title">${section_2.title}</p>
<h3 id="sec2Subitle">${section_2.subtitle}</h3>
<div id="cards">
<div id="card1">
<img src="${section_2.cards.card1.img}" alt="">
<h3 class="title">${section_2.cards.card1.title}</h3>

<p class="discription">${section_2.cards.card1.discription}</p>
</div>
<div id="card2">
<img " src="${section_2.cards.card2.img}" alt="">

<h3 class="title">${section_2.cards.card2.title}</h3>

<p class="discription">${section_2.cards.card2.discription}</p>
</div>
<div id="card3">
<img src="${section_2.cards.card3.img}" alt="">
<h3 class="title">${section_2.cards.card3.title}</h3>

<p class="discription">${section_2.cards.card3.discription}</p>
</div>
<div id="card4">
<img src="${section_2.cards.card4.img}" alt="">
<h3 class="title">${section_2.cards.card4.title}</h3>

<p class="discription">${section_2.cards.card4.discription}</p>
</div>
</div>

`
section3.innerHTML=`
<div class="section3All">
<p id="sec3Title">${section_3.title}</p>
<h3 id="sec3Subitle">${section_3.subtitle}</h3>
<div id="cards6">
<div class="card">
<img class="cardimg" class="cardimg" src="${section_3.cards.card1.img}" alt="">
<div class="shadows">
<h3 class="titleS3"><span>${section_3.cards.card1.title.title1}</span><span>${section_3.cards.card1.title.title2}</span></h3>

<p class="discription3"><img  src="${section_3.cards.card1.discription.img}" alt="">&nbsp;&nbsp;${section_3.cards.card1.discription.par}</p>
</div>
</div>
<div class="card">
<img class="cardimg" src="${section_3.cards.card2.img}" alt="">
<div class="shadows">
<h3 class="titleS3"><span>${section_3.cards.card2.title.title1}</span><span>${section_3.cards.card2.title.title2}</span></h3>

<p class="discription3"><img  src="${section_3.cards.card1.discription.img}" alt="">&nbsp;&nbsp;${section_3.cards.card2.discription.par}</p>
</div>
</div>
<div class="card">
<img class="cardimg" src="${section_3.cards.card3.img}" alt="">
<div class="shadows">
<h3 class="titleS3"><span>${section_3.cards.card3.title.title1}</span><span>${section_3.cards.card3.title.title2}</span></h3>

<p class="discription3"><img  src="${section_3.cards.card1.discription.img}" alt="">&nbsp;&nbsp; ${section_3.cards.card3.discription.par}</p>

</div>
</div>

</div>
</div>
`