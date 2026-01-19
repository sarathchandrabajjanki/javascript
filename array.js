// // // var a=[10,20,30,"king"]
// // // a.push(5)
// // // console.log(a);


// // // var b=[20,30,40,]
// // // b.pop()
// // // console.log(b);

// // // var c=[50,60,70]
// // // c.unshift(10)
// // // console.log(c);

// // // var d=[60,70,80]
// // // d.shift()
// // // console.log(d);
// // // async function fetchData() {
    
// // //     var data=await fetch("https://fakestoreapi.com/users")
// // //     var data1=await data.json()
// // //     console.log(data1);
    
// // // }
// // // fetchData()
// // var data={
// //     user:"sarathking",
// //     email:"sarath@gmail.com",
// //     pswd:"sarath@1"
// // }
// // async function postData() {
// //   try{
// //       var response=await fetch("https://crudcrud.com/api/8a4c6e9ed32b498c965bc8aeeab3f996/users",
// //         {method:"post",
// //          headers:{
// //             "content-type":"application/json"
// //             },
// //             body:JSON.stringify(data)
// //         }
// //     )
// //    if(response.ok){
// //     console.log("data send succesful");
// //     } 
// //     else{
// //         console.log("failed to send data");
        
// //     }
// //   }
// // catch{
// //     console.log("failed to send data");
// // }
// // }
// // postData()
// // var data=[
// //     {
// //         id:1,
// //         name:"sarath",
// //         email:"sarath143@gmail.com",
// //         psw:"950sar"
// //     },
// //     {
// //          id:2,
// //         name:"eswar",
// //         email:"eswar143@gmail.com",
// //         psw:"950eswar"

// //     }
// //     ,
// //      {id:1,
// //         name:"vara",
// //         email:"vara143@gmail.com",
// //         psw:"950220"}
// // ]
// var data1={id:1,
//         name:"vara",
//         email:"vara143@gmail.com",
//         psw:"950220"}
// async function postData() {
//     try{
//         var response =await fetch("https://crudcrud.com/api/8a4c6e9ed32b498c965bc8aeeab3f996/users",{
//             method:"post",
//             headers:{
//             "content-type":"application/json"
//             },
//             body:JSON.stringify(data1)
//         })
//         if(response.ok){
//             console.log("data send success");
            

//         }else{
//             console.log("failed to send data");
            
//         }
//         }
//         catch{
//             console.log("error in api");
            

//         }
    
// }
// postData()
var list={
    name:"eswar",
    age:"26",
    mail:"eswar@gmail.com",
    pswd:950535}
    async function pushData() {
        try {
             var dataEswar= await fetch("https://crudcrud.com/api/8a4c6e9ed32b498c965bc8aeeab3f996/users",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(list)
             })
             if(dataEswar.ok){
                console.log("data send succesful");
                
             }
             else{
                console.log("failed to send data");
                
             }

            
        }
         catch {
            console.log("error in api's");
            
            
        }
        
    }
    pushData()





