window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

    window.requestAnimationFrame(updateLax)
    controlarBotonMenu();
    iniciar();
}

function iniciar(){
    document.getElementById("numero1").addEventListener("click", abrirVentana,false);
}

function controlarBotonMenu(){
//     // Look for .hamburger
//     var hamburger = document.querySelector(".hamburger");
//     // On click
//     hamburger.addEventListener("click", function() {
//         // Toggle class "is-active"
//         hamburger.classList.toggle("is-active");
//         // Do something else, like open/close menu
//   });


//https://github.com/tobiasahlin/animated-menu
    let menuLink = document.getElementById("menu-link");
    menuLink.addEventListener("click", abrirCerrarMenu);
}

function abrirCerrarMenu(e){
    if(e!=undefined)
        e.preventDefault();
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("menu-overlay").classList.toggle("open");
}
function abrirVentana()
{
    var w = window.open("numeros/numero1.html");
}



