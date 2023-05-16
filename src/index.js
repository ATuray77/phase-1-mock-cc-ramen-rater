// write your code here
console.log("js loading...")

const collectMenuData =  () => {
  return fetch("http://localhost:3000/ramens") 
    .then(response => (response.json)())
    .then(ramenInfo => ramenInfo.forEach((ramen) => createCard(ramen)));

 }
 collectMenuData()

 function createCard(ramen) {
  const displayDiv =  document.getElementById("ramen-menu")
  const img = document.createElement("img")
  img.src = ramen.image
  displayDiv.appendChild(img)


  img.addEventListener('click', (e) => {
  e.target.img
  console.log(img)
    
    const imgDetail =document.getElementsByClassName("img#detail-image")
    imgDetail.src = ramen.image  

    const h2 = document.querySelector("h2")
    h2.textContent= ramen.name
  
    const h3Restaurant = document.querySelector(".restaurant")
    h3Restaurant.textContent = ramen.restaurant
   

    const span = document.querySelector("span#rating-display")
    span.textContent = ramen.rating
    const p = document.querySelector("p")
    p.appendChild(span)
  
    const pComment = document.querySelector("p#comment-display")
    pComment.textContent = ramen.comment
  
    ramen-detail.apppend(img, imgDetail, h2, h3, h3Restaurant, span, pComment )
  
  })
  

 }

