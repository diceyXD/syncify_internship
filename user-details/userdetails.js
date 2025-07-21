document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-content');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = form.querySelector('[name="firstname"]').value;
    const lastname = form.querySelector('[name="lastname"]').value;
    const phonenumber = form.querySelector('[name="phonenumber"]').value;
    const email = form.querySelector('[name="email"]').value;
    const address = form.querySelector('[name="address"]').value;

   alert(`Name: ${firstname} ${lastname}\nPhone: ${phonenumber}\nEmail: ${email}\nAddress: ${address}`);
  });
});