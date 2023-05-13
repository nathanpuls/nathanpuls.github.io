/* const ids = [
  
   // "read", 
    "write"
  
  ];
  
  const BASE_URL = "";
  
  const fetchHtmlAndUpdateDom = ({ path, id }) =>
    fetch(BASE_URL + path)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data);
  
  
  
  const pathsAndIds = ids.map(id => ({ path: `${id}.html`, id }));
  
  pathsAndIds.forEach(fetchHtmlAndUpdateDom);

  
   */