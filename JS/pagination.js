//Pagination setup
function SetupPagination(total_items, wrapper, items_per_page) {
  wrapper.innerHTML = "";
  let page_count = Math.ceil(total_items.length / items_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, total_items, page_count, wrapper);
    wrapper.appendChild(btn);
  }
}

// Pagination buttons
function PaginationButton(page, total_items, page_count, wrapper) {
  let button = document.createElement("button");
  button.innerText = page;
  button.classList.add("pagenumbers");

  if (currentPage == page) {
    button.classList.add("active");
    DisplayList(total_items, rows, currentPage);
  }

  button.addEventListener("click", function () {
    currentPage = page;
    DisplayList(total_items, rows, currentPage);

    // Next button for next 15 records
    if (currentPage == page_count) {
      putNextButton(wrapper);
    } else removeNextButton();

    let current_btn = document.querySelector(".active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

function DisplayList(total_items, rows_per_page, page) {
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = total_items.slice(start, end);

  setThumbnail(paginatedItems);
}
