fetch("/monuments")
  .then((res) => {
    return res.json();
  })
  .then((resp) => {

    resp.forEach((monuments) => {
			document.querySelector("#dataMonuments").innerHTML += `<img class="imageMonuments" src="${monuments.imagen}" alt="Imagen ${monuments.nombre}" width="359px" height="294px"><p class="nameMonuments">${monuments.nombre}</p><p class="descriptionMonuments">${monuments.descripcion}</p>`;
    });     

  });