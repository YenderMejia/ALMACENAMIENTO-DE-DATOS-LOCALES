const clientForm = document.querySelector('#clientForm')
document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(el) {
        el.style.display = 'none';
    });

    // Cédula validation (9 digits)
    const cedula = document.getElementById('cedula').value;
    if (!/^\d{10}$/.test(cedula)) {
        valid = false;
        document.getElementById('cedulaError').textContent = 'Cédula debe contener 9 dígitos';
        document.getElementById('cedulaError').style.display = 'block';
    }

    // Apellidos validation (letters and spaces)
    const apellidos = document.getElementById('apellidos').value;
    if (!/^[a-zA-Z\s]+$/.test(apellidos)) {
        valid = false;
        document.getElementById('apellidosError').textContent = 'Apellidos solo deben contener letras y espacios';
        document.getElementById('apellidosError').style.display = 'block';
    }

    // Nombres validation (letters and spaces)
    const nombres = document.getElementById('nombres').value;
    if (!/^[a-zA-Z\s]+$/.test(nombres)) {
        valid = false;
        document.getElementById('nombresError').textContent = 'Nombres solo deben contener letras y espacios';
        document.getElementById('nombresError').style.display = 'block';
    }

    // Dirección validation (at least 5 characters)
    const direccion = document.getElementById('direccion').value;
    if (!/^.{5,}$/.test(direccion)) {
        valid = false;
        document.getElementById('direccionError').textContent = 'Dirección debe contener al menos 5 caracteres';
        document.getElementById('direccionError').style.display = 'block';
    }

    // Teléfono validation (10 digits)
    const telefono = document.getElementById('telefono').value;
    if (!/^\d{10}$/.test(telefono)) {
        valid = false;
        document.getElementById('telefonoError').textContent = 'Teléfono debe contener 10 dígitos';
        document.getElementById('telefonoError').style.display = 'block';
    }

    // Email validation (simple regex)
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Correo Electrónico no válido';
        document.getElementById('emailError').style.display = 'block';
    }

    if (valid) {
        document.getElementById('successMessage').textContent = 'Ingresado correctamente';
    }
    const Clientes = JSON.parse(localStorage.getItem('Cliente')) || []
    const isClienteRegistered = Clientes.find(Clientes => Clientes.cedula === cedula)
    if (isClienteRegistered){
        return alert('El cliente ya esta registrado!')
    }

    Clientes.push({cedula: cedula, apellidos: apellidos, nombres: nombres, direccion: direccion, telefono:telefono, email:email})
    localStorage.setItem('Clientes', JSON.stringify(Clientes))
    alert ('registro exitoso')
    window.location.href = 'index.html'
});