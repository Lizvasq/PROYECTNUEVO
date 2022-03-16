
let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
	let scrollTop = document.documentElement.scrollTop;
	for(var i = 0; i < animado.length; i++){

		let alturaAnimado = animado[i].offsetTop;

		if (alturaAnimado -500 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add("mostrarArriba");
		}  
	}
}

window.addEventListener('scroll', mostrarScroll);


let animado2 = document.querySelectorAll(".animado2");

function mostrarScroll2(){
	let scrollTop = document.documentElement.scrollTop;
	for(var i = 0; i < animado2.length; i++){

		let alturaAnimado2 = animado2[i].offsetTop;

		if (alturaAnimado2 -700 < scrollTop) {
			animado2[i].style.opacity = 1; 
			animado2[i].classList.add("mostrarAbajo");
		}
	}
}

window.addEventListener('scroll', mostrarScroll2);


let animado3 = document.querySelectorAll(".animado3");

function mostrarScroll3(){
	let scrollTop = document.documentElement.scrollTop;
	for(var i = 0; i < animado3.length; i++){

		let alturaAnimado3 = animado3[i].offsetTop;

		if (alturaAnimado3 -650 < scrollTop) {
			animado3[i].style.opacity = 1; 
			animado3[i].classList.add("mostrarIzquierda");
		}
	}
}

window.addEventListener('scroll', mostrarScroll3);

let animado4 = document.querySelectorAll(".animado4");

function mostrarScroll4(){
	let scrollTop = document.documentElement.scrollTop;
	for(var i = 0; i < animado4.length; i++){

		let alturaAnimado4 = animado4[i].offsetTop;

		if (alturaAnimado4 -650 < scrollTop) {
			animado4[i].style.opacity = 1; 
			animado4[i].classList.add("mostrarDerecha");
		}
	}
}

window.addEventListener('scroll', mostrarScroll4);


// correo
$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
