const curso=document.getElementById("Curso");/*crea una variable constnate mediante el llamado del id*/
const info=document.getElementById("in");/*crea una variable constnate mediante el llamado del id*/
const info1=document.getElementById("in1");/*crea una variable constnate mediante el llamado del id*/
const contador=document.getElementById("contador");/*crea una variable constnate mediante el llamado del id*/
const contador1=document.getElementById("contador1");/*crea una variable constnate mediante el llamado del id*/
const contador2=document.getElementById("contador2");/*crea una variable constnate mediante el llamado del id*/
const contador3=document.getElementById("contador3");/*crea una variable constnate mediante el llamado del id*/
const relleno=document.getElementById("relleno");/*crea una variable constnate mediante el llamado del id*/
const relleno1=document.getElementById("relleno1");/*crea una variable constnate mediante el llamado del id*/
const relleno2=document.getElementById("relleno2");/*crea una variable constnate mediante el llamado del id*/
const relleno3=document.getElementById("relleno3");/*crea una variable constnate mediante el llamado del id*/
const logo=document.getElementById("logo");/*crea una variable constnate mediante el llamado del id*/
const info3=document.getElementById("in3")/*crea una variable constnate mediante el llamado del id*/
const logo1=document.getElementById("logo1");/*crea una variable constnate mediante el llamado del id*/
const info4=document.getElementById("in4");/*crea una variable constnate mediante el llamado del id*/
const menu=document.getElementById("menu");/*crea una variable constnate mediante el llamado del id*/
const menuu=document.getElementById("nav");/*crea una variable constnate mediante el llamado del id*/
/*evento sección cursos*/
curso.addEventListener("click",function(){/*llama a la consnate de curso y se anñade un evento que escucha cuando hace click*/
    info.style.display="block";/*la contante de info se convierte en tipo bloque*/
    info1.style.display="block";/*la contante de info1 se convierte en tipo bloque*/
})
logo.addEventListener("click",function(){/*llama a la constante logo y le añade un evento que lo escucha cuando hace click*/
    info3.style.display="block"/*la constante de info3 se convierte en tipo bloque*/
})
logo1.addEventListener("click",function(){/*llama a la constante logo1 y le añade un evento que lo escucha cuando hace click*/
    info4.style.display="block"/*la constante de info3 se convierte en tipo bloque*/
})
let numero=0;/*se cre uan variable de tipo let con valor 0*/
let numero1=0;/*se cre uan variable de tipo let con valor 0*/
let numero2=0;/*se cre uan variable de tipo let con valor 0*/
let numero3=0;/*se cre uan variable de tipo let con valor 0*/
window.addEventListener( "scroll", function () {/*llama a la ventana de la pagina y le anañde un evento que lo escucha cuando hace scroll*/
    let scrollPos = window.scrollY;/*se crea un avraible que es igual a la posiscion verticla de el scroll de la ventana*/
    if (scrollPos > 2250) {/*se cre un condicional que veifica si la vraiable esta en 2250px al hacer sroll*/
      relleno.style.height = "75%";/*la constante relleno subira hasta un 75%*/
      relleno1.style.height = "70%";/*la constante relleno1 subira hasta un 70%*/
      relleno2.style.height = "60%";/*la constante relleno2 subira hasta un 60%*/
      relleno3.style.height = "50%";/*la constante relleno3 subira hasta un 50%*/
      let intervalo = setInterval(function () {/*se crea una variable  que se le establece un intervalo*/
        if (numero < 75) {/*si la variaible es menos que 75*/
            numero++; /*el numero aumenta*/
            contador.innerText = numero +"%";/*el contador lee el valor de la variable numero */
        } else {/*condicional sino*/
            clearInterval(intervalo);/*frena el intervalo*/
        }
    }, 15); /*el intervalo se establece en un peridod de 15 segundos*/
    let intervalo1 = setInterval(function () {/*se crea una variable  que se le establece un intervalo*/
      if (numero1 < 70) {/*si la variaible es menos que 70*/
          numero1++;/*el numero aumenta*/  
          contador1.innerText = numero1 +"%";/*el contador1 lee el valor de la variable numero1 */ 
      } else {/*condicional sino*/
          clearInterval(intervalo1);/*frena el intervalo*/  
      }
  }, 15); /*el intervalo se establece en un peridod de 15 segundos*/   

  let intervalo2 = setInterval(function () {/*se crea una variable  que se le establece un intervalo*/
    if (numero2 < 60) {/*si la variable es menos que 60*/
        numero2++;/*el numero aumenta*/  
        contador2.innerText = numero2 +"%";/*el contador2 lee el valor de la variable numero2 */ 
        
    } else {/*condicional sino*/
        clearInterval(intervalo2); /*frena el intervalo*/ 
    }
}, 15); /*el intervalo se establece en un peridod de 15 segundos*/  

let intervalo3 = setInterval(function () {/*se crea una variable  que se le establece un intervalo*/
  if (numero3 < 50) {/*si la variable es menos que 50*/
      numero3++;/*el numero aumenta*/  
      contador3.innerText = numero3 +"%";/*el contador3 lee el valor de la variable numero3 */ 
      
  } else {/*condicional sino*/
      clearInterval(intervalo3); /*frena el intervalo*/  
  }
}, 15); /*el intervalo se establece en un peridod de 15 segundos*/  
   
}
});
const Switch = document.getElementById("Switch");/*crea una variable constnate mediante el llamado del id*/

  Switch.addEventListener("click", function () {/* ala constante switch se le añade un vento que lo escucha al hacer click*/
    document.body.classList.toggle("oscuro");/*al body se le "crea" la clase oscuro al hacer click en el label, convietineod la pagina en socuro*/
  });
  document.getElementById("boton").addEventListener("click", function() {/*se agrega un evento al boton que escucha cuanndo se hace click, en este caso muetra una ventana emergente con un mensaje*/
    alert("Gracias por visitar mi hoja de vida :)");/*aparece una ventan emergente con un mesaje dentro de ella*/
  });
   menu.addEventListener("click", function () {/* a la constante menu se le añade un evento que lo escucha cuando se hace click*/
    menuu.classList.toggle("visible");/*a la constante menuu se le "crea" una clase que hace que se hga visible en pantalla*/
  });