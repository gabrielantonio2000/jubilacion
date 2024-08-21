// jubilacion.test.js

const { aplicaAJubilacion, validarEdad } = require("./index");


describe("Pruebas para aplicaAJubilacion", () => {
  test("Debería aplicar a jubilación si la edad es 65 o más y tiene 240 o más aportes", () => {
    expect(aplicaAJubilacion(65, 240)).toBe("La persona aplica a jubilación.");
    expect(aplicaAJubilacion(70, 300)).toBe("La persona aplica a jubilación.");
  });

  test("No debería aplicar a jubilación si la edad es menor a 65 o tiene menos de 240 aportes", () => {
    expect(aplicaAJubilacion(64, 240)).toBe(
      "La persona no aplica a jubilación."
    );
    expect(aplicaAJubilacion(65, 239)).toBe(
      "La persona no aplica a jubilación."
    );
  });
});

describe("Pruebas para validarEdad", () => {
  test("Debería devolver un error para edades negativas", () => {
    expect(validarEdad(-1)).toBe(
      "Error: La edad no puede ser un número negativo."
    );
  });

  test("Debería devolver un error para la edad 0", () => {
    expect(validarEdad(0)).toBe("Error: La edad no puede ser 0.");
  });

  test("Debería devolver un error para edades menores a 18", () => {
    expect(validarEdad(17)).toBe(
      "Error: Solo los mayores de 18 años pueden aplicar."
    );
  });

  test("Debería devolver un error para edades mayores a 120", () => {
    expect(validarEdad(121)).toBe(
      "Error: La edad no puede ser mayor a 120 años."
    );
  });

  test("Debería devolver null para edades entre 18 y 120", () => {
    expect(validarEdad(18)).toBeNull();
    expect(validarEdad(120)).toBeNull();
  });
});
