/*Check whether the no is palindrom or not*/ 
/*function check_palindrome(n){
   
    
}

/* print reverse */
function print_reverse(n){
    var rev=0;
    var no = n;
    while(no!=0){
        var a = no%10;
        rev=rev*10+a; //doubt
        no=no/10|0;
    }
    return rev;
}
function check_palindrome(n){
    var rev = print_reverse(n)
    if(rev==n){
        console.log("Palindrome Number");
    }
    else{
        console.log("Not a Palindrome Number")
    }
}
check_palindrome(321);
