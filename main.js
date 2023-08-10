document.addEventListener("DOMContentLoaded", function() {
    const botonInicio = document.getElementById("botonInicio");
    botonInicio.addEventListener("click", iniciarCompra);
  });
  
  function iniciarCompra() {
    const registro = prompt("Registrarse\nIngrese un nombre de usuario:");
    if (!registro) {
      return;
    }
  
    let contrasena = prompt("Ingrese una contraseña:");
    if (!contrasena) {
      return;
    }
  
    // Validar que la contraseña tenga al menos un número
    while (!/\d/.test(contrasena)) {
      alert("La contraseña debe contener al menos un número.");
      contrasena = prompt("Ingrese una contraseña:");
      if (!contrasena) {
        return;
      }
    }
  
    alert("¡Registrado con éxito!");
  
    const productos = [
      { id: 1, nombre: "Producto 1", precio: 10, stock: 5 },
      { id: 2, nombre: "Producto 2", precio: 20, stock: 10 },
      { id: 3, nombre: "Producto 3", precio: 30, stock: 3 }
    ];
  
    let carrito = [];
    let total = 0;
  
    let textoListaProductos = "Productos disponibles:\n";
    productos.forEach(producto => {
      textoListaProductos += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}\n`;
    });
  
    alert(textoListaProductos);
  
    while (true) {
      const entradaUsuario = prompt("Ingrese el ID del producto que desea agregar al carrito (o 'finalizar' para terminar la compra):");
  
      if (entradaUsuario === "finalizar") {
        break;
      }
  
      const productoSeleccionado = productos.find(producto => producto.id === parseInt(entradaUsuario));
  
      if (productoSeleccionado) {
        if (productoSeleccionado.stock > 0) {
          carrito.push(productoSeleccionado);
          total += productoSeleccionado.precio;
          productoSeleccionado.stock--;
          alert(`${productoSeleccionado.nombre} agregado al carrito. Stock restante: ${productoSeleccionado.stock}`);
        } else {
          alert(`No hay stock disponible para ${productoSeleccionado.nombre}.`);
        }
      } else {
        alert("Producto no encontrado.");
      }
    }
  
    const nombresProductosCarrito = carrito.map(producto => producto.nombre).join(", ");
    alert(`Productos en el carrito: ${nombresProductosCarrito}`);
  
    const totalFormateado = total.toFixed(2);
    alert(`Total de compra: $${totalFormateado}`);
  }