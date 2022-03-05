fetch("/gastronomy")
  .then((res) => {
    return res.json();
  })
  .then((resp) => {

    resp.forEach((gastronomy) => {
			document.querySelector("#dataGastro").innerHTML += `<img class="imageGastro" src="${gastronomy.imagen}" alt="Imagen ${gastronomy.nombre}" width="359px" height="294px"><p class="nameGastro">${gastronomy.nombre}</p><p class="directionGastro">${gastronomy.direccion}</p><p class="descriptionGastro">${gastronomy.descripcion}</p>`;
    });     

  });