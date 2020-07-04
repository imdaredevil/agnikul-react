import $ from 'jquery';



export default function Init() {
    $(document).ready(function () {
        $("body").removeClass("products");
        $(".first-row").removeClass("home__first-row");

        $("#country .dropdown-item").click(function () {
            document.getElementById("country-field").innerHTML = this.innerHTML;
            if (!document.getElementById("country-field").classList.contains("selected"))
                document.getElementById("country-field").classList.add("selected");

        });

        $(".book__terms__link").click(function () {
            $(".book__modal__out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".book__close__icon").click(function () {
            $(".book__modal__out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });


    });





}