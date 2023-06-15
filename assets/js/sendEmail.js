

  function validateForm() {
    var name=document.getElementById("name").value  
    var email=document.getElementById("email").value
    var subject=document.getElementById("subject").value
    var message=document.getElementById("message").value

    if (name.trim() == "") {
      alert("Please enter your name");
      return false;
    }

    // Check if email field is empty
    if (email.trim() == "") {
      alert("Please enter your email");
      return false;
    }

    // Check if email is in correct format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (subject.trim() == "") {
      alert("Please enter the subject");
      return false;
    }

    if (message.trim() == "") {
      alert("Please enter your message");
      return false;
    }


    const serviceID = "service_l8vbryh";
    const templateID = "template_ttkxz5x";

    // Sending email using EmailJS
    var templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then(function(response) {
        alert("Email sent successfully");
      }, function(error) {
        alert("Email send error:", error);
        // You can display an error message or handle the error as needed
      });

    return false; // Prevent form submission
  }
