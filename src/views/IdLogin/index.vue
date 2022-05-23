<template>
    <div class="login-template">
        <h1>Bem vindo!</h1>
        <input  type="text" class="inputLogin"  id="inputEmail" placeholder="Digite seu login" maxlength="40">
        <input type="password" class="inputSenha" id="inputSenha"  name="senha" placeholder="Digite sua senha" maxlength="38">
        
        <button class="botao" id="btnLogin">Login</button>
        <a href="#">Esqueceu a senha?</a>
        <a href="#">Cadastre-se</a>
    </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js"></script>

<script>
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
</script>
<script>

const firebaseConfig = {
    apiKey: "AIzaSyDZtkZKZggEaAoEuRetwAR1YqGFBfVbcGc",
    authDomain: "fir-id-23a44.firebaseapp.com",
    projectId: "fir-id-23a44",
    storageBucket: "fir-id-23a44.appspot.com",
    messagingSenderId: "115625466933",
    appId: "1:115625466933:web:860f2d0f591b393a16657c",
    measurementId: "G-45L84JBHFY",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<style type="scoped">
.login-template{
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    margin: 100px auto;
    border-radius: 5px;
    box-shadow: 7px 7px 15px 15px rgba(0, 0, 0, 0.2)
}

h1{
    text-align: center;
}

.inputLogin, .inputSenha {
    width: 60%;
    padding: 10px;
    margin: 15px auto;
    border-radius: 15px;
    border: 1px solid #7530a6;
}

.botao {
    width: 60%;
    padding: 10px;
    margin: 15px auto;
    border-radius: 15px;
    background-color: #7530a6;
    color: white;
    font-weight: bold;
    border: none;
}

button:hover{
    cursor: pointer;
    background-color: linear-gradient(90deg, #333295, #7530a6);
}

a{
    text-align: center;
    padding: 5px;
    margin: 0 0 5px 0;
    text-decoration: none;
    color: linear-gradient(90deg, #333295, #7530a6);
}

a:hover{
    text-decoration: underline;
}

</style>