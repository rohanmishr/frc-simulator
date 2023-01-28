function Point(x, y){
    this.x = x;
    this.y = y;
}

var path = [];

var pointIndex = 0;
function AddPoint(x, y){
    path[pointIndex] = new Point(x, y);
}

function downloadPathFile(){

}

function readPathFile(){
    var fileReader = new FileReader();
    fileReader.onload = function(){
        console.log(fileReader.result);
    }
    var rawFileData = fileReader.readAsText(document.getElementById("pathUpload").files[0]);
    for(var i = 0; i<rawFileData.length; i++){
        if(rawFileData.charAt(i) == "P" && rawFileData.charAt(i+1) == "A"){
            i=12;
            
        }else{}
        
    }
}

document.getElementById("pathUpload").addEventListener("change", readPathFile());

setInterval(function(){
    //write to "path.fpath" file

},1)

