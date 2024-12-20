/*Botones Ingreso y Registro*/
document.addEventListener('DOMContentLoaded', () => {

    const btnIngresar = document.getElementById('btn-ingresar');
        btnIngresar.addEventListener('click',   () =>   {
            window.location.href='../src/pages/login.html';
    });

    const btnRegistrar = document.getElementById('btn-registrar');
        btnRegistrar.addEventListener('click',  () =>   {
            window.location.href='../src/pages/register.html';
    });

    const btnRegresar   =   document.getElementById('btn-regresar');
        btnRegresar.addEventListener('click',   () =>{
            window.history.back();
        });
});

/*Menú de hamburguesa (aún en desarrollo)*/
const menuToggle    =   document.getElementById('menu-toggle');
const menu  =   document.getElementById('menu');

menuToggle.addEventListener('click', () =>{
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

/*Login (aún en desarrollo)*/
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if (username === '' || password === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        
        alert('Iniciando sesión...');
        
    }
});
