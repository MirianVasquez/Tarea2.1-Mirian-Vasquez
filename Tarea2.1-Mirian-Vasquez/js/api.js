
  async function getProductos() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const productos = await res.json();
      
      const productList = document.getElementById('productosLista');
      
      productos.forEach(product => {
        const Tarjeta = document.createElement('section');
        Tarjeta.classList.add('productoTarjeta');
        
        const imagen = document.createElement('img');
        imagen.src = product.image;
        imagen.alt = product.title;
        imagen.classList.add('productoImagen');
        Tarjeta.appendChild(imagen);
        
        const titulo = document.createElement('h4');
        titulo.textContent = product.title;
        Tarjeta.appendChild(titulo);
        
        const precio = document.createElement('p');
        precio.textContent = `$${product.price}`;
        Tarjeta.appendChild(precio);
        
        const descripcion = document.createElement('p');
        descripcion.textContent = product.description.slice(0, 100) + '...'; // Limita la descripción
        Tarjeta.appendChild(descripcion);
        
        productList.appendChild(Tarjeta);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

(() => {
    getProductos()
})()

