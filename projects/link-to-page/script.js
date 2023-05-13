const readLink = document.getElementById('read-link');
const writeLink = document.getElementById('write-link');
const blockRead = document.getElementById('block-read');
const blockWrite = document.getElementById('block-write');

readLink.addEventListener('click', () => {
  blockWrite.style.display = 'none';
  blockRead.style.display = 'block';
});

writeLink.addEventListener('click', () => {
  blockRead.style.display = 'none';
  blockWrite.style.display = 'block';
});


//encode


const textarea = document.getElementById('textarea');
const encodeBtn = document.getElementById('encodeBtn');

encodeBtn.addEventListener('click', () => {
  // Encode the text in the textarea
  const encodedText = encodeURIComponent(textarea.value);

  // Copy the encoded text to the clipboard
  navigator.clipboard.writeText(encodedText)
    .then(() => {
      console.log('Encoded text copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying encoded text to clipboard:', error);
    });
});
