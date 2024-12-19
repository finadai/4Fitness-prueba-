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


const menuToggle    =   document.getElementById('menu-toggle');
const menu  =   document.getElementById('menu');

menuToggle.addEventListener('click', () =>{
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});