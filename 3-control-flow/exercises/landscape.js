let landscape = isLandscape(30, 50);
console.log(landscape)

function isLandscape(width, height){
    return(width > height) ? ("is Landscape") : ("is portrait");
}