//navigation bar
function dropNav() {
    let nav = document.querySelectorAll('.nav');
    for (let i = 0; i < nav.length; i++) {
        if (nav[i].style.display == 'none') {
            nav[i].style.display = 'block';
        } else {
            nav[i].style.display = 'none';
        }
    }
}

let logos = document.querySelectorAll('.logo');
for (let j = 0; j < logos.length; j++) {
    logos[j].addEventListener("click", dropNav)
}

//random cloud sizes function
function randomScale(min = 0.5, max = 1){
    return Math.random() * (max-min) + min;
}

document.getElementById("cloud1").style.transform = `scale(${randomScale()})`;
document.getElementById("cloud2").style.transform = `scale(${randomScale()})`;
document.getElementById("cloud3").style.transform = `scale(${randomScale()})`;
document.getElementById("cloud4").style.transform = `scale(${randomScale()})`;

var cloud1 = document.getElementById('cloud1');
var cloud2 = document.getElementById('cloud2');
var cloud3 = document.getElementById('cloud3');
var cloud4 = document.getElementById('cloud4');

//function for opacity of clouds
function changeOpacity(cloud){
    cloud.addEventListener('mouseenter', function() {
        cloud.style.opacity="0.4";
    });

    cloud.addEventListener("mouseleave", function(){
        cloud.style.opacity="0.85";
    });
}

changeOpacity(cloud1);
changeOpacity(cloud2);
changeOpacity(cloud3);
changeOpacity(cloud4);

