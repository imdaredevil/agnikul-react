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
            $(".custom-modal-out").addClass("show");
            $(".body").css("overflow-y", "hidden");
        });

        $(".close-icon").click(function () {
            $(".custom-modal-out").removeClass("show");
            $(".body").css("overflow-y", "scroll");
        });


    });





}