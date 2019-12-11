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


    // Web Menu: https://github.com/tobiasahlin/animated-menu
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



