// random facts
var randomMessageButton = document.querySelector("#showFact");
var randomMessageDisplay = document.querySelector("#random-message-display");
var messages = [
  "Avocados are rich in healthy fats.",
  "Carrots are good for vision due to their beta-carotene content.",
  "Fiber helps support digestion and gut health.",
  "Spinach contains iron and folate.",
  "Oats help reduce cholesterol.",
  "Yogurt supports gut bacteria with probiotics.",
  "Eggs are a complete protein source.",
  "Green tea boosts metabolism.",
  "Broccoli is high in vitamin C and antioxidants.",
  "Almonds provide healthy fats and vitamin E.",
  "Drinking water before meals can aid weight loss.",
  "Tomatoes are rich in lycopene, good for heart health.",
  "Cucumbers are hydrating and low-calorie.",
  "Garlic boosts immune function.",
  "Blueberries improve memory and brain health.",
  "Bananas are high in potassium, supporting heart health.",
  "Chia seeds offer omega-3s and fiber.",
  "Sweet potatoes are a good source of vitamin A.",
  "Dark chocolate in moderation supports heart health.",
  "Whole grains reduce risk of chronic diseases.",
  "Dates strengthen bones.",
  "Nectarines help reduce inflammation.",
  "Fennel aids digestion.",
  "Bok choy boosts bone health.",
  "Starfruit is hydrating and low in calories.",
  "Sea buckthorn oil supports skin.",
  "Chili peppers improve metabolism.",
  "Avocado oil supports heart health.",
  "Lemongrass has antioxidant properties.",
  "Rosemary improves concentration.",
  "Basil supports immunity.",
  "Thyme helps respiratory health.",
  "Sage enhances memory.",
];
randomMessageButton.addEventListener("click", displayRandomMessage);

// Creating a function to display random message
function displayRandomMessage() {
  // Math.random() gives us a random number between 0 and 1
  // We multiply it by messages.length to get a number between 0 and the number of messages
  // Math.floor() rounds it down to make sure it's a whole number (an index for the array)
  var randomIndex = Math.floor(Math.random() * messages.length);

  // Use the random index to pick a message from the array
  var randomMessage = messages[randomIndex];

  // Show the selected message on the webpage
  // textContent changes the text inside the message display area
  randomMessageDisplay.textContent = randomMessage;
}
