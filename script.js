let flippedTiles = [];
let preventClick = false;
let matchedTiles = 0;

const tiles = document.getElementsByClassName('grid-item');

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', flipTile);
}

function flipTile() {
  if (preventClick || this.classList.contains('flip') || flippedTiles.length >= 2) 
  return 
  
  this.classList.add('flip');
  flippedTiles.push(this);
  
  if (flippedTiles.length === 2) {
    const tile1 = flippedTiles[0];
    const tile2 = flippedTiles[1];
    
    if (tile1.textContent === tile2.textContent) {
      matchedTiles += 2;
      flippedTiles = [];
      hideCard(tile1.id); 
      hideCard(tile2.id);
    } else {
      preventClick = true;
      setTimeout(() => {
        tile1.classList.remove('flip');
        tile2.classList.remove('flip');
        hideCard(tile1.id); 
        hideCard(tile2.id);
        flippedTiles = [];
        preventClick = false;
      }, 1000);
    }
  }

}
function hideCard(id) {
  var elem = document.getElementById(id);
  elem.firstElementChild.classList.add('hide');
}
function flipCard(id) {
  var element = document.getElementById(id);
   element.firstElementChild.classList.remove("hide");
 }
 
