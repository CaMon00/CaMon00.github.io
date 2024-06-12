const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fat.png") {
        myImage.setAttribute("src", "images/angry.png");
    } else {
        myImage.setAttribute("src", "images/fat.png");
    }
};


document.querySelector("img").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `See the beauty of this website, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `See the beauty of this website, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};