
function copyToClipboard1() {
  const message1 = document.getElementById("textarea").value;
  navigator.clipboard.writeText(message1);

  const button1 = document.getElementById("write");
  button1.textContent = "Copied!";
  setTimeout(() => {
    button1.textContent = "Copy Write";
  }, 2000);
}




function copyUrlToClipboard2() {
    
  const url = window.location.href;
  navigator.clipboard.writeText(url);

  const button2 = document.getElementById("write2");
  button2.textContent = "Copied!";
  setTimeout(() => {
    button2.textContent = "Copy URL";
  }, 2000);
}




