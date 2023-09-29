emailjs.init("c6fMK7cKe2DOpGncK");

const templateParams = {
    email: "Your Email",
    message: "This is the email message content.",
  };
  
  emailjs.send("service_rrqigwi", "template_j0017sv", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
  