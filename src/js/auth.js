var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputSenha = document.getElementById('inputSenha');

btnLogin.addEventListener('click', function() {

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputSenha.value)
    .then((userCredential) => {
        // Signed in
        alert("Usuário conectado!");
        //window.location.replace('')
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

