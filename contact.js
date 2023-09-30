function SendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_rrqigwi", "template_j0017sv", params).then(function(res){
        alert("Thank you for the feedback!" + res.status);
    })
}