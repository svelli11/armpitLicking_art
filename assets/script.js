const thumbList = document.getElementsByClassName("art");
// const artList
// const temp = document.getElementById("viewTemplate");


for (let i = 0; i < thumbList.length; i++) {
    console.log(thumbList[i]);
    
}
function changeImage()
{
    var img = document.getElementById("toggleAdImg");
    if (img.getAttribute('src') === "assets/widgets/enable_ads.gif") {
        img.setAttribute('src', "assets/widgets/disable_ads.gif");
    }
    else {
        img.setAttribute('src', "assets/widgets/enable_ads.gif");
    }
}

function toggleAds()
{
    var x = document.getElementById("fake1");
    if (x.style.display === "none") {
        x.style.display = "";
        localStorage.setItem("ads", "");
    } else {
        x.style.display = "none";
        localStorage.setItem("ads", "none")
    }
    var x = document.getElementById("fake2");
    if (x.style.display === "none") {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
}

function openImage(art)
{
    const thumbPath = art.getAttribute('src')
    const path = thumbPath.replace("-thumb","");
    console.log(path);
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    document.getElementById("artpiece").setAttribute('src', path);
    
}
document.getElementById("fake1").style.display = localStorage.getItem("ads");
document.getElementById("fake2").style.display = localStorage.getItem("ads");
if (localStorage.getItem("ads") === "none") {
    document.getElementById("toggleAdImg").setAttribute('src', "assets/widgets/enable_ads.gif");
}