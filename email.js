function sendEmail() {
  const templateId = 'template_3uawvce'; // Replace with your EmailJS template ID
  const emailParams = {
    to_name: 'Jatin', // Replace with recipient's name
    from_name: 'Mahi', // Replace with your name
    message_html: 'This is a test email sent using EmailJS!' // Replace with your email message
  };

  emailjs.send('service_bjkvund', templateId, emailParams)
    .then(function (response) {
      console.log('Email sent successfully:', response);
    }, function (error) {
      console.error('Email sending failed:', error);
    });
}


