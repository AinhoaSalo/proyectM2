fetch("/areapersonal?" + new URLSearchParams({
    nameUserLogin: sessionStorage.getItem('nameUserLogin'),
  }))
  .then((res) => {
    return res.json();
  })
  .then((resp) => {
    let name = resp.nameRegister;
    let lastname = resp.lastnameRegister;

    document.querySelector(".dataUserLogin").innerHTML = `<div class="personalArea"><div class="namePersonalArea"><p>Nombre: ${name}</p></div>
    <div class="lastnamePersonalArea"><p>Apellidos: ${lastname}</p></div>`; 

  });