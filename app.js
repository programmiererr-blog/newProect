const navbar={
    logo:"LogoNav",
    home:"home",
    about:"about",
    contact:"contact",
    login:"login",
    signup:"signup",
    logout:"logout"
}

const logs = document.querySelector('.logs'),
    buttons = document.querySelector('.buttons');

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
