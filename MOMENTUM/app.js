const loginForm = document.querySelector("#login-form");
const logninInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    
}

function handleLinkClick(event) {
    event.preventDefault(); 
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// eventlistener를 내가 실행하는 것이 아니라 브라우저가 해주는 것이다.
// 4.3 강의 비몽사몽 ..
