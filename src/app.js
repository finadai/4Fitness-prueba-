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
});


/*Menú hamburguesa*/
function toggleMenu() {
    const menu = document.getElementById("menu");
    const body = document.body;
  
   
    menu.classList.toggle("hidden");
  
    if (!menu.classList.contains("hidden")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }
  
  function closeMenu() {
    const menu = document.getElementById("menu");
    const body = document.body;
  
    
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      body.classList.remove("no-scroll");
    }
  }
  
  document.addEventListener("click", (event) => {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");
  
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
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
        
    };
});

const imagen    =   document.getElementById('logo');
imagen.addEventListener('click',    ()  =>  {
    window.location.href    =   '/public/index.html';
});