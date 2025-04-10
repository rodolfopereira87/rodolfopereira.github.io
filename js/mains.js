const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/firefox1.png") {
        myImage.setAttribute("src", "imagens/firefox2.png");
    } else {
        myImage.setAttribute("src", "imagens/firefox1.png")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("nome", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
};

if (!localStorage.getItem("nome")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("nome");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
}

