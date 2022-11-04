const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

let cat = document.querySelector('#catName')
cat.src="img/" + id + ".jpg";

