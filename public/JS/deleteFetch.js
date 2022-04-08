if (document.querySelector(".deleteAndPutUserLogin")) {
  document.querySelector("#btnDelete").addEventListener("click", function () {
    let nameUserLogin = sessionStorage.getItem('nameUserLogin');

    let user = {
      nameUserLogin,
    };

    let data = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("/delete", data)
      .then(function (res) {
        return res.json();
      })
      .then(function (resp) {
        if (resp.delete == true){
          sessionStorage.removeItem('nameUserLogin');
          alert(resp.message) // TODO: pop up
          window.location.replace("http://localhost:3000");
        } else {
          document.querySelector("#messageDeletePut").innerHTML = `<p>${resp.message}</p>`;
        }

      });
  });
}