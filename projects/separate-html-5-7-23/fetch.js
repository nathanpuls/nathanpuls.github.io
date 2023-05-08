const pages = [
    "nav",
    "api",
    "hey",
    "copy",
    "about",
    "more",
    "footer",
  ];
  
  function loadPage(pageIndex) {
    if (pageIndex >= pages.length) {
      return; // Stop when all pages are loaded
    }
  
    const page = pages[pageIndex];
  
    // Load HTML
    fetch(`${page}/${page}.html`)
      .then((response) => response.text())
      .then((html) => {
        const container = document.querySelector("#app");
        const div = document.createElement("div");
        div.innerHTML = html;
        container.appendChild(div);
  
        // Load CSS and JS after HTML is loaded
        fetch(`${page}/${page}.css`)
          .then((response) => response.text())
          .then((css) => {
            const style = document.createElement("style");
            style.innerHTML = css;
            document.head.appendChild(style);
          })
          .catch((error) => {
            console.error(error);
          });
  
        fetch(`${page}/${page}.js`)
          .then((response) => response.text())
          .then((js) => {
            const script = document.createElement("script");
            script.innerHTML = js;
            document.querySelector("#app").appendChild(script);
          })
          .catch((error) => {
            console.error(error);
          });
  
        // Load next page after this page is loaded
        loadPage(pageIndex + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Start loading the first page
  loadPage(0);
  