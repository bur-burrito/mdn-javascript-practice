const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/lily.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

function setUserName() {
    const myName = prompt("please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `this is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem.apply("name");
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.onclick = () => {
    setUserName();
};
