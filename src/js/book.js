import $ from 'jquery';



export default function Init() {
    $(document).ready(function(){
        $("body").removeClass("products");

        $("#location .dropdown-item").click(function() {
            document.getElementById("location-field").innerHTML = this.innerHTML;
            if(!document.getElementById("location-field").classList.contains("selected"))
    document.getElementById("location-field").classList.add("selected");

        });
        $("#inclination .dropdown-item").click(function() {
            document.getElementById("inclination-field").innerHTML = this.innerHTML;
            if(!document.getElementById("inclination-field").classList.contains("selected"))
    document.getElementById("inclination-field").classList.add("selected");

        });
        $("#payload .dropdown-item").click(function() {
            document.getElementById("payload-field").innerHTML = this.innerHTML;
            if(!document.getElementById("payload-field").classList.contains("selected"))
    document.getElementById("payload-field").classList.add("selected");

        });
        $("#country .dropdown-item").click(function() {
            document.getElementById("country-field").innerHTML = this.innerHTML;
            if(!document.getElementById("country-field").classList.contains("selected"))
    document.getElementById("country-field").classList.add("selected");

        });


    });


   
    

}