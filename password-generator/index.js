const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","&","*","-","_","+","="
];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generatePass = document.getElementById("generate-pass")
const copyMessage = document.getElementById("copy-message");


generatePass.addEventListener("click", () => {
  if(passwordOne.value.length === 15 && passwordTwo.value.length === 15){
    passwordOne.value = ""
    passwordTwo.value = ""
    randomCharGenerator()
  }else{
    randomCharGenerator()
  }
})

function randomCharGenerator() {
    for(let i = 0; i < 15; i++){
    let randIndexOne = Math.floor(Math.random() * characters.length)
    let randIndexTwo = Math.floor(Math.random() * characters.length)
    let chosenCharOne = characters[randIndexOne]
    let chosenCharTwo = characters[randIndexTwo]
    passwordOne.value += chosenCharOne
    passwordTwo.value += chosenCharTwo
  }
}

passwordOne.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordOne.value);

    copyMessage.textContent = "Password copied!";

    setTimeout(() => {
        copyMessage.textContent = "";
    }, 900);
});

passwordTwo.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordTwo.value);

    copyMessage.textContent = "Password copied!";

    setTimeout(() => {
        copyMessage.textContent = "";
    }, 900);
});