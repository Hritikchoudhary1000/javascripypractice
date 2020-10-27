function celsius_to_farhenhit(temperature){
    var celsius =temperature;
    var farhenhit = (celsius *(9/5))+32;
    return farhenhit;
}
function farhenhit_to_celsius(temperature){
    var farhenhit = temperature;
    var celsius = (farhenhit-32)*5/9;
    return celsius;
}
console.log(farhenhit_to_celsius(0))