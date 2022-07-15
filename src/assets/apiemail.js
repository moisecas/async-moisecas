const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form, 
        headers: {
            'Accept': 'application/json',
        }
    })
    if(response.ok){ //en caso de que la respuesta sea correcta
        this.reset(); //limpia el formulario
        const data = await response.json(); //obtiene el json de la respuesta
        Swal.fire({ //muestra una alerta con los datos obtenidos
            title: 'Datos registrados',
            text: `Nombre: ${data.nombre} \nId: ${data.id} \nCorreo: ${data.correo} \nTelefono: ${data.telefono}`,
            icon: 'success'
        })
    }
}