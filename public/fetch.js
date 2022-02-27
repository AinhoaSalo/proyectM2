if (document.querySelector("#addUserregister")) {
    document.querySelector("#btn").addEventListener("click", function () {
      let nameUserregister = document.querySelector("#nameUserregister").value;
      let nameregister = document.querySelector("#nameregister").value;
      let lastnameregister = document.querySelector("#lastnameregister").value;
      let passwordUserregister = document.querySelector("#passwordUserregister").value;
      
      let body = {
        nameUserregister,
        nameregister,
        lastnameregister,
        passwordUserregister
      };
  
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
          document.querySelector("#addUserregister").innerHTML += `<p>${resp.message}</p>`;
        });
    });
  }

 