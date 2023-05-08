
  const button = document.getElementById('toggle-btn');
  let isOn = true;

  button.addEventListener('click', () => {
    if (isOn) {
      button.innerText = 'OFF';
      isOn = false;
    } else {
      button.innerText = 'ON';
      isOn = true;
    }
  });
