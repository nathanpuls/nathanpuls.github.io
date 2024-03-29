const pages = [
  "intro",  
  "header",
  "links",
  "footer",
  'code',
  'mothersday'
];

function loadPage(pageIndex) {
  if (pageIndex >= pages.length) {
    return; // Stop when all pages are loaded
  }

  const page = pages[pageIndex];

  // Load HTML
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      const container = document.querySelector("#app");
      const div = document.createElement("div");
      div.innerHTML = html;
      div.id = page; // Add the page name as the ID of the div
      div.hidden = true; // Add the hidden attribute to the page
      container.appendChild(div);

      // Load next page after this page is loaded
      loadPage(pageIndex + 1);

    })
    .catch((error) => {
      console.error(error);
    });
}

// Start loading the first page
loadPage(0);




//NAV
/* const linksDiv = document.querySelector("#links");
const linksList = document.createElement("ul");

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  const linkItem = document.createElement("li");
  const link = document.createElement("a");

  link.textContent = page;
  link.href = `#${page}`;

  linkItem.appendChild(link);
  linksList.appendChild(linkItem);
}

linksDiv.appendChild(linksList); */

const linksDiv = document.querySelector("#links");

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  const link = document.createElement("a");

  link.textContent = page;
  link.href = `#${page}`;
  link.style.display = "inline-block";

  linksDiv.appendChild(link);
}




// Show or hide the appropriate page based on the hash
function handleHashChange() {
  const hash = window.location.hash.slice(1); // Remove the '#' from the hash
  const pages = document.querySelectorAll("#app > div");

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    if (page.id === hash) {
      page.hidden = false; // Show the matching page
    } else {
      page.hidden = true; // Hide all other pages
    }
  }
}

//page load
function handleHashChange() {
  const hash = window.location.hash.slice(1); // Remove the '#' from the hash
  const pages = document.querySelectorAll("#app > div");

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    if (page.id === hash) {
      page.hidden = false; // Show the matching page
    } else {
      page.hidden = true; // Hide all other pages
    }
  }

  // Show the page with the matching hash value if it exists in the pages array
  if (pages[hash]) {
    pages[hash].hidden = false;
  }
}




// Call the function initially to show the appropriate page
handleHashChange();

// Add the event listener to handle changes to the hash
window.addEventListener("hashchange", handleHashChange);


//CLOSE OFF CANVAS

const offCanvas = document.querySelector("#offcanvasExample");
document.addEventListener("click", function (event) {
  if (event.target.closest("#menu-button, #offcanvas") === null && offCanvas.classList.contains("show")) {
    offCanvas.classList.remove("show");
  }
});

// HIDE LINKS DIV

// get the current URL
let currentUrl = window.location.href;

// check if the URL contains a "#" symbol
if (currentUrl.indexOf("#") === -1) {
  // if the URL doesn't contain a "#" symbol, show the #links div
  document.getElementById("links").style.display = "block";
} else {
  // if the URL contains a "#" symbol, hide the #links div
  document.getElementById("links").style.display = "none";
}

  





