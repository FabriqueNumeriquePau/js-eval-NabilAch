console.log("Go Chuck !");


let okChuck = document.querySelector('main > section > aside > div');

okChuck.addEventListener('mousemove', function () {

    okChuck.style.borderRadius = "0%";

});

okChuck.addEventListener('mouseleave', function () {
    okChuck.style.borderRadius = "50%";
});

