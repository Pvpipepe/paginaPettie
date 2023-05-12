//Año actualizado
window.addEventListener("load", () => {
  const currentDate = new Date();
  document.getElementById("currentYear").innerText = currentDate.getFullYear()
});
//Fin año actualizado

//Para crear el tema oscuro
const temaOscuro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#switchClarinete").setAttribute("class", "fa-regular fa-moon");
  document.getElementById("body").style.backgroundImage = "linear-gradient(to bottom,  #000000,#434343 )";
}

//Para crear el tema claro
const temaClaro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#switchClarinete").setAttribute("class", "fa-regular fa-sun");
  document.getElementById("body").style.backgroundImage = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)";
}

//Se programa la funcion para realizar la comparativa y asi elegir el tema
const cambiarTema = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    temaOscuro() : temaClaro();
}


//Register : Validacion Formulario
//Validacion INCIO-->

// Example starter JavaScript for disabling form submissions if there are invalid fields
const validacionRegister = (() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
