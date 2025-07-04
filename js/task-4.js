const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = userForm.elements.email.value.trim();
  const password = userForm.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const userFormData = {email, password};

  console.log(userFormData);
  userForm.reset();
});
