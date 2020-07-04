import $ from 'jquery';

var diff = 0.25;
var upId, downId;

function setTransform(value) {
    $(".home__right-within").css("transform", "translateY(" + value + "%)");
}

function getTransform() {
    var value = $(".home__right-within").css("transform");
    value = value.split(",")[5];
    value = value.split(")")[0];

    var height = $(".home__right-within").css("height");
    height = height.split("p")[0];
    height = Number.parseFloat(height);
    value = Number.parseFloat(value);
    value = (value / height) * 100;
    return value;

}





function moveUp() {

    var curr = getTransform();
    if (curr > -65) {
        curr -= diff;
        setTransform(curr);
    }
    upId = requestAnimationFrame(moveUp);
}


function moveDown() {

    var curr = getTransform();
    if (curr < 0) {
        curr += diff;
        setTransform(curr);
    }
    downId = requestAnimationFrame(moveDown);
}


export default function ScrollHover() {

    $(document).ready(function () {

        $("body").removeClass("products");
        $(".first-row").addClass("home__first-row");
        $(".book__terms__link").click(function () {
            $(".book__modal__out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".book__close__icon").click(function () {
            $(".book__modal__out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });

        $(".modal-show").click(function () {
            var fields = document.querySelectorAll(".form-control-name");
            for(var i=0;i<fields.length;i++)
            {
                let field = fields[i];
                if(!field.classList.contains("selected"))
                {
                    $(".form-warning").css("display","block");
                    return;
                }
            }
            $(".form-warning").css("display","none");
            $(".home__modal__out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".home__close__icon").click(function () {
            $(".home__modal__out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });



        // $("#location .dropdown-item").click(function () {
        //     document.getElementById("location-field").innerHTML = this.innerHTML;
        //     if (!document.getElementById("location-field").classList.contains("selected"))
        //         document.getElementById("location-field").classList.add("selected");

        // });
        // $("#inclination .dropdown-item").click(function () {
        //     document.getElementById("inclination-field").innerHTML = this.innerHTML;
        //     if (!document.getElementById("inclination-field").classList.contains("selected"))
        //         document.getElementById("inclination-field").classList.add("selected");

        // });
        // $("#payload .dropdown-item").click(function () {
        //     document.getElementById("payload-field").innerHTML = this.innerHTML;
        //     if (!document.getElementById("payload-field").classList.contains("selected"))
        //         document.getElementById("payload-field").classList.add("selected");

        // });
        $(".home__right-image").hover(
            function () {
                cancelAnimationFrame(downId);
                upId = requestAnimationFrame(moveUp);
            },
            function () {
                cancelAnimationFrame(upId);
                downId = requestAnimationFrame(moveDown);
            }
        );
    });



}