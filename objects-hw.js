const outputDiv = document.getElementById("output"); // keep this to output to page.

// Problem 1
// 1. Create an object called gameSettings
// 2. with the properties: difficulty, soundOn, and maxPlayers. 
// 3. Loop through the object and 
// 4. display the results to the page.


function problem1() {
  // Output results in a new result variable. use let result = ______
  const gameSettings = {difficulty:"hard" , soundOn:false , maxPlayers: 5}
  var result = []
  for (let [key, value] of Object.entries(gameSettings)) {
    result.push(key, value)
  }

  outputDiv.innerHTML = result; // keep this to output to page.
}

// Problem 2
// 1. Add a method to the gameSettings object called toggleSound 
// 2. that switches the soundOn property between true and false. 
// 3. Call the method and output the soundOn property to the page. 
// 4. Each time you click the button, it should alternate between true and false.
const gameSettings = {difficulty:"hard" , soundOn:false , maxPlayers: 5} 
function problem2() {
  // Add ONE line IN THIS function that calls toggleSound method.
  gameSettings.toggleSound = function() {
    if (this.soundOn === false) {
       this.soundOn = true
    }
    else {
      this.soundOn = false 
    }
  }
  gameSettings.toggleSound()
  console.log(gameSettings)
  
  outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.soundOn}`;
  
}

// Problem 3
// 1. Create an object called smoothie 
// 2. with the properties flavor, size, and hasProtein (boolean). 
// 3. Prompt the user for a size, then 
// 4. display the updated size on the page.

  function problem3() {
    const smoothie = {flavor:"grape" , size:window.prompt("Smoothie size? : "), hasProtein: false}
    // keep this if else block to help with overwriting the old size. 
    // You will need to have created a newSize variable with the use of a prompt.
    outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
  }
  

// Problem 4
// 1. Create an object called gadget. 
// 2. gadget should have properties of name, batteryLife, and isWireless. 
// 3. Write a function called printGadgetSpecs that 
// 4. takes the properties of gadget and 
// 5. displays a formatted string to the page like:
// 6. "Name: [name], Battery Life: [batteryLife] hrs, Wireless: [true/false]".



function problem4() {
  outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(Gadget)}`;
  
}

// Problem 5
// 1. Create an object called garden that
// 2. has a property plants (an array of strings). 
// 3. Add a method addPlant to garden that 
// 4. takes user input (text entry box) and 
// 5. PUSHes a new plant into the array. 
// 6. Use the method to add two plants, then 
// 7. loop through the object to display (list out on the page) the plants in the garden.


function problem5() {
  const garden = {plants: ['plantOne' , 'plantTwo']}
  // This helps with keeping your text entry box clean after every input.
  // No need to change this, just keep the variable and object naming in mind.
  const newPlant = document.getElementById("plantInput").value;
  if (newPlant.trim() !== "") {
    garden.addPlant(newPlant);
    document.getElementById("plantInput").value = "";
  }

  // Keep this and make use of it to help with outputting your results :)
  let result = "<strong>Plants in Garden:</strong><ul>";
  for (let plant of garden.plants) {
    result += `<li>${plant}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

// Problem 6
// 1. Create an object called playlist that
// 2. has a name and a songList (array). 
// 3. Add a method addSong that adds a new song to the list. 
// 4. This should take user input (prompt) to add the song to songList. 
// 5. Then add two songs and log the playlist.

function problem6() {
  // Use a for loop that iterates 2 times to ask for two songs.
  // No need to touch the for loop except uncommenting and replacing the PLACEHOLDER.
  // for (PLACEHOLDER) {
  //   const song = prompt(`Enter song ${i + 1}:`);
  //   if (song && song.trim() !== "") {
  //     playlist.addSong(song.trim());
  //   }
  // }


  // This will output to the page for you:
  // Just fill in the PLACEHOLDERs with the correct info.
  const playlist = {songs: [], addSong: function(song){this.songs.push(song)}}
  for (let i = 0; i < 2; i++) {
    const song = window.prompt(`Enter song ${i + 1}:`);
    if (song && song.trim() !== "") {
      playlist.addSong(song.trim());
    }
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}
