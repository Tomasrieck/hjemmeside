var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(success => {
    status.innerHTML = "Tak for beskeden!";
    form.reset()
    status.classList.add('sendt');
  }).catch(error => {
    status.innerHTML = "Ups! Der skete en fejl.";
    status.classList.add('ejSendt');
  });
}
form.addEventListener("submit", handleSubmit)