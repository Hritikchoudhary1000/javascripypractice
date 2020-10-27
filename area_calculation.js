var figure=function(){
    console.log(`1 for circle`+"\n"+`2 for rectangle`+"\n"+`3 for square`+"\n"+`4 for triangle`);
    var x=parseInt(prompt("Enter the value"));
    
    return x;

}
var dimensions=[12,23];
function area_calculation(figure,dimensions){
    var result;
    switch(figure){
        case 1:
            result = 3.14*dimensions[0]*dimensions[0];
            break;
        case 2:
            result = dimensions[0]*dimensions[1];
            break;
        case 3:
            result = dimensions[0]*dimensions[1];
            break;
        case 4:
            result = (dimensions[0]*dimensions[1]);
            break;

    }
    return result;
}
console.log(area_calculation(figure,dimensions));
