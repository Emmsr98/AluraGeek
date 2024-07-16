// Define todas las funciones primero
const productList = () => {
  return fetch("http://localhost:3001/productos")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const crearProdcuto = (titulo, precio, imgUrl) => {
  return fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      precio,
      imgUrl,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const borrarProducto = (id) => {
  return fetch(`http://localhost:3001/productos/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Luego exporta todas las funciones
export const servicesProducts = {
  productList,
  crearProdcuto,
  borrarProducto,
};

