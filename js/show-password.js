let eye = document.querySelector(".form__password__input i");
let psswordInput = document.querySelector('#password');

eye.addEventListener("click" , function(){
    eye.classList.toggle("fa-eye-slash");
    eye.classList.toggle("fa-eye");

    let type = psswordInput.getAttribute("type")
    if(type==="password"){
        psswordInput.setAttribute("type" , "text");
    }else{
        psswordInput.setAttribute("type", "password");
    }
})