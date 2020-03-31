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
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const target = document.getElementById("missionTarget");
         target.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">`;
      });
   });
      
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
   let cargoId = document.getElementById("cargoStatus");
   let launchStatusId = document.getElementById("launchStatus");
   
      if (fuelLevel.value < 10000) {
         fuelId.style.visibility = "visible";
         fuelId.innerHTML = "Fuel level too low for launch."; 
         event.preventDefault();

      } else if (fuelLevel.value >= 10000) {
         fuelId.style.visibility = "visible";
         fuelId.innerHTML = "Fuel level high enough for launch";
         event.preventDefault();
      }

      if (cargoMass.value > 10000) {
         cargoId.style.visibility = "visible";
         cargoId.innerHTML = "Cargo mass too much for launch."; 
         event.preventDefault();
        
      } else if (cargoMass.value <= 10000){
         cargoId.style.visibility = "visible";
         cargoId.innerHTML = "Cargo mass low enough for launch";
         event.preventDefault();
     }

      if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         launchStatusId.innerHTML = "Shuttle is ready for launch";
         launchStatusId.style.color = "green";
         event.preventDefault();
      
      } else {
         launchStatusId.innerHTML = "Shuttle not ready for launch";
         launchStatusId.style.color = "red";
         event.preventDefault();
      }
           
      faultyId.style.visibility = "visible";
         faultyId.innerHTML = `<ol>
                 <li>Pilot ${pilotName.value} Ready</li>
                 <li>Co-pilot ${copilotName.value} Ready</li>
                 <li>${fuelId.innerHTML}</li>
                 <li>${cargoId.innerHTML}</li>
             </ol>`;
   });
            
});   

