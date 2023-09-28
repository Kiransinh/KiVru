function sendMail() {
  var parameters = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    country: document.getElementById("country"),
    message: document.getElementById("message").value,
  };
  const serviceId = "service_nkwypfe";
  const templateId = "template_lb82est";

  emailjs
    .send(serviceId, templateId, parameters)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("country").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message send successfully");
    })
    .catch((res) => console.log(err));
}
