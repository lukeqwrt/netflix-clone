document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("mail").value = localStorage.getItem("textValue")
    const authen = firebase.auth();
    const mailField = document.getElementById("mail")
    const passwordField = document.getElementById("password")
    const displayNameField = document.getElementById("displayName")
    const signUp = document.getElementById("signUp");

    const signUpFunction = () => {
      firebase.auth().createUserWithEmailAndPassword(mailField.value, passwordField.value).then(auth => {
          window.alert("Enjoy Watching!!")
          console.log("enjoy watching")
          window.location.assign('./login.html')

      }).catch(error => {
        console.log(error.message)
      })
    }
    // const container = document.getElementById('container')

    signUp.addEventListener('click', signUpFunction);



    // firebase.auth().onAuthStateChanged(user => {
    //     if(user){
    //       //  console.log(user)
    //       //  console.log(user.email)
    //       //  window.location.assign('./home.html')
    //     }
    //     else{

    //     }
    // })
})

console.log("finish")