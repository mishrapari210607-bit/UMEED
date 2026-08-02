// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// Migration centre search
const centreSearchForm = document.getElementById("centreSearchForm");
const centreSearch = document.getElementById("centreSearch");
const centreCards = document.querySelectorAll(".centre-card");
const searchResultText = document.getElementById("searchResultText");

if (centreSearchForm && centreSearch) {
  centreSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchValue = centreSearch.value.trim().toLowerCase();
    let visibleCentres = 0;

    centreCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();

      if (searchValue === "" || cardText.includes(searchValue)) {
        card.style.display = "block";
        visibleCentres++;
      } else {
        card.style.display = "none";
      }
    });

    if (searchResultText) {
      searchResultText.textContent =
        visibleCentres > 0
          ? `${visibleCentres} migration centre(s) found.`
          : "No matching migration centre found in dummy data.";
    }
  });
}

// Map button demo
document.querySelectorAll(".map-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Map location opened for this migration centre. Demo only.");
  });
});



// Automatically add the current date and time
document.querySelectorAll('input[type="datetime-local"]').forEach((input) => {
  if (!input.value) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    input.value = now.toISOString().slice(0, 16);
  }
});

// ====================== RELIEF PAGE ======================

const reliefForm = document.getElementById("reliefForm");

if (reliefForm) {

    const victimSelect = document.getElementById("victimSelect");
    let victimId = "";

    // Load all victims into dropdown
    fetch("http://127.0.0.1:8000/api/victims/")
        .then(response => response.json())
        .then(victims => {

            victimSelect.innerHTML = '<option value="">Select Victim</option>';

            victims.forEach(victim => {

                const option = document.createElement("option");

                option.value = victim.id;
                option.textContent = `${victim.drid} - ${victim.name}`;

                victimSelect.appendChild(option);

            });

        });

    // When a victim is selected
    victimSelect.addEventListener("change", function () {

        victimId = this.value;

        if (!victimId) {

            document.getElementById("victimName").textContent = "Select a victim";
            document.getElementById("victimId").textContent = "---";
            return;

        }

        fetch(`http://127.0.0.1:8000/api/victims/${victimId}/`)
            .then(response => response.json())
            .then(victim => {

                document.getElementById("victimName").textContent = victim.name;
                document.getElementById("victimId").textContent = victim.drid;

            });

    });

    reliefForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        if (!victimId) {
            alert("Please select a victim.");
            return;
        }

        const reliefData = {

            victim: victimId,
            food_packets: document.getElementById("food").checked ? 1 : 0,
            water_bottles: document.getElementById("water").checked ? 1 : 0,
            medicine_kits: document.getElementById("medicine").checked ? 1 : 0,
            blankets: document.getElementById("blanket").checked ? 1 : 0,
            clothes: document.getElementById("clothes").checked ? 1 : 0,
            distributed_by: "Volunteer",
            status: document.getElementById("distributionStatus").value,
            remarks: document.getElementById("remarks").value

        };

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/relief/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(reliefData)
                }
            );

            if (response.ok) {

                alert("Relief information saved successfully.");
                reliefForm.reset();

            } else {

                alert("Failed to save relief information.");

            }

        } catch (err) {

            console.log(err);
            alert("Server connection failed.");

        }

    });

}

// ====================== SHELTER PAGE ======================

const shelterPage = document.getElementById("shelterList");


if (shelterPage) {


    // Load shelters

    fetch("http://127.0.0.1:8000/api/shelters/")

    .then(response => response.json())

    .then(shelters => {


        shelterPage.innerHTML = "";


        shelters.forEach(shelter => {


            shelterPage.innerHTML += `

            <div class="service-card">


                <h3>
                ${shelter.shelter_name}
                </h3>


                <p>
                Location:
                ${shelter.location}
                </p>


                <p>
                Capacity:
                ${shelter.capacity}
                </p>


                <p>
                Available Beds:
                ${shelter.available_beds}
                </p>


                <p>
                Medical Facility:
                ${shelter.medical_facility ? "Yes" : "No"}
                </p>


                <p>
                Food Available:
                ${shelter.food_available ? "Yes" : "No"}
                </p>


                <p>
                Status:
                ${shelter.status}
                </p>


            </div>

            `;


        });


    })


    .catch(error => {

        console.log(
            "Shelter API Error:",
            error
        );

    });


}





// ====================== VICTIM DROPDOWN IN SHELTER PAGE ======================


const shelterVictimSelect =
document.getElementById("shelterVictimSelect");


if (shelterVictimSelect) {


    fetch("http://127.0.0.1:8000/api/victims/")


    .then(response => response.json())


    .then(victims => {


        shelterVictimSelect.innerHTML =
        `
        <option value="">
        Select Victim
        </option>
        `;



        victims.forEach(victim => {


            let option =
            document.createElement("option");



            option.value =
            victim.id;



            option.textContent =
            `${victim.drid} - ${victim.name}`;



            shelterVictimSelect.appendChild(option);



        });


    })


    .catch(error => {

        console.log(
            "Victim Loading Error:",
            error
        );

    });



    // Show selected victim details


    shelterVictimSelect.addEventListener(
    "change",
    function(){


        let victimId =
        this.value;



        if(!victimId){


            document.getElementById(
            "shelterVictimName"
            ).textContent = "---";


            return;

        }



        fetch(
        `http://127.0.0.1:8000/api/victims/${victimId}/`
        )


        .then(response => response.json())


        .then(victim => {


            document.getElementById(
            "shelterVictimId"
            ).textContent =
            victim.name;


        });



    });


}

// ================= ADD SHELTER FROM WEBSITE =================


const addShelterBtn =
document.getElementById("addShelterBtn");


if(addShelterBtn){


addShelterBtn.addEventListener("click", async function(){


const shelterData = {


shelter_name:
document.getElementById("shelterName").value,


location:
document.getElementById("shelterLocation").value,


capacity:
document.getElementById("shelterCapacity").value,


available_beds:
document.getElementById("availableBeds").value,


medical_facility:
document.getElementById("medicalFacility").value === "true",


food_available:
document.getElementById("foodAvailable").value === "true",


status:"Available"


};



try{


const response = await fetch(

"http://127.0.0.1:8000/api/shelters/",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(shelterData)

}

);



if(response.ok){


alert("Shelter added successfully");


location.reload();


}

else{


alert("Failed to add shelter");


}



}

catch(error){


console.log(error);

alert("Server connection failed");


}



});


}

// ====================== MEDICAL MODULE ======================


const medicalForm = document.getElementById("medicalForm");


if (medicalForm) {


    const victimSelect =
    document.getElementById("victimSelect");



    let selectedVictim = "";



    // Load victims dropdown

    fetch("http://127.0.0.1:8000/api/victims/")


    .then(response => response.json())


    .then(victims => {


        victimSelect.innerHTML =
        '<option value="">Select Victim</option>';



        victims.forEach(victim => {


            let option =
            document.createElement("option");


            option.value =
            victim.id;


            option.textContent =
            `${victim.drid} - ${victim.name}`;


            victimSelect.appendChild(option);


        });


    });



    // Select victim

    victimSelect.addEventListener(
    "change",
    function(){


        selectedVictim =
        this.value;



        if(!selectedVictim){

            document.getElementById("medicalName").value="";
            document.getElementById("victimId").textContent="---";

            return;

        }



        fetch(
        `http://127.0.0.1:8000/api/victims/${selectedVictim}/`
        )


        .then(response=>response.json())


        .then(victim=>{


            document.getElementById(
            "medicalName"
            ).value =
            victim.name;



            document.getElementById(
            "victimId"
            ).textContent =
            victim.drid;



        });



    });





    // Save medical record


    medicalForm.addEventListener(
    "submit",
    async function(e){


        e.preventDefault();



        if(!selectedVictim){


            alert(
            "Please select a victim"
            );

            return;

        }




      const medicalData = {

      victim: selectedVictim,

    injury_level:
    document.getElementById("injuryStatus").value,

    blood_pressure:
    document.getElementById("bloodPressure").value,

    pulse_rate:
    Number(document.getElementById("pulseRate").value),

    temperature:
    Number(document.getElementById("temperature").value),

    treatment:
    document.getElementById("treatment").value,

    doctor_name:
    document.getElementById("medicalTeam").value,

    status:
    document.getElementById("healthStatus").value

};




        try{


            const response =
            await fetch(

            "http://127.0.0.1:8000/api/medical/",

            {

                method:"POST",

                headers:{

                    "Content-Type":
                    "application/json"

                },


                body:
                JSON.stringify(medicalData)

            });



            if(response.ok){


                alert(
                "Medical record saved successfully"
                );


                medicalForm.reset();


            }

            else{


                alert(
                "Failed to save medical record"
                );


            }



        }

        catch(error){


            console.log(error);


            alert(
            "Backend connection failed"
            );


        }



    });


}

// ================= MIGRATION CENTRE (USING SHELTER API) =================

const centreList = document.getElementById("centreList");

let shelterData = [];


function showShelters(shelters) {

    centreList.innerHTML = "";


    shelters.forEach((shelter,index)=>{


        centreList.innerHTML += `

        <article class="centre-card">

        <div class="centre-card-header">

        <div>

        <span class="centre-tag">
        CENTRE ${index+1}
        </span>


        <h3>
        ${shelter.shelter_name}
        </h3>


        <p>
        ${shelter.location}
        </p>


        </div>


        <span class="status-badge open-status">
        ${shelter.status}
        </span>


        </div>



        <div class="centre-details">


        <div>
        <span>Available Beds</span>
        <strong>${shelter.available_beds}</strong>
        </div>


        <div>
        <span>Total Capacity</span>
        <strong>${shelter.capacity}</strong>
        </div>


        <div>
        <span>Medical Facility</span>
        <strong>
        ${shelter.medical_facility ? "Yes":"No"}
        </strong>
        </div>


        </div>


        </article>

        `;


    });

}



if(centreList){


fetch("http://127.0.0.1:8000/api/shelters/")


.then(response=>response.json())


.then(shelters=>{


    shelterData = shelters;


    showShelters(shelterData);


});


}

// ================= SEARCH MIGRATION CENTRES =================

if(centreSearchForm){

centreSearchForm.addEventListener("submit",(e)=>{

e.preventDefault();


let value = centreSearch.value.trim().toLowerCase();


// If search box empty show all shelters

if(value === ""){

    showShelters(shelterData);

    if(searchResultText){
        searchResultText.textContent =
        "Showing all migration centres.";
    }

    return;

}


// Filter shelters

let filteredShelters = shelterData.filter(shelter =>

    shelter.location.toLowerCase().includes(value) ||

    shelter.shelter_name.toLowerCase().includes(value)

);


// Display filtered result

showShelters(filteredShelters);


// Update message

if(searchResultText){

    if(filteredShelters.length > 0){

        searchResultText.textContent =
        `${filteredShelters.length} migration centre(s) found.`;

    }

    else{

        searchResultText.textContent =
        "No matching migration centre found.";

    }

}


});

}

// ================= TRANSPORT MODULE =================

const transportForm = document.getElementById("transportForm");


if (transportForm) {


    // Load victims dropdown

    fetch("http://127.0.0.1:8000/api/victims/")
    .then(response => response.json())
    .then(data => {

        const victimSelect =
        document.getElementById("victimSelect");


        data.forEach(victim => {

            const option =
            document.createElement("option");


            option.value = victim.id;


            option.textContent =
            victim.name + " (" + victim.status + ")";


            victimSelect.appendChild(option);

        });

    })

    .catch(error => {

        console.log(
        "Victim API Error:",
        error
        );

    });

    // Load destination centres from Shelter API

fetch("http://127.0.0.1:8000/api/shelters/")
.then(response => response.json())
.then(data => {


    const destinationSelect =
    document.getElementById("destinationCentre");


    data.forEach(shelter => {


        const option =
        document.createElement("option");


        option.value =
        shelter.location;


        option.textContent =
        shelter.shelter_name + " - " + shelter.location;


        destinationSelect.appendChild(option);


    });


})

.catch(error => {

    console.log(
    "Shelter API Error:",
    error
    );

});





    // Submit Transport

    transportForm.addEventListener(
    "submit",
    async function(event){


        event.preventDefault();



        const transportData = {


            vehicle_number:
            document.getElementById("vehicleNumber").value,


            vehicle_type:
            document.getElementById("vehicleType").value,


            driver_name:
            document.getElementById("driverName").value,


            driver_contact:
            document.getElementById("driverContact").value,


            destination_centre:
            document.getElementById("destinationCentre").value,


            status:
            document.getElementById("transportStatus").value,


            assigned_victim:
            document.getElementById("victimSelect").value


        };



        console.log(
        "Sending:",
        transportData
        );



        try {


            const response =
            await fetch(
            "http://127.0.0.1:8000/api/transport/",
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:
                JSON.stringify(transportData)

            });



            if(response.ok){


                alert(
                "Transport assigned successfully!"
                );


                transportForm.reset();


            }


            else{


                const error =
                await response.json();


                console.log(
                error
                );


                alert(
                "Transport assignment failed"
                );


            }


        }


        catch(error){


            console.log(error);


            alert(
            "Cannot connect to backend"
            );


        }


    });


}

// ================= STATUS MODULE =================

const statusVictim = document.getElementById("statusVictim");
const statusForm = document.getElementById("statusForm");

const STATUS_API =
"http://127.0.0.1:8000/api/status/";

const VICTIM_API =
"http://127.0.0.1:8000/api/victims/";


// Load victims

if(statusVictim){

fetch(VICTIM_API)

.then(response => response.json())

.then(data => {

data.forEach(victim => {

let option = document.createElement("option");

option.value = victim.id;

option.textContent =
victim.name;

statusVictim.appendChild(option);

});

})

.catch(error => {

console.log("Victim loading error:",error);

});

}



// Save status

if(statusForm){

statusForm.addEventListener("submit", function(e){

e.preventDefault();


let data = {


victim:

statusVictim.value,


final_status:

document.getElementById("finalStatus").value,


status_note:

document.getElementById("statusNote").value


};



fetch(STATUS_API,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

})


.then(response=>{

if(response.ok){

alert("Status updated successfully!");

statusForm.reset();

}

else{

alert("Status update failed!");

}

})


.catch(error=>{

console.log(error);

alert("Server error");

});


});

}
// ================= STATUS VICTIM DETAILS =================

if (statusVictim) {

  statusVictim.addEventListener("change", function () {

    let victimId = this.value;


    if (!victimId) {
      return;
    }


    fetch(
      "http://127.0.0.1:8000/api/victims/" + victimId + "/"
    )

    .then(response => response.json())

    .then(victim => {


      // Victim Name
      document.getElementById("victimName").textContent =
        victim.name;


      // Avatar initials
      let initials =
        victim.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0,2);


      document.getElementById("profileAvatar").textContent =
        initials;



      // Rescue ID
      if(victim.drid){

        document.getElementById("rescueId").textContent =
        "RESCUE ID: " + victim.drid;

      }
      else{

        document.getElementById("rescueId").textContent =
        "RESCUE ID: DR-" + victim.id;

      }



      // Centre
      document.getElementById("centreName").textContent =
        "Assigned Centre: " +
        (victim.destination_centre || "Not Assigned");



      // Existing victim status
      document.getElementById("currentStatus").textContent =
        victim.status || "Registered";


    })


    .catch(error => {

      console.log(
        "Victim details error:",
        error
      );

    });


  });

}
function updateStatusCards(status) {

    document.querySelectorAll(".status-card").forEach(card => {
        card.classList.remove("active-status-card");
    });

    switch (status) {

        case "Safe at Centre":
            document.getElementById("safeCard").classList.add("active-status-card");
            break;

        case "Under Treatment":
            document.getElementById("treatmentCard").classList.add("active-status-card");
            break;

        case "Shifted":
            document.getElementById("shiftedCard").classList.add("active-status-card");
            break;

        case "Reunited with Family":
            document.getElementById("familyCard").classList.add("active-status-card");
            break;
    }

    document.getElementById("currentStatus").textContent = status;
}