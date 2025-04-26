// Initialize EmailJS
emailjs.init("TvLSBIc5JL2LNjO80");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_tt6uk9b", "template_cwhxf1f", form)
      .then(() => {
        console.log("Message sent. Showing SweetAlert2...");
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: '✅ Your message has been successfully sent.',
          confirmButtonColor: '#4CAF50',
          background: '#f0f9f5',
          iconColor: '#4CAF50'
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Sending Failed',
          text: '❌ Could not send message. Please try again later.',
          confirmButtonColor: '#e74c3c',
          background: '#fff0f0',
          iconColor: '#e74c3c'
        });
      });
  });
});
