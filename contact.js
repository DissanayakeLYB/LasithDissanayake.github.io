function SendMail() {
    var params = {
        name: document.getElementById("full-name").value,
        email: document.getElementById("email-id").value,
        message: document.getElementById("message-feedback").value,
    }

    emailjs.send("service_rrqigwi", "template_j0017sv", params).then(function (res) {
        alert("Thank you for the feedback!");
    });
}
