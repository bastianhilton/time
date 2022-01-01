// Top Navigation Side Menu

// Side Navigation Menu
window.onload = function(){
let showDropdown = document.getElementById("displayMenu");
let hideDropdown = document.getElementById("closeBtn");

showDropdown.onclick = function () {
    sidenav.style.display = "grid";
}

hideDropdown.onclick = function () {
    sidenav.style.display = "none";
}
}
// Top Navigation Dropdown

$(document).ready(function(){
    $("#profileIcon").click(function(){
        $("#dropdownMenu").show();
    });

    $("#dropdownMenu").click(function(){
        $(".lightdarkbtn").hide();
    });
});
    