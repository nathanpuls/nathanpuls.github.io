const dataDiv = document.getElementById('data2');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    // Display the returned data in the "data" div
    dataDiv.innerText = `hey ${JSON.stringify(data)}`;
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
