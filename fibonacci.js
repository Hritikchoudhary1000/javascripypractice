function recursive_fibnacci(n){
    if(n<=1){
        return n;
    }
    else{
        return recursive_fibnacci(n-1)+recursive_fibnacci(n-2);
    }
}
console.log(recursive_fibnacci(9));


function dynamic_programming_fib(n){
    var num1=0;
    var num2=1;
    if(n<=1){
        return n;
    }
    else{
        for(var i=2;i<=n;i++){
            var sum = num1+num2;
            num1= num2;
            num2=sum;
        }
        return sum;
    }

}
console.log(dynamic_programming_fib(10))

function fibonacci_series(n){
    fibo_array=[];
    for(var i =0;i<=n;i++){
       fibo_array.push(dynamic_programming_fib(i))
    }
    return(fibo_array);
}
console.log(fibonacci_series(9));