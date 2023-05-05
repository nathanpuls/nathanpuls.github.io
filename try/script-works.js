document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  
    var text = document.getElementById('textA');
    text.select();
    document.execCommand('copy');
  
  })
  
  //np
  
  const myString = 
        
        `<!DOCTYPE html>
          <html>
            <head>
              <title>My Page</title>
            </head>
            <body>
              <h1>Hello World!</h1>
            </body>
          </html>`;
          
          
  const myDiv = document.getElementById("textA");
  myDiv.textContent = myString;

  