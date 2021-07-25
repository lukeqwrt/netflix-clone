document.addEventListener("DOMContentLoaded", event => {
    const signInBTN = document.getElementById('signingIn');
    
    signInBTN.addEventListener('click', login)   
    
    function login(){
        var userEmail = document.getElementById('email').value
        var password = document.getElementById('password').value

        firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.errorMessage;

            window.alert("error: Incorrect password. Please try again")
        })
    }

    const placeEmail = document.getElementById("here")


    const heroContainer = document.getElementById('hero-container')
    const landing = document.getElementById('landing');
   firebase.auth().onAuthStateChanged(user => {
        if(user){
            
            landing.hidden = true;
            document.getElementById("signIn-container").hidden = false;


           placeEmail.innerHTML = `${user.email}`
           console.log(user.email)

        }
        else{
            document.getElementById("signIn-container").hidden = true;
            landing.hidden = false;

        }
    })


  
    const signout = document.getElementById("signout")

    signout.addEventListener('click', () => {
        firebase.auth().signOut();
        placeEmail.innerHTML = ""
    })
})

const userClicked = document.querySelector(".user-wrapper")
const dropDownContentUser = document.querySelector(".drop-down")
const iconDown = document.querySelector("#downIcon")
userClicked.addEventListener('click', () => {
    if(iconDown.classList.contains("fa-caret-down")){
        iconDown.classList.remove("fa-caret-down")
        iconDown.classList.add("fa-caret-up")

        dropDownContentUser.style.display = "block";
    }else{
        iconDown.classList.remove("fa-caret-up")
        iconDown.classList.add("fa-caret-down")

        dropDownContentUser.style.display = "none";
    }
})


window.addEventListener("scroll", function(){
    var header = document.querySelector('.navigation');
    header.classList.toggle("sticky", window.scrollY > 0)
})

console.log("done css")



window.addEventListener('load', () => {
    const loader =  document.querySelector('.loaderr');
    loader.classList.add("hidden")
})