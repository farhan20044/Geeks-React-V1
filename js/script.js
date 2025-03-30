
let currentIndex = 0;

function scrollCards(id,direction) {
  const cardRow = document.getElementById(id);
  const cardWidth = cardRow.children[0].offsetWidth; 
  const totalCards = cardRow.children.length;
  const maxIndex = totalCards - 4;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  cardRow.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
