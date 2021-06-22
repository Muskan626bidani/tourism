function checkpass() {
    var p1 = document.register.pass.value
    var p2 = document.register.pass_confirm.value
    if (p1 != p2) {
        alert('Passwords do not match!');
        location.reload();
    }
}

function moveDiv() {
    let divs = [...document.querySelectorAll(".step")];
    let old_active = divs.findIndex(x => x.classList.contains("current"));
    new_active = (old_active + 1) % divs.length;
    divs[old_active].classList.remove("current");
    divs[new_active].classList.add("current");

    let div2 = [...document.querySelectorAll(".divBlock")];
    let old_inactive = div2.findIndex(x => x.classList.contains("active"));
    new_inactive = (old_inactive + 1) % div2.length;
    div2[old_inactive].classList.remove("active");
    div2[new_inactive].classList.add("active");
}

function previous() {
    let divs = [...document.querySelectorAll(".step")];
    let old_active = divs.findIndex(x => x.classList.contains("current"));
    new_active = (old_active - 1) % divs.length;
    divs[old_active].classList.remove("current");
    divs[new_active].classList.add("current");

    let div2 = [...document.querySelectorAll(".divBlock")];
    let old_inactive = div2.findIndex(x => x.classList.contains("active"));
    new_inactive = (old_inactive - 1) % div2.length;
    div2[old_inactive].classList.remove("active");
    div2[new_inactive].classList.add("active");
}