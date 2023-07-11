// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
                const div = document.getElementById("missionTarget");
            //    div.innerHTML =div.innerHTML+ `
            div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src=${imageUrl}>`;
   
}

function validateInput(testInput) {
    let returnVal;
    if (testInput==="")
     {
        returnVal= "Empty";
     }
     else if (isNaN(testInput)) {
        returnVal=  "Not a Number";
     }
     else if (!isNaN(testInput)) {
        returnVal= "Is a Number";
     }
   return  returnVal;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus=document.getElementById("launchStatus");
    let pilotStatus=document.getElementById("pilotStatus");
    let copilotStatus=document.getElementById("copilotStatus");
    let cargoStatus=document.getElementById("cargoStatus");
    let fuelStatus=document.getElementById("fuelStatus");
    let faultyItems=list;
    if (validateInput(pilot) == "Empty" || 
        validateInput(copilot) == "Empty" ||  
        validateInput(fuelLevel) == "Empty" ||  
        validateInput(cargoLevel) == "Empty") {
        alert("All fields are required!");
    }
    else if(validateInput(pilot) === "Is a Number" ||
            validateInput(copilot) === "Is a Number" ||
            validateInput(fuelLevel) === "Not a Number" ||
            validateInput(cargoLevel) ==="Not a Number")
      {
             alert("Make sure to enter Valid information for each field!");
      }
    else{
        launchStatus.innerHTML += `
      <div>
          <ol>
              `
          pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
              copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

          if ((fuelLevel >= 10000) && (cargoLevel <= 10000)){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = `rgb(65, 159, 106)`;
            fuelStatus.innerHTML=`Fuel level high enough for launch`;
            cargoStatus.innerHTML=`Cargo mass low enough for launch`;


          } 
          else  if ((fuelLevel < 10000) && (cargoLevel > 10000)){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color =`rgb(199, 37, 78)`;
            fuelStatus.innerHTML=`Fuel level too low for launch`;
            cargoStatus.innerHTML=`Cargo mass too heavy for launch`;


          }  
          else if (fuelLevel < 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = `rgb(199, 37, 78)`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
          } 
          else if (cargoLevel > 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color =`rgb(199, 37, 78)`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
          } 
                                                             
                  `
              </ol>
          </div>
          `; 
        }
}

async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( (response) => response.json())
  return planetsReturned;
};

function pickPlanet(planets) {
    let random = Math.round(Math.random() * planets.length);
   // console.log(planets[random]);
    return planets[random];
 }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;