function SendMail(){
    var params = {
        name : document.getElementById("full-name").value,
        email : document.getElementById("email-id").value,
        message : document.getElementById("message-feedback").value,
    }

    emailjs.send("service_rrqigwi", "template_j0017sv", params).then(function(res){
        var thankYouMessage = document.getElementById("thank-you-message");
            thankYouMessage.style.display = "block";

        document.getElementById("full-name").value = "";
        document.getElementById("email-id").value = "";
        document.getElementById("message-feedback").value = "";

        onsole.log("Email sent successfully:", res);
        })
        .catch(function (error) {
            console.error("Email sending failed:", error);
        });
}