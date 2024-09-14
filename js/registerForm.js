let users = [];


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //inputs
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

    

    //añadir a lista de usuarios
    users.push(formData);
    const usersJSON = JSON.stringify(users);

    console.log('Usuarios registrados (JSON):', usersJSON);

    localStorage.setItem('users', usersJSON);

    alert('Registro exitoso. ¡Bienvenid@ a nuestra comunidad!');

    this.reset();
  });