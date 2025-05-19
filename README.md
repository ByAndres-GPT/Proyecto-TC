# Validador de Emails con Autómata Finito

Este proyecto implementa un **autómata finito determinista (AFD)** para validar correos electrónicos simples que cumplan con el siguiente patrón: 

[letras/números]+@[letras]+.com


Por ejemplo, direcciones como `juan123@gmail.com` o `a@b.com` son consideradas válidas.

## 🧠 Descripción

El sistema simula un autómata que procesa el correo carácter por carácter, cambiando de estado según reglas predefinidas. Solo si se alcanza el estado final (estado de aceptación), el correo es válido.

El autómata acepta únicamente correos que:
- Comienzan con una o más letras o números
- Incluyen un solo `@`
- Tienen un dominio compuesto solo por letras
- Terminan en `.com`

## 🌐 Enlace al proyecto

Puedes probar la aplicación en línea aquí:  
👉 **[https://byandres-gpt.github.io/Proyecto-TC/](https://byandres-gpt.github.io/Proyecto-TC/)**

## 🖼️ Grafo del autómata

Haz clic en el siguiente enlace para visualizar el grafo de estados que representa el autómata:  
🔗 [Ver grafo de validación](https://byandres-gpt.github.io/Proyecto-TC/grafo.html)

## 📁 Archivos principales

- `index.html`: Página principal con formulario para ingresar y validar un email.
- `script.js`: Contiene la lógica del autómata finito que realiza la validación.
- `grafo.html`: Visualización interactiva del autómata utilizando la librería `vis-network`.

## ✅ Ejemplos válidos

- `usuario123@gmail.com`
- `ana@yahoo.com`
- `a@b.com`

## ❌ Ejemplos inválidos

- `usuario@gmail` (falta `.com`)
- `@gmail.com` (falta nombre)
- `usuario@gmail.xyz` (no termina en `.com`)

## ⚙️ Cómo funciona

El autómata implementado en `script.js` sigue esta transición de estados:

![image](https://github.com/user-attachments/assets/32e6e6e0-396f-47d2-b69a-e46e2e35fbdd)


El estado `q7` es el único estado de aceptación. Si se llega a ese estado tras procesar el email completo, la validación es exitosa.

## 🚀 Tecnologías usadas

- HTML5
- CSS3
- JavaScript
- [vis-network](https://visjs.github.io/vis-network/) para la visualización del grafo
