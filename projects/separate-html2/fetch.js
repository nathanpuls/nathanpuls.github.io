const pages = [
  "header",
  "intro",  
  'links',
    "footer",
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
  