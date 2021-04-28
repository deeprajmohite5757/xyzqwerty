var header = document.getElementById("header");

// Creating main div
var headContent = document.createElement("div");
headContent.className = "headContent";

// Creating div for youtube logo
var logo = document.createElement("div");
logo.id = "logo";

// Youtue Icon
var youtubeIcon = document.createElement("img");
youtubeIcon.src = "/images/youtube-logo7.png";
youtubeIcon.id = "youtube-icon";
logo.appendChild(youtubeIcon);

// Title
var title = document.createElement("div");
title.id = "title";
var titleTxt = document.createTextNode("YouTube");
title.appendChild(titleTxt);
logo.appendChild(title);

// Creating div for input box
var inputBox = document.createElement("div");
inputBox.id = "input-box";

// Input Field
var inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "input";
inputBox.appendChild(inputField);

// Creating Button for search
var searchButton = document.createElement("button");
searchButton.id = "search-button";

// search Icon
var searchIcon = document.createElement("img");
searchIcon.src = "/images/search-icon.png";
searchIcon.id = "search-icon";
searchButton.append(searchIcon);
inputBox.appendChild(searchButton);

searchButton.addEventListener("click", () => {
  console.log(inputField.value);
  if (inputField.value == "" || inputField.value == undefined)
    return alert("Please enter something in search bar");

  getData(inputField.value);
});

// Appending all divs
header.appendChild(logo);
header.appendChild(inputBox);
