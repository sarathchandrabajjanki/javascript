var a = 10
var b=20
var c=30
if (a>b && a>c) {
    console.log("a is greater");    
}
else if (b>a && b>c){
    console.log("b is greater");
    
}else{
   console.log("c is greater");
    
}

var a=100
var b=20
var c=30

var result=a>b && a>c ? "a is greater":b>a && b>c ? "b is greater":"c is greater"
console.log(result);

