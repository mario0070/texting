
const togglePassword2 = document.querySelector('#tg1');
const password2 = document.querySelector('#password1');


  togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


const togglePassword3 = document.querySelector('#tg2');
const password3 = document.querySelector('#password2');


  togglePassword3.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
    password3.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



var fname=document.getElementById("fname");
var lname=document.getElementById("lname")
var login=document.getElementById("btn1")
var form=document.getElementById("form")
var pass1=document.getElementById("password1")
var pass2=document.getElementById("password2")
var email=document.getElementById("email")
var username=document.getElementById("username")
form.onsubmit=()=>{return false}

login.addEventListener("click",()=>{
    console.log("yeah")
    if(fname.value !="" && lname.value !="" && email.value !="" && username.value !="" && pass1 !="" && pass2 !=""){
        // fname.classList.add("valid")
        // setTimeout(()=>{
        //     fname.classList.remove("valid")
        // },2500)

        // lname.classList.add("valid")
        // setTimeout(()=>{
        //     lname.classList.remove("valid")
        // },2500)


    }else{
        if(fname.value ==""){
            fname.classList.add("invalid")
            setTimeout(()=>{
                fname.classList.remove("invalid")
            },2500)
        }

        if(lname.value ==""){
            lname.classList.add("invalid")
            setTimeout(()=>{
                lname.classList.remove("invalid")
            },2500)
        }

        if(email.value ==""){
            email.classList.add("invalid")
            setTimeout(()=>{
                email.classList.remove("invalid")
            },2500)
        }

        if(username.value ==""){
            username.classList.add("invalid")
            setTimeout(()=>{
                username.classList.remove("invalid")
            },2500)
        }

        if(pass1.value ==""){
            pass1.classList.add("invalid")
            setTimeout(()=>{
                pass1.classList.remove("invalid")
            },2500)
        }

        if(pass2.value ==""){
            pass2.classList.add("invalid")
            setTimeout(()=>{
                pass2.classList.remove("invalid")
            },2500)
        }

    
        
    }
})