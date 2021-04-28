const API_KEY = "AIzaSyBf5UNNA50XayR6jYJ0VrIg7ZzcAFpVgHw";
let nextPageToken;

let list = [];
let maxResult = 15;
let currentPage;
let rows = 1;

const pagination_element = document.getElementById("pagination");

var w = window.innerWidth;
if (w > 1750) rows = 5;
else if (w > 1300) rows = 4;
else if (w > 1000) rows = 3;
else if (w > 600) rows = 2;

// Hitting youtube API
function getData(queryData, nextPage = "") {
  currentPage = 1;
  if (nextPage == "")
    url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=${maxResult}&type=video&q=${queryData}`;
  else
    url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&maxResults=${maxResult}&type=video&q=${queryData}&pageToken=${nextPage}`;

  console.log(url);
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      calculateViews(data.items);
      console.log(data);
      setTimeout(() => {
        SetupPagination(data.items, pagination_element, rows);
      }, 500);
    })
    .catch((error) => alert(error));
}
