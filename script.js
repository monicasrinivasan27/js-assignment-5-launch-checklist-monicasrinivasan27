// Write your JavaScript code here!

window.addEventListener("load", function() {
    //Added by Monica for the testcase to be passed.
    faultyItems.style.visibility = 'hidden';
    let form = document.querySelector("button");
    form.addEventListener("click", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]"); 
       let list=document.getElementById("faultyItems");
        formSubmission(document,list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        event.preventDefault();
    });
   
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
 //  console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
   //    console.log(listedPlanets);
    }).then(function () {
    //  console.log(listedPlanets);
    
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter=planet.diameter;
        let star=planet.star;
        let distance=planet.distance;
        let moons=planet.moons;
        let imageUrl=planet.image;
        addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl);
    })

});