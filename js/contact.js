document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  };

  console.log("Form Data", data);
  // sendToSalesforce(data);
});
