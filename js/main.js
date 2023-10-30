let nombre = prompt("Por favor, indicanos tu nombre");
alert("¡Hola" + " " + nombre +"! Bienvenid@ a tu carrito de compras");

let buzos = [
    {nombre: "Buzo X", precio: 22500},
    {nombre: "Buzo SNK", precio: 30200},
    {nombre: "Buzo HS", precio: 32000}
  ];
  
  let carrito = [];
  
  function mostrarBuzos() {
    let listaBuzos = "Buzos disponibles:\n";
    for (let i = 0; i < buzos.length; i++) {
      listaBuzos += i + 1 + ". " + buzos[i].nombre + " - $" + buzos[i].precio + "\n";
    }
    alert(listaBuzos);
  }
  
  function agregarAlCarrito() {
    let numero = parseInt(prompt("Ingresá el número del buzo que deseás agregar al carrito:")) - 1;
  
    if (numero >= 0 && numero < buzos.length) {
      carrito.push(buzos[indice]);
      alert(buzos[numero].nombre + " se agregó a tu carrito!");
    } else {
      alert("Número de buzo no válido.");
    }
  }
  
  function mostrarCarrito() {
    let contenidoCarrito = "Contenido del carrito:\n";
    let total = 0;
  
    for (let i = 0; i < carrito.length; i++) {
      contenidoCarrito += carrito[i].nombre + " - $" + carrito[i].precio + "\n";
      total += carrito[i].precio;
    }
  
    if (carrito.length > 0) {
      contenidoCarrito += "\nTotal: $" + total.toFixed(2);
    } else {
      contenidoCarrito = "El carrito está vacío.";
    }
  
    alert(contenidoCarrito);
  }
  
  while (true) {
    let opciones = prompt("Seleccioná una opción:\n1. Mostrar buzos\n2. Agregar al carrito\n3. Mostrar carrito\n4. Salir");
  
    switch (opciones) {
      case "1":
        mostrarBuzos();
        break;
      case "2":
        agregarAlCarrito();
        break;
      case "3":
        mostrarCarrito();
        break;
      case "4":
        alert("¡Te esperamos cuando quieras para que finalices tu compra!");
        break;
      default:
        alert("Opción no válida. Por favor, seleccioná una opción válida.");
    }
  }
  