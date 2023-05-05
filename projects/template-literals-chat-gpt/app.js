const appElement = document.getElementById('app');

const myComponentElement = document.createElement('div');
myComponentElement.innerHTML = MyComponent.template;
myComponentElement.querySelector('h1').textContent = MyComponent.data().title;
myComponentElement.querySelector('p').textContent = MyComponent.data().description;

appElement.appendChild(myComponentElement);
