const pages = [
  /* 'nav', 
'time', 
'api', */
  "about",
  "footer",
  "more",
];

pages.forEach((page) => {
  fetch(`${page}/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      const container = document.querySelector("#app");
      const div = document.createElement("div");
      div.innerHTML = html;
      container.appendChild(div);
    })
    .catch((error) => {
      console.error(error);
    });

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
});
