const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`
}

function loadName(){
    const currnetUser = localStorage.getItem(USER_LS);
    if(currnetUser===null){
        askForName();
    } else{
        paintGreeting(currnetUser);
    }
}
function init(){
    loadName();
}
init();