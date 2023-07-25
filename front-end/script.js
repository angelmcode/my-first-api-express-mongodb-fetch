let bodyResponse = "";
let bodyResponseToReset = "";
showDataInTable();

// Show Data (GET)
function showDataInTable() {
    // Method GET
    fetch("http://localhost:3000/api/db-countries/countries")
    .then(res => res.json())
    .then(response => {
        console.log(response)
        showData(response)
    })
    .catch(err => console.log(err))

    const showData = (response) => {
        console.log(response);
        bodyResponse = "";

        for (let i = 0; i < response.length; i++) {
            bodyResponse += `<tr class="tr"><td>${response[i]._id}</td>
                                <td>${response[i].country}</td>
                                <td>${response[i].lenguage}</td>
                                <td>${response[i].population}</td>
                                <td>${response[i].capital}</td></tr>`    
        }

        bodyResponseToReset = `<tbody id="data">
        </tbody>`;
        document.getElementById("data").remove();
        document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponseToReset);
        document.getElementById("data").insertAdjacentHTML("beforeend", bodyResponse);
    }
}

// Clean Table
function cleanDataInTable() {
    bodyResponse = `<tbody id="data">
    </tbody>`;
    document.getElementById("data").remove();
    document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponse);
}

// Create a New Row (POST)
let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form");

    let data = new FormData(form)
    console.log(typeof data.get("country"))

    if (data.get("country")===""||data.get("lenguage")==="") {
        window.alert("Country and Lenguage fields are required")
    }

    // Method POST
    fetch("http://localhost:3000/api/db-countries/countries",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            country: data.get("country"), 
            lenguage: data.get("lenguage"), 
            population: data.get("population"), 
            capital: data.get("capital")
        })
    })
    .then(res => res.json())
    .then(response => {
        showDataPost(response)
    })
    .catch(err => console.log(err))

    const showDataPost = (response) => {
        console.log(response)
        let beforeBodyResponse = bodyResponse;
        bodyResponse = "";
        bodyResponseToReset = `<tbody id="data">
        </tbody>`;
        
        for (let i = 0; i < response.length; i++) {
            bodyResponse += `<tr class="tr"><td>${response[i]._id}</td>
                                <td>${response[i].country}</td>
                                <td>${response[i].lenguage}</td>
                                <td>${response[i].population}</td>
                                <td>${response[i].capital}</td></tr>`  
        }
        // console.log(beforeBodyResponse);
        // console.log(bodyResponse);
        
        // bodyResponseToReset = `<tbody id="data">
        // </tbody>`;
        document.getElementById("data").remove();
        document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponseToReset);
        document.getElementById("data").insertAdjacentHTML("beforeend", bodyResponse);
        form.reset();
    }
})

// Update a Row (PUT)
let form2 = document.getElementById("form2");
form2.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form2");

    let data2 = new FormData(form2)
    console.log(typeof data2.get("id2"))

    if (data2.get("id2")==="") {
        window.alert("Enter a Id")
    }

    // Method PUT
    fetch(`http://localhost:3000/api/db-countries/countries/${data2.get("id2")}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            country: data2.get("country2"), 
            lenguage: data2.get("lenguage2"), 
            population: data2.get("population2"), 
            capital: data2.get("capital2")
        })
    })
    .then(res => res.json())
    .then(response => {
        showDataPut(response)
    })
    .catch(err => console.log(err))

    const showDataPut = (response) => {
        console.log(response)
        bodyResponse = "";
        bodyResponseToReset = `<tbody id="data">
        </tbody>`;
        
        for (let i = 0; i < response.length; i++) {
            bodyResponse += `<tr class="tr"><td>${response[i]._id}</td>
                                <td>${response[i].country}</td>
                                <td>${response[i].lenguage}</td>
                                <td>${response[i].population}</td>
                                <td>${response[i].capital}</td></tr>`  
        }
        // bodyResponseToReset = `<tbody id="data">
        // </tbody>`;
        document.getElementById("data").remove();
        document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponseToReset);
        document.getElementById("data").insertAdjacentHTML("beforeend", bodyResponse);
        form2.reset();
    }
})

// Update a Row Column (PATCH)
let form3 = document.getElementById("form3");
form3.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form3");

    let data3 = new FormData(form3)
    console.log(data3.get("select3"))

    if (data3.get("id3")==="") {
        window.alert("Enter a Id")
    }

    let select = () => {
        if (data3.get("select3") === "Country") {
            return {
                country: data3.get("input-patch")
            }
        } else if (data3.get("select3") === "Lenguage") {
            return {
                lenguage: data3.get("input-patch")
            }   
        } else if (data3.get("select3") === "Population") {
            return {
                population: data3.get("input-patch")
            }   
        } else if (data3.get("select3") === "Capital") {
            return {
                capital: data3.get("input-patch")
            }   
        }
    }

    console.log(data3.get("titulo3"))
    // Method PATCH
    fetch(`http://localhost:3000/api/db-countries/countries/${data3.get("id3")}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(select())
    })
    .then(res => res.json())
    .then(response => {
        showDataPatch(response)
    })
    .catch(err => console.log(err))

    const showDataPatch = (response) => {
        console.log(response)
        bodyResponse = "";
        bodyResponseToReset = `<tbody id="data">
        </tbody>`;
        
        for (let i = 0; i < response.length; i++) {
            bodyResponse += `<tr class="tr"><td>${response[i]._id}</td>
                                <td>${response[i].country}</td>
                                <td>${response[i].lenguage}</td>
                                <td>${response[i].population}</td>
                                <td>${response[i].capital}</td></tr>`  
        }
        // bodyResponseToReset = `<tbody id="data">
        // </tbody>`;
        document.getElementById("data").remove();
        document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponseToReset);
        document.getElementById("data").insertAdjacentHTML("beforeend", bodyResponse);
        form3.reset();
    }
})

// Delete a Row (DELETE)
let form4 = document.getElementById("form4");
form4.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form4");

    let data4 = new FormData(form4)
    console.log(data4.get("id4"))

    if (data4.get("id4")==="") {
        window.alert("Enter a Id")
    }

    // Method DELETE
    fetch(`http://localhost:3000/api/db-countries/countries/${data4.get("id4")}`, {
        method: "DELETE",   
    })
    .then(res => res.json())
    .then(response => {
        showDataAfterDelete(response)
    })
    .catch(err => console.log(err))

    const showDataAfterDelete = (response) => {
        console.log(response)
        bodyResponse = "";
        bodyResponseToReset = `<tbody id="data">
        </tbody>`;
        
        for (let i = 0; i < response.length; i++) {
            bodyResponse += `<tr class="tr"><td>${response[i]._id}</td>
                                <td>${response[i].country}</td>
                                <td>${response[i].lenguage}</td>
                                <td>${response[i].population}</td>
                                <td>${response[i].capital}</td></tr>`  
        }
        // bodyResponseToReset = `<tbody id="data">
        // </tbody>`;
        document.getElementById("data").remove();
        document.getElementById("table").insertAdjacentHTML("beforeend", bodyResponseToReset);
        document.getElementById("data").insertAdjacentHTML("beforeend", bodyResponse);
        form4.reset();
    }
})