
// Funtion that manage the mobile button menu
export default function navbarButton(){
    const $btnMneu = document.getElementById("menu-btn"),
        $menu = document.querySelector(".nav-menu ul")
        
        //Add an remove the hambuerger menu
        $btnMneu.addEventListener("click", e =>{
            $btnMneu.firstElementChild.classList.toggle("none")
            $btnMneu.lastElementChild.classList.toggle("none")
            $menu.classList.toggle("is-active")
        })
        
        //Manage the button icon behavior when a nav link is cliked
    document.addEventListener("click", e =>{
        if(!e.target.matches(".nav-menu a")) return false
    
        $btnMneu.firstElementChild.classList.remove("none")
        $btnMneu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active")
    });    
};