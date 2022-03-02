//mirar los favoritos

function showFavorite() {
  document.querySelector('CAMBIAR').innerHTML = "";
    if(localStorage.getItem(list)){
      let arrayLocal = localStorage.getItem(list);
      let arrayLocalDesparsedo = JSON.parse(arrayLocal);
      arrayLocalDesparsedo.forEach(CAMBIAR => {
      document.querySelector('.CAMBIAR').innerHTML += `<div class="sonCallFavoriteStar"><img src=${CAMBIAR}/><p>${CAMBIAR}</p></div>`;  
    });
  }

  document.querySelector('CAMBIAR').innerHTML = "";
    if(localStorage.getItem(list)){
      let arrayLocal = localStorage.getItem(list);
      let arrayLocalDesparsedo = JSON.parse(arrayLocal);
      arrayLocalDesparsedo.forEach(CAMBIAR => {
      document.querySelector('.CAMBIAR').innerHTML += `<div class="sonCallFavoriteStar"><img src=${CAMBIAR}/><p>${CAMBIAR}</p></div>`;  
    });
  }
    
  document.querySelector('CAMBIAR').innerHTML = "";
    if(localStorage.getItem(list)){
      let arrayLocal = localStorage.getItem(list);
      let arrayLocalDesparsedo = JSON.parse(arrayLocal);
      arrayLocalDesparsedo.forEach(CAMBIAR => {
      document.querySelector('.CAMBIAR').innerHTML += `<div class="sonCallFavoriteStar"><img src=${CAMBIAR}/><p>${CAMBIAR}</p></div>`;  
    });
  } 
}
  
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function addFavorite() {
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
  if (!checkIfItIsAlready(keyNameFishCAMBIAR,arrayLocalDesparsedo)) {
    arrayLocalDesparsedo.push(fishListCAMBIAR[keyNameFishCAMBIAR]);
    let nuevoArrayParseado = JSON.stringify(arrayLocalDesparsedo);
    localStorage.setItem(list, nuevoArrayParseado);
  }
  } else {
    let nuevoArrayParseado = JSON.stringify([fishListCAMBIAR[keyNameFishCAMBIAR]]);
    localStorage.setItem(list, nuevoArrayParseado);
  }
  showFavorite() 
}

function deleteFromArray(key, arr) {
  let finalArray = [];
  i = 0;
  arr.forEach(current =>{
    if (current["CAMBIAR"] != key) {
    finalArray[i] = current;
    } 
    i++;
  })
  return finalArray
}

function deleteFavorite(){
  if(localStorage.getItem(list)){
    let arrayLocal = localStorage.getItem(list);
    let arrayLocalDesparsedo = JSON.parse(arrayLocal);
    if (checkIfItIsAlready(keyNameFishCAMBIAR,arrayLocalDesparsedo)){
      let newArray = deleteFromArray(keyNameFishCAMBIAR, arrayLocalDesparsedo);
      if (newArray.length == 0){
        localStorage.removeItem(list);
      } else {
        let nuevoArrayParseado = JSON.stringify(newArray);
        localStorage.setItem(list, nuevoArrayParseado);
      }
    }
  }
  showFavorite();
}  