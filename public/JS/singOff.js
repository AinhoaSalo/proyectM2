if (document.querySelector(".deleteAndPutUserLogin")) {
  document.querySelector("#btnSingOff").addEventListener("click", function () {
    let nameUserLogin = sessionStorage.getItem('nameUserLogin');
    sessionStorage.removeItem('nameUserLogin');
    alert(resp.message) // TODO: pop up
    window.location.replace("http://localhost:3000");
  });
}