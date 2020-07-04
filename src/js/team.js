import $ from 'jquery';


export default function Init() {

var curr = "teampage";
var curi = 0;
var cure;
var glo = 0;
var elements;
var indArray;



function setInitial(){
    $(".holder").each(function(index){
        $(this).attr("src",process.env.PUBLIC_URL + '/images/team_photos/' + (index + 1) + '.png');
    });
}

function selectBackground(){
    var rand = ((glo++) + elements.length) % 44;
    return process.env.PUBLIC_URL + '/images/team_photos/' + (rand + 1) + '.png';
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;

}
  

function loop() {

    //console.log(elements);
        
        cure = indArray[curi];
        var holder = elements[cure].querySelector(".holder");
        var holder2 = elements[cure].querySelector(".holder-2");
        holder2.src = holder.src;
        setTimeout(
        function(){
        holder.src = selectBackground();
        holder.classList.add("animated");
        curi++;
        curi  = curi % elements.length;
        setTimeout(function(){
            holder.classList.remove("animated");
            loop();
        },3000);
        },1000);
}

$(document).ready(function () {
    $("body").removeClass("products");
    $(".first-row").removeClass(".home__first-row");

    $(".book__terms__link").click(function () {
        $(".book__modal__out").addClass("show");
        $(".body").css("overflow-y", "hidden");
    });

    $(".book__close__icon").click(function () {
        $(".book__modal__out").removeClass("show");
        $(".body").css("overflow-y", "scroll");
    });
    setInitial();
    elements = document.querySelectorAll(".team__team-banner .col");
    indArray = Array(elements.length);
    for(var i=0;i<elements.length;i++)
        indArray[i] = i;
    indArray = shuffle(indArray);
    loop();
});

}