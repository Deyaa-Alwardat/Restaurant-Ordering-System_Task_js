fetch("data.json")
    .then(response => response.json())
    .then(data => {

        localStorage.setItem("menu", JSON.stringify(data));

        let menu = document.getElementById("menu");

        for (let i = 0; i < data.length; i++) {

            menu.innerHTML += 
            `<div>
                    <h3>${data[i].name}</h3>
                    <p>Price: ${data[i].price}</p>
                    <p>Availability: ${data[i].availability}</p>
                </div>`;
        }
        // localStorage.clear()
        // for (let i = 0; i < data.length; i++) {
        //      localStorage.setItem("Name"+(i+1), data[i].name);
        //      localStorage.setItem("price"+(i+1), data[i].price);
        //      localStorage.setItem("Availability"+(i+1), data[i].Availability);


        // }



    });