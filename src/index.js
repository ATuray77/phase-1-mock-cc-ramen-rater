// write your code here
console.log("js loading...");

//MY CODE
/*
const collectMenuData = () => {
  return fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramenInfo) => ramenInfo.forEach((ramen) => createCard(ramen)));
};
collectMenuData();

function createCard(ramen) {
  const displayDiv = document.getElementById("ramen-menu");
  const img = document.createElement("img");
  img.src = ramen.image;
  displayDiv.appendChild(img);

  img.addEventListener("click", (e) => {
    e.target.img;

    const imgDetail = document.querySelector("img.detail-image");
    imgDetail.src = ramen.image;

    const h2 = document.querySelector(".name");
    h2.textContent = ramen.name;


     const h3Restaurant = document.querySelector(".restaurant");
     h3Restaurant.textContent = ramen.restaurant;

    
    // const span = document.querySelector("span#rating-display");
    // span.textContent = ramen.rating;
    // const p = document.querySelector("p");
    // p.appendChild(span);
    // h3.appendChild(p)
    

    const span = document.querySelector("#rating-display");
    span.textContent = ramen.rating;
    

    const pComment = document.querySelector("#comment-display");
    pComment.textContent = ramen.comment;
    

    const displayAll = document.querySelector("div#ramen-detail")
    displayAll.append(img, imgDetail, h2, h3, h3Restaurant, span, pComment )
  })
}

//working on the form
let form = document.querySelector("#new-ramen")
form.addEventListener('submit', (e) => {
  console.log(e)
  e.preventDefault()
  const formData = Object.fromEntries(new FormData(e.target))

  sendItOut(formData)
})

//sending a POST for new ramen
function sendItOut(Newramen) {
  fetch(" http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...Newramen
    })
  }).then((response) => response.json())
  .then(responseRamen => createCard(responseRamen))

}
*/

//FRIENDLY CODE
// write your code here
const menu = document.querySelector("#ramen-menu");

const addRamen = (ramen) => {
  const image = document.createElement("img");
  image.src = ramen.image;
  image.alt = ramen.name;
  menu.append(image);
  image.addEventListener("click", (e) => {
    const detailImg = document.querySelector(".detail-image");
    const detailName = document.querySelector(".name");
    const detailRest = document.querySelector(".restaurant");
    const detailRating = document.querySelector("#rating-display");
    const detailComment = document.querySelector("#comment-display");
    detailImg.src = ramen.image;
    detailImg.alt = ramen.name;
    detailName.innerText = ramen.name;
    detailRest.innerText = ramen.restaurant;
    detailRating.innerText = ramen.rating;
    detailComment.innerText = ramen.comment;
  });
};

fetch("http://localhost:3000/ramens")
  .then((r) => r.json())
  .then((data) => {
    data.forEach(addRamen);
  });

document.querySelector("#new-ramen").addEventListener("submit", (e) => {
  e.preventDefault();
  const ramen = {
    name: e.target.name.value,
    image: e.target.image.value,
    restaurant: e.target.restaurant.value,
    rating: document.querySelector("#new-rating").value,
    comment: e.target["new-comment"].value,
  };

  addRamen(ramen);

  e.target.reset();
});