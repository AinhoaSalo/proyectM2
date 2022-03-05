if (document.querySelector(".deleteAndPutUserLogin")) {
	document.querySelector("#btnPut").addEventListener("click", function () {
		let nameRegister = document.querySelector("#name").innerHTML;
    let lastnameRegister = document.querySelector("#lastname").innerHTML;
		document.querySelector("#name").innerHTML = `<input id="nameRegister" type="text" value=${nameRegister}>`;
		document.querySelector("#lastname").innerHTML = `<input id="lastnameRegister" type="text" value=${lastnameRegister}>`;
		document.getElementById("btnModify").className = "show"
		document.getElementById("btnPut").className = "hide"
	});

	document.querySelector("#btnModify").addEventListener("click", function () {
		let nameUserRegister = sessionStorage.getItem('nameUserLogin');
    let nameRegister = document.querySelector("#nameRegister").value;
    let lastnameRegister = document.querySelector("#lastnameRegister").value;

    let user = {
      nameUserRegister,
      nameRegister,
      lastnameRegister
    };
	
		let data = {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		};

		fetch("/put", data)
		.then(function (res) {
			return res.json();
		})
		.then(function (resp) {
			if (resp.put == true){
				document.getElementById("btnModify").className = "hide"
				document.getElementById("btnPut").className = "show"
				document.querySelector("#name").innerHTML = `${nameRegister}`;
				document.querySelector("#lastname").innerHTML = `${lastnameRegister}`;
				alert(resp.message) // TODO: pop up
			} else {
				document.querySelector("#messageDeletePut").innerHTML = `<p>${resp.message}</p>`;
			}

		});

	}); 
}

