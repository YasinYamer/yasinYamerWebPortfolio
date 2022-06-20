let menu = document.querySelector('.menu-icon');

menu.onclick = () =>{
    menu.classList.toggle("move");
}

//Email JS
function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let send = document.querySelector('.send-btn')
    
    send.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value== "" || email.value == "" ||msg.value== ""){
            emtyerror();
        }else {
            sendmail(name.value , email.value, msg.value)
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_ee77xc9","template_n6kxvis",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}

function emtyerror(){
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfuly!",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}
// Header Background Change On Scroll
let header = document.querySelector('header')

window.addEventListener('scroll',() =>{
    header.classList.toggle('header-active', window.scrollY>0);
})

//Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll',() =>{
   scrollTop.classList.toggle('scroll-active', window.scrollY>0);
})