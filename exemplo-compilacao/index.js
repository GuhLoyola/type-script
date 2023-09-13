function sendMessage(userName, isLogged) {
    console.log("Olá ".concat(userName, ". Você ").concat(!isLogged ? " não" : "", " pode logar."));
}
var userName = "Gustavo";
var isLogged = true;
sendMessage(userName, isLogged);
