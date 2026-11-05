
const stipend = document.getElementById("stipend");
const amount = document.getElementById("amount");

stipend.addEventListener("input", function () {
    amount.textContent = stipend.value;
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Your application has been submitted successfully!");
});
