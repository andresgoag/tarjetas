let botonesPassword_HTML = document.getElementsByClassName("form-password-group__show-password");

if (botonesPassword_HTML.length > 0) {
    let botonesPassword = Array.from(botonesPassword_HTML)
    
    botonesPassword.forEach((boton) => {
        boton.addEventListener('click', (evento) => {
            let contenedor = evento.currentTarget.parentElement
    
            let input = contenedor.querySelector('.form-password-group__input')
    
            if (input.type == 'password') {
                input.type = "text"
            } else {
                input.type = "password"
            }
        });
    });
}
