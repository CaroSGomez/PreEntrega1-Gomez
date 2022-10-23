alert("Bienvenid@ a mi primer prueba");

console.log("Calculadora de Plan Ahora para turismo");

let tipoDeViaje = prompt("Marca 1 si viajas dentro del pais");

if (tipoDeViaje == 1) {

    let importe = prompt("Ingresa el importe de tu vuelo a financiar");
    
  while (importe != "0") {

  let cuotasElegidas = Number(
      prompt(
        "Podes optar por el Plan Ahora 6, 12 y 18 ¿En cuantas cuotas deseas financiar?"
      )
    );
    function plan6() {
        alert(
          "El importe total del vuelo con el Plan Ahora 6 es: $" + 1.24 * importe
        );
      }
      function plan12() {
        alert(
          "El importe total del vuelo con el Plan Ahora 12 es: $" + 1.36 * importe
        );
      }
      function plan18() {
        alert(
          "El importe total del vuelo con el Plan Ahora 18 es: $" + 1.39 * importe
        );
      }

    if (cuotasElegidas === 6) {
      plan6();
    } else if (cuotasElegidas === 12) {
      plan12();
    } else if (cuotasElegidas === 18) {
      plan18();
    } else {
      alert("La opción ingresada no es válida para el Plan Ahora");
    }

    alert("Ingresa un monto superior a $0 para volver calcular");
    importe = prompt(
      "Introduce el importe o marca 0 para salir de la calculadora"
    );
  }
} else {
  document.write(
    "Si tu viaje es al exterior, solo podrás abonar en 1 pago"
  );
}