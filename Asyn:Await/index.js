// ///CALLBACK!!!!!!!!!!!!!!!!!!!!🤬
// // call backs are passing a function as an argument for another function

// console.log("Before");
// getUser(1,(user)=>{
//         console.log("User",user);
//     });
// console.log("After");

// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log("Reading User from database....");
//         callback({id:id, gitHubUserName:"Dennis"});
//     },2000);
// };
// function getRepository(user,callback){
//     setTimeout(()=>{
//         const repo = ["repo1","repo2","repo3"];
//     },3000);
//     callback()
// }
