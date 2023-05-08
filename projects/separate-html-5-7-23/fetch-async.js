const pages = [
    /* 'nav', 
    'time', 
    'api', */
    "about",
    "footer",
    "more",
  ];
  
  async function loadPage(page) {
    try {
      const [htmlResponse, cssResponse, jsResponse] = await Promise.all([
        fetch(`${page}/${page}.html`),
        fetch(`${page}/${page}.css`, { async: true }),
        fetch(`${page}/${page}.js`, { async: true }),
      ]);
  
      const html = await htmlResponse.text();
      const css = await cssResponse.text();
      const js = await jsResponse.text();
  
      const container = document.querySelector("#app");
      const div = document.createElement("div");
      div.innerHTML = html;
      container.appendChild(div);
  
      const style = document.createElement("style");
      style.innerHTML = css;
      document.head.appendChild(style);
  
      const script = document.createElement("script");
      script.innerHTML = js;
      document.querySelector(`#${page}`).appendChild(script);
    } catch (error) {
      console.error(error);
    }
  }
  
  pages.forEach((page) => {
    loadPage(page);
  });
  