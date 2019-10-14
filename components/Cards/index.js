// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((response) => {
    //console.log(response); 
    
    Object.values(response.data.articles).forEach((item) => {
        item.forEach((item) => {
            const cards = document.querySelector(".cards-container");
            cards.appendChild(cardHolder(item));
        })
    }) 
})

function cardHolder(article){
    
    const firstDiv = document.createElement('div');
    const secondDiv= document.createElement('div');
    const thirdDiv = document.createElement('div');
    const fourthDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    fourthDiv.appendChild(img);
    thirdDiv.appendChild(fourthDiv);
    thirdDiv.appendChild(span);
    secondDiv.appendChild(thirdDiv);
    firstDiv.appendChild(secondDiv);

    firstDiv.classList.add('card');
    secondDiv.classList.add('headline');
    thirdDiv.classList.add('author');
    fourthDiv.classList.add('img-container');

    secondDiv.textContent = article.headline;
    img.src = article.authorPhoto;
    span.textContent = article.authorName;

    return firstDiv;
} 