function display() {
    let display_side_con = document.querySelector(".side-con");
    display_side_con.style.display = "block";

    let hide_nav_right = document.querySelector(".nav-right");
    hide_nav_right.style.display = "none";
}

function hide() {
    let hide_side_con = document.querySelector(".side-con");
    hide_side_con.style.display = "none";

    let display_nav_right = document.querySelector(".nav-right");
    display_nav_right.style.display = "block";
}
