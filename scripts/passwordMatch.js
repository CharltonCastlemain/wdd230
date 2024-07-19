document.addEventListener("DOMContentLoaded", function() {
    const pw1 = document.querySelector("#password");
    const pw2 = document.querySelector("#confirm_password");
    const message = document.querySelector("#formmessage");

    pw2.addEventListener("blur", checkPasswordMatch);

    function checkPasswordMatch() {
        if (pw1.value !== pw2.value) {
            message.textContent = "❗ Passwords DO NOT MATCH!";
            message.style.visibility = "visible";
            pw2.style.backgroundColor = "#fff0f3";
            pw2.value = "";
            pw2.focus();
        } else {
            message.style.visibility = "hidden";
            pw2.style.backgroundColor = "#fff";
        }
    }
});
