//DOM (document object model) api
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // tutaj będziemy umieszczać kod ze wszystkich zadań

    var menuList = document.querySelectorAll('.nav-list > li'); //szukanie tylko dzieci! żadnych wnuczków
    console.log(menuList); //mamy tutaj tablice!

    for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseover", function () {
            //console.log("hurra");
            var dropdown = this.querySelector(".dropdown");
            //console.log(dropdown);
            if (dropdown != null) {
                dropdown.style.display = "block";
            }
        });
    }

 for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseout", function () {
            //console.log("hurra");
            var dropdown = this.querySelector(".dropdown");
            //console.log(dropdown);
            if (dropdown != null) {
                dropdown.style.display = "none";
            }
        });
    }
    
    
    
});
