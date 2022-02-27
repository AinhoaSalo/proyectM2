if (document.querySelector("#addUserRegistrer")) {
    document.querySelector("#btn").addEventListener("click", function () {
      debugger
      let nameUserRegistrer = document.querySelector("#nameUserRegistrer").value;
      let nameRegistrer = document.querySelector("#nameRegistrer").value;
      let lastnameRegistrer = document.querySelector("#lastnameRegistrer").value;
      let passwordUserRegistrer = document.querySelector("#passwordUserRegistrer").value;
      
      let body = {
        nameUserRegistrer,
        nameRegistrer,
        lastnameRegistrer,
        passwordUserRegistrer
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
          document.querySelector("#addUserRegistrer").innerHTML += `<p>${resp.message}</p>`;
        });
    });
  }

 