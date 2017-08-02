function rolecolor(event){
    var roles = document.getElementsByClassName("role");
    for (var i = 0; i < roles.length; i++) {
        roles[i].style.backgroundColor = "rgb(116, 120, 120)";
    }
    event.target.style.backgroundColor= "#353535";
}
