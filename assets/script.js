// const temp = document.getElementById("viewTemplate");
// add nsfw art toggle

// roulette with screamer chance  

//get rid of viewLeft or viewRight depending on index in list
let artIndex;
const thumbList = document.getElementsByClassName("art");
const artList = [];
for (let i = 0; i < thumbList.length; i++) {
    path = getArtPath(thumbList[i])
    artList.push(path);
}

function getArtPath(art)
{
    const thumbPath = (art.getAttribute('src'));
    let path = thumbPath.replace("-thumb","");
    if (path.includes("png-")) {
        path = path.replace("png-","");
        path = path.replace("jpg","png");
    }
    return path;
}

function swapAdBlockWidget()
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

function checkArtIndex(){
    if (artIndex === 0) {
        console.log("disable left");
        document.getElementById("viewLeft").style.display="none";
    }
    else if (artIndex === artList.length-1) {
        console.log("disable right");
        document.getElementById("viewRight").style.display="none";
    }
    else {
        document.getElementById("viewRight").style.display="";
        document.getElementById("viewLeft").style.display="";
    }
}

function openImage(art)
{
    const path = getArtPath(art)
    console.log(path);

    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);

    document.getElementById("artpiece").setAttribute('src', path);

    for (let i = 0; i < artList.length; i++) {
        if (artList[i] === path) {
            artIndex = i;
            console.log("path found!!!!!! at index of", artIndex);
            checkArtIndex();
            return;
        } 
    }
    console.log("path not found");
}

function changeArtImage(d)
{
    if (d === 1) {
        artIndex -= 1;
    }
    if (d === 2) {
        artIndex += 1;
    }
    console.log(artIndex);
    checkArtIndex();
    document.getElementById("artpiece").setAttribute('src', artList[artIndex]);
    
}

function closeArtViewer()
{
    document.getElementById('artViewer').remove();
}
document.getElementById("fake1").style.display = localStorage.getItem("ads");
document.getElementById("fake2").style.display = localStorage.getItem("ads");
if (localStorage.getItem("ads") === "none") {
    document.getElementById("toggleAdImg").setAttribute('src', "assets/widgets/enable_ads.gif");
}