const form = document.querySelector(".login-form");

form.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const elemForm = event.currentTarget.elements;

  const mail = elemForm.email.value;

  const password = elemForm.password.value;

  if (mail === "" || password === "") {
    return window.alert("Все поля должны быть заполнены!");
  }

  const dataForm = {
    mail,
    password,
  };

  console.log(dataForm);

  event.currentTarget.reset();
}
