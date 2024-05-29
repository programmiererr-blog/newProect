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
} 

const logs = document.querySelector('.logs'),
    buttons = document.querySelector('.buttons'),
    section1 = document.querySelector('.section1');


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
   