/*function armstrong(n){
    var digits =  (function(n){
        var no_digits = 0;
        while(n!=0){ 
            n=n/10|0;
            no_digits+=1;
            }
        return no_digits;
    })();
    return digits;
}8/
console.log(armstrong(32)); */
function no_of_digits(n){
    var no_digits = 0;
        while(n!=0){ 
            n=n/10|0;
            no_digits+=1;
            }
    return no_digits;

}
function reverse_with_power(n,power){
    var sum=0;
    var no = n;
    while(no!=0){
        var a = no%10;
        sum+=(a**power); //doubt
        no=no/10|0;
    }
    return sum;
}
function armstrong(n){
    var digits = no_of_digits(n);
    var rev_sum = reverse_with_power(n,digits);
    if(n==rev_sum){
        console.log("It is a armstrong number")
    }
    else{
        console.log("It is not a armstrong number")
    }
}
armstrong(1543);