emailjs.init("c6fMK7cKe2DOpGncK");

const templateParams = {
    email: {email},
    message: {message},
};

emailjs.send("service_rrqigwi", "template_j0017sv", templateParams)
    .then((response) => {
        console.log("Email sent successfully:", response);
    })
    .catch((error) => {
        console.error("Email sending failed:", error);
    });
