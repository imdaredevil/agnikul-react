import $ from 'jquery';



export default function Init() {
    $(document).ready(function(){
        $("body").removeClass("products");

        $("#location .dropdown-item").click(function() {
            document.getElementById("location-field").innerHTML = this.innerHTML;
        });
        $("#inclination .dropdown-item").click(function() {
            document.getElementById("inclination-field").innerHTML = this.innerHTML;
        });
        $("#payload .dropdown-item").click(function() {
            document.getElementById("payload-field").innerHTML = this.innerHTML;
        });
        $("#country .dropdown-item").click(function() {
            document.getElementById("country-field").innerHTML = this.innerHTML;
        });


    });


   
    

}