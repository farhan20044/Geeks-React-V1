let currentIndex = 0;

function scrollCards(direction) {
  const cardRow = document.getElementById('cardRow');
  const cardWidth = cardRow.children[0].offsetWidth; // Width of one card
  const totalCards = cardRow.children.length;
  const maxIndex = totalCards - 4; // Maximum index to scroll to

  currentIndex += direction;

  // Ensure currentIndex stays within bounds
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  // Scroll to the current card
  cardRow.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
