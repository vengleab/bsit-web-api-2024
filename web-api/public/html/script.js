function login(event) {
  const form = event.target;
  if (!form.password.value || !form.email.value) {
    alert("Please input all required fields");
  }

  const password = form.password.value;
  const email = form.email.value;

  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    })
  })
}
