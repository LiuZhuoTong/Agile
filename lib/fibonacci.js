function fibonacci(n){
    if(n>2){
        return fibonacci(n-2)+fibonacci(n-1);
    }
    return 1;
}
module.exports=fibonacci;
//输入1返回1
//输入2返回1
//输入3返回2（1+1）