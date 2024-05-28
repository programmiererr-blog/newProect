const navbar={
    logo:"LogoNav",
    home:"home",
    about:"about",
    contact:"contact",
    login:"login",
    signup:"signup",
    logout:"logout"
    
}
baza1={
    img1:'jpg/bir.jpg',
    name:"Ali Alimov",
    surname:"@alimardon",
    email:"alimardon@gamil.com",
    phoneNomber:"(77) 777 99 88",
    cytiy:"Tashkent"
}

const logs = document.querySelector('.logs'),
    buttons = document.querySelector('.buttons'),
    section1 = document.querySelector('.section1');

   logs.innerHTML=`
   <a href="#">${navbar.logo}</a>
   `
   buttons.innerHTML=`
   <a href="#">${navbar.home}</a>
   <a href="#">${navbar.about}</a>
   <a href="#">${navbar.contact}</a>
   <a href="#">${navbar.login}</a>
   <a href="#">${navbar.signup}</a>
   <a href="#">${navbar.logout}</a>
   
   `

   section1.innerHTML=`
   <img src="${baza1.img1}" alt="About">
   <h1>${baza1.name}</h1>
   <h2>${baza1.surname}</h2>
   <p>${baza1.email}</p>
   <p>${baza1.phoneNomber}</p>  
   <p>${baza1.cytiy}</p>
   
   
   `