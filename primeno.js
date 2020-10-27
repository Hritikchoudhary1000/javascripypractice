function check_prime(n){
    var flag=true;
    for(var i=2 ;i<n;i++){
        if(n<=1){
            flag=false;
            break;
        }
        else if (n==2||n==3||n==5){
            flag=true;
            break;

        }
        else if(n%i==0){
            flag=false;
            break;
        }
    }
    return flag;
}
function confirm_prime(n){
    if(check_prime(n)){
        console.log(`${n} is a prime number`);
    }
    else{
        console.log(`${n} is not a prime number`);
    }
}

/*print all prime no from 2 to n*/
function print_prime(n){
    var prime_arr=[]
    for(var i=2;i<=n;i++){
        if(check_prime(i)){
            prime_arr.push(i)
            
        }
    }
    console.log(prime_arr)
    
} 
print_prime(100)
