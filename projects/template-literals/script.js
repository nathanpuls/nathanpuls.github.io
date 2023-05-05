const apiUrl = `https://linksaw.com/api/1.1/obj/linksaw-link`;

const linkDiv = document.getElementById("link");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const name = result['name'];
      const url = result['url'];

      return { name, url };
    });

    // Update linkDiv with the first result
    var copythis = results[0].url;
    linkDiv.innerHTML = copythis;

    let title = copythis;
    let description = copythis;

    const myTemplate = `
      <div class="my-class">
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    `;

    const appElement = document.getElementById("app");
    appElement.innerHTML = myTemplate;
  })
  .catch(error => {
    console.error(error);
  });

// Second template
const title2 = "My Title2";
const description2 = "My Description2";

const myTemplate2 = `
  <div class="my-class">
    <h1>${title2}</h1>
    <p>${description2}</p>
  </div>
`;

const appElement2 = document.getElementById("app2");
appElement2.innerHTML = myTemplate2;
