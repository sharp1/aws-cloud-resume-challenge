<<<<<<< HEAD
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5xvqx57wjroqv6yp32eucyueia0zvaka.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

=======
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://5xvqx57wjroqv6yp32eucyueia0zvaka.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

>>>>>>> a4514eb (Initial commit)
updateCounter();