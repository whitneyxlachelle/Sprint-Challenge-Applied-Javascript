// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const mainHeader = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = "SMARCH 28, 2019";
    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";
    const secondSpan = document.createElement('span2');
    secondSpan.textContent = "98°";

    mainHeader.appendChild(span);
    mainHeader.appendChild(h1);
    mainHeader.appendChild(secondSpan);

mainHeader.classList.add('header');
span.classList.add('date');
secondSpan.classList.add('temp');


}




