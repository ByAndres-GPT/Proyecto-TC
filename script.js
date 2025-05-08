document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value.trim();
  const resultDiv = document.getElementById("result");
  const resultText = document.getElementById("resultText");
  const statusIcon = document.getElementById("statusIcon");

  const isValid = validarEmail(email);

  resultDiv.classList.remove("hidden", "valid", "invalid");

  if (isValid) {
    resultDiv.classList.add("valid");
    statusIcon.textContent = "✓";
    resultText.textContent = `"${email}" es un email válido.`;
  } else {
    resultDiv.classList.add("invalid");
    statusIcon.textContent = "✗";
    resultText.textContent = `"${email}" NO es un email válido. Debe seguir el patrón: [letras/números]+@[letras]+.com`;
  }
});

function validarEmail(email) {
  const estados = {
    q0: { letra_num: "q1" },
    q1: { letra_num: "q1", "@": "q2" },
    q2: { letra: "q3" },
    q3: { letra: "q3", ".": "q4" },
    q4: { c: "q5" },
    q5: { o: "q6" },
    q6: { m: "q7" },
  };

  let estadoActual = "q0";

  for (const char of email) {
    let tipo;

    if (["q0", "q1"].includes(estadoActual) && /[a-zA-Z0-9]/.test(char)) {
      tipo = "letra_num";
    } else if (estadoActual === "q2" && /[a-zA-Z]/.test(char)) {
      tipo = "letra";
    } else if (estadoActual === "q3" && /[a-zA-Z]/.test(char)) {
      tipo = "letra";
    } else if (char === "@") {
      tipo = "@";
    } else if (char === ".") {
      tipo = ".";
    } else if (char === "c") {
      tipo = "c";
    } else if (char === "o") {
      tipo = "o";
    } else if (char === "m") {
      tipo = "m";
    } else {
      return false;
    }

    if (estados[estadoActual][tipo]) {
      estadoActual = estados[estadoActual][tipo];
    } else {
      return false;
    }
  }

  return estadoActual === "q7";
}
