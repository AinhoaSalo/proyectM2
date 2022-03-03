if (document.querySelector("#addUserRegister")) {
  document.querySelector("#btn").addEventListener("click", function () {
    let nameUserRegister = document.querySelector("#nameUserRegister").value;
    let nameRegister = document.querySelector("#nameRegister").value;
    let lastnameRegister = document.querySelector("#lastnameRegister").value;
    let passwordUserRegister = document.querySelector("#passwordUserRegister").value;
    
    let body = {
      nameUserRegister,
      nameRegister,
      lastnameRegister,
      passwordUserRegister
    };
    console.log(body)

    let data = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    };

    fetch("/registro", data)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        window.location.replace("http://localhost:3000/");
      });
  });
}

if (document.querySelector("#addUserLogin")) {
  document.querySelector("#btnLogin").addEventListener("click", function () {
    let nameUserLogin = document.querySelector("#nameUserLogin").value;
    let passwordUserLogin = document.querySelector("#passwordUserLogin").value;
    
    let bodyLogin = {
      nameUserLogin,
      passwordUserLogin
    };

    let data = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyLogin),
    };

    fetch("/conectar", data)
      .then((res) => {
        return res.json();
      })
      .then((resp) => { 
        if (resp.login == true){
          sessionStorage.setItem('nameUserLogin', nameUserLogin);
          window.location.replace("http://localhost:3000/turistGuide.html");
        } else {
          document.querySelector("#messageLogin").innerHTML = `<p>${resp.message}</p>`;
        }
      });
  });
}
 