// write your code here
console.log("js loading...")

const collectMenuData =  () => {
  return fetch("http://localhost:3000/ramens") 
    .then(response => (response.json)())
    .then(ramenInfo => ramenInfo.forEach((ramen) => createCard(ramen)));

 }
 collectMenuData()

 function createCard() {
  let displayDiv =  document.getElementById("ramen-menu")

  let img = document.createElement("img")
  img.src = ramen.image

  displayDiv.appendChild(img)


 }