// // // // // // function add(a,b){
// // // // // //     console.log(a+b);
// // // // // //     console.log(a*b);
// // // // // //     console.log(a%b);
// // // // // //     console.log(a-b);
// // // // // //     console.log(a/b);
// // // // // //     console.log(a,b);

    
    
    
// // // // // // }

 
// // // // // //  add(10,20)
// // // // // // // ////types of function
// // // // // // // 1.length        11.split
// // // // // // // 2.charAt        12.reverse
// // // // // // // 3.indexOf       13.join
// // // // // // // 4.includes      14.repeat
// // // // // // // 5.startswith    15.pad start
// // // // // // // 6.endswith      16.pad end
// // // // // // // 7.replace       17.sub string
// // // // // // // 8.touppercase   18.slice
// // // // // // // 9.tolowercase
// // // // // // // 10.trim
// // // // // // var s="sarath"
// // // // // // var S="SARATH"
// // // // // // var a="      king         "
// // // // // // console.log(s.length);
// // // // // // console.log(s.charAt(1));
// // // // // // console.log(s.indexOf("a"));
// // // // // // console.log(s.includes("sa"));
// // // // // // console.log(s.includes("as"));
// // // // // // console.log(s.startsWith("sa"));
// // // // // // console.log(s.startsWith("th"));
// // // // // // console.log(s.endsWith("th"));
// // // // // // console.log(s.endsWith("sa"));
// // // // // // console.log(s.replace("sa","ki"));
// // // // // // console.log(s.toUpperCase());
// // // // // // console.log(S.toLowerCase());
// // // // // // console.log(a.trim());
// // // // // // console.log(a);









// // // // // // function sarath(a,b){
// // // // // //     console.log(a/b);
// // // // // //     console.log(a%b);
    
    
// // // // // // }
// // // // // // sarath(2,10)
// // // // // // var a="sarathchandra"
// // // // // // console.log(a.toUpperCase());
// // // // // // var b="KING"
// // // // // // console.log(b.toLowerCase());
// // // // // // var k=[1,2,3,4,5,"javascript"]
// // // // // // console.log(k[5].toUpperCase());
// // // // // // var s={key:"sarath",
// // // // // //     sam:"king"
// // // // // // }
// // // // // // console.log(s.sam[1].toUpperCase());

// // // // // var a="godavari"
// // // // // var b="technology"
// // // // // console.log(a.length);
// // // // // console.log(typeof(a));
// // // // // console.log(a.charAt(2));
// // // // // console.log(a.indexOf("a"));
// // // // // console.log(b.includes("sa"));

// // // // var a="mother father"

// // // // console.log(a.split());
// // // // console.log(a.split(""));
// // // // console.log(a.split(" "));
// // // // console.log(a.split(" ").reverse());
// // // // console.log(a.split("").reverse("").join(" "));

// // // function str(a,b,c){
// // //     console.log(a.length,b.length,c.length);
// // //     console.log(b.charAt(1));
// // //     console.log(c.includes(a));
// // //     console.log(b.includes("g"));
    
    
// // // }
// // // str("sam","king","chandra")

// // // function str(a){
// // //     console.log(a.toUpperCase());
    
// // // }
// // // str("chandra")
// // // function str(a){
// // //     console.log(a.toLowerCase());

    
// // // }
// // // str("CHANDRA")
// // // function str(a){
// // //     console.log(a.startsWith("go"));
    
// // // }
// // // str("godavari")
// // // function str(b){
// // //     console.log(b.endsWith("th"));
    

// // // }
// // // str("sarath")
// // // // function str(a){
// // // //     console.log(a.includes(0));

    
// // // // }
// // // // str("king")

// // var a="          sarath chandra       "
// // console.log(a.length);
// // console.log(a.charAt(2));
// // console.log(a.indexOf("a"));
// // console.log(a.includes("sa"));
// // console.log(a.startsWith("sa"));
// // console.log(a.endsWith("ra"));
// // console.log(a.replace("chandra","sarath"));
// // console.log(a.toUpperCase());
// // console.log(a.toLowerCase());

// // console.log(a.trim());

// var a="java"
// console.log(a.repeat(3));
// var a="sarath"
// var b="chandra"
// var c=a.concat(b)
// console.log(c);

// var b="sarath"
// console.log(b.padEnd(8,"h")); 
// var c="chandra"
// console.log(c.padStart(11,"sarath"));
// var k="sowmya"
// console.log(k.substring(3));

function bignumber(a,b) {
    var result=a>b ? "a is big number": "b is big number"
    return result
    
}
console.log(bignumber(20,30));


for (var k = 1; k <=50; k++) {
    console.log(k);
    
    
}

for (let k = 50; k >=1 ;k--){
    console.log(k);
    

}
var a=50
var b=1
while (a>=b) {
    console.log(a,"a is bigger");
    a--
    
}