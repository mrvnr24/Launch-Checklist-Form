// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let launchForm = document.getElementById("launchForm");
   launchForm.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName =  document.querySelector("input[name=copilotName]");
      let fuelLevel =  document.querySelector("input[name=fuelLevel]");
      let cargoMass =  document.querySelector("input[name=cargoMass]");
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "")  {
            alert("All fields are required!");
            event.preventDefault();
         }
         if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
         }
         
      let faultyId = document.getElementById("faultyItems");
     
   let fuelId = document.getElementById("fuelStatus");   
   let launchStatusId = document.getElementById("launchStatus");
   faultyId.style.visibility = "visible";
   faultyId.innerHTML = `<ol>
         <li>Pilot ${pilotName.value} Ready</li>
         <li>Co-pilot ${copilotName.value} Ready</li>
         <li>${fuelId.innerHTML}</li>
         <li>Cargo mass low enough for launch</li>
     </ol>`;

         if (fuelLevel.value < 10000) {
              fuelId.style.visibility = "visible";
            launchStatusId.innerHTML = "Shuttle not ready for launch";
            launchStatusId.style.color = "red";
            fuelId.innerHTML = "Fuel level too low for launch."; 
           } else {
              fuelId.style.visibility = "visible";
              fuelId.innerHTML = "Fuel level high enough for launch";
           }
     
   });
   
   
                    
});   

