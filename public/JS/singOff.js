if (document.querySelector(".deleteAndPutUserLogin")) {
  document.querySelector("#btnSingOff").addEventListener("click", function () {
    sessionStorage.removeItem('nameUserLogin');
    alert("Sesión cerrada") // TODO: pop up
    window.location.replace("http://localhost:3000");
  });
}