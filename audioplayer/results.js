const apiUrl = `https://linksaw.com/version-test/api/1.1/obj/vob-audio?constraints=[{"key":"uid","constraint_type":"equals","value":"1643919725090x169839524417895170"}]`;


const resultsDiv = document.getElementById('results');
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const results = data.response.results.map(result => {
      const category = result['demo-category'];
      const audioUrl = result['s3-url'];
      return { category, audioUrl };
    });
    results.forEach(result => {
      const resultDiv = document.createElement('div');
      const categoryHeading = document.createElement('h2');
      const audioUrlParagraph = document.createElement('p');
      categoryHeading.textContent = result.category;
      audioUrlParagraph.textContent = result.audioUrl;
      resultDiv.appendChild(categoryHeading);
      resultDiv.appendChild(audioUrlParagraph);
      resultsDiv.appendChild(resultDiv);
    });
  })
  .catch(error => console.log(error));
