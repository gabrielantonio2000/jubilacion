// jubilacion.js

// Función para determinar si la persona aplica a jubilación
function aplicaAJubilacion(edad, aportesIGSS) {
  if (edad >= 65 && aportesIGSS >= 240) {
    return "La persona aplica a jubilación.";
  } else {
    return "La persona no aplica a jubilación.";
  }
}

// Validar la edad ingresada
function validarEdad(edad) {
  if (edad < 0) {
    return "Error: La edad no puede ser un número negativo.";
  } else if (edad === 0) {
    return "Error: La edad no puede ser 0.";
  } else if (edad < 18) {
    return "Error: Solo los mayores de 18 años pueden aplicar.";
  } else if (edad > 120) {
    return "Error: La edad no puede ser mayor a 120 años.";
  }
  return null; // Edad válida
}

// Exportar las funciones para usarlas en las pruebas
module.exports = { aplicaAJubilacion, validarEdad };

// interacción con el usuario (para node)
if (require.main === module) {
  const readline = require("readline");

  // Crear una interfaz de readline para leer desde la consola
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Solicitar al usuario que ingrese la edad
  rl.question("Ingrese la edad de la persona: ", (edadInput) => {
    const edad = parseInt(edadInput);
    const errorEdad = validarEdad(edad);

    if (errorEdad) {
      console.log(errorEdad);
      rl.close();
    } else {
      // Solicitar la cantidad de aportes si la edad es válida
      rl.question(
        "Ingrese la cantidad de aportes al IGSS: ",
        (aportesInput) => {
          const aportesIGSS = parseInt(aportesInput);

          // Determinar si la persona aplica a jubilación y mostrar el resultado
          const resultado = aplicaAJubilacion(edad, aportesIGSS);
          console.log(resultado);

          // Cerrar la interfaz de readline
          rl.close();
        }
      );
    }
  });
}
