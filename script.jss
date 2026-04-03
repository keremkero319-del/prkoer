const SECRET_PIN = "8941"; // Hedef şifre bu!

function checkPassword() {
    const input = document.getElementById("pinInput").value;
    const message = document.getElementById("message");

    if (input === SECRET_PIN) {
        message.innerText = "✅ ERİŞİM ONAYLANDI! Sistem hacklendi.";
        message.style.color = "#3fb950";
    } else {
        message.innerText = "❌ HATALI PIN! Tekrar dene.";
        message.style.color = "#f85149";
    }
}
