
document.addEventListener("DOMContentLoaded",()=>{
    const loginForm= document.querySelector("#login");
    const createAccountForm= document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click",(e)=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click",(e)=>{
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden")
    });
});

// function validate(){
//     var username=document.getElementById("user__email").value;
//     var password=document.getElementById("user__password").value;   
//     if(username==="gaurav" && password==="admin"){

// window.location = "http://www.google.com/"
//     }
//     else{
//         alert("Invalid information");
//         return;
//     }
// }
function validate(){
    window.location.replace("http://www.w3schools.com");
}