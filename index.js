const changeCatgories = () => {
    if(window.scrollY>=75){
        document.getElementById('menuCategories').classList.replace("menu-categories","togled-menu-categories");
    } 
    if(window.scrollY<=75){
        document.getElementById('menuCategories').classList.replace("togled-menu-categories","menu-categories");
    } 
}

window.addEventListener('scroll', changeCatgories);