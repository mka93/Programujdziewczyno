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

    var more = document.querySelectorAll(".more");

    for (var j = 0; j < more.length; j++) {
        more[j].style.display = "none";
    }

    var buttons = document.querySelectorAll(".read-more");
    //console.log(buttons);

    for (var k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener('click', function () {
            //console.log('działa'); // To powinnaś zobaczyć w konsoli po kliknięciu w pierwszy przycisk
            var textArea = this.previousElementSibling;

            if (textArea.style.display === 'none' || textArea.style.display === '') {
                textArea.style.display = 'block';
                this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } else {
                textArea.style.display = 'none';
                this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }
        });
    }

    var edge = document.querySelector(".navbar");
    //edge.style.borderBottom = "3px solid black";    
    window.addEventListener('scroll', function () {
        //console.log('działa przy scrollu');
        edge.style.borderBottom = "3px solid #7f7f7f";
    });
    
    
    var back = document.querySelector(".back-button");
    back.addEventListener("click", function(){
        window.scroll(0,0);
    })



});
