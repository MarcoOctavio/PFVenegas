document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Capturar los valores de los inputs
    const email = document.getElementById('inputEmail4').value;
    const password = document.getElementById('inputPassword4').value;
    const address = document.getElementById('inputAddress').value;
    const address2 = document.getElementById('inputAddress2').value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;
    const zip = document.getElementById('inputZip').value;
    const receiveEmails = document.getElementById('gridCheck').checked;

    // Validaciones simples
    if (!email || !password || !address || !city || !state || !zip) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
      email,
      password,
      address,
      address2,
      city,
      state,
      zip,
      receiveEmails
    };

    // Aquí puedes enviar los datos a un servidor o procesarlos como desees
    console.log('Datos del formulario:', formData);

    // Simulación de registro exitoso
    alert("Registro exitoso! Bienvenido a la comunidad.");

    // Restablecer el formulario (opcional)
    this.reset();
  });