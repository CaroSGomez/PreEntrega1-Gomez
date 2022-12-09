

      let btn = document.querySelector("#btnObtenerClima");

      btn.addEventListener("click", () => {
        let city = document.querySelector("#cityname").value;

        let key = "83a5f95b7e141fb64f8f8dfd98930529";
        let url =
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          key;
        if (city != "") {
          fetch(url)
            .then((data) => {
              return data.json();
            })
            .then((clima) => {
              console.log(clima);
              let temperatura = clima.main.temp;
              console.log(temperatura);
              let tempC = temperatura - 273.15;
              console.log(tempC);

              let p = document.querySelector("#temperatura");
              p.innerHTML = tempC.toFixed(0) + " C°";

              if (tempC < 10) {
                p.className = "cold";
              } else {
                p.className = "hot";
              }
            })
            .catch((err) => console.log(err));
        } else {
          alert("Debes ingresar una ciudad");
        }
      });