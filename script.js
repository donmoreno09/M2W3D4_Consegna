// ESERCIZIO 7: Cambiare il contenuto dell'elemento h1
function changeH1Content(newContent) {
    const h1 = document.querySelector('h1');
    h1.textContent = newContent;
  }
  
  // ESERCIZIO 8: Cambiare il colore di background della pagina
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // ESERCIZIO 9: Cambiare l'indirizzo nel footer
  function changeFooterAddress(newAddress) {
    const footer = document.querySelector('footer p');
    footer.textContent = newAddress;
  }
  
  // ESERCIZIO 10: Aggiungere una classe CSS ad ogni link Amazon
  function addClassToAmazonLinks(className) {
    const amazonLinks = document.querySelectorAll('.amazon-link');
    amazonLinks.forEach(link => {
      link.classList.add(className);
    });
  }
  
  // ESERCIZIO 11: Aggiungere/togliere una classe CSS a tutte le immagini per visibilità
  function toggleImageVisibility(className) {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.classList.toggle(className);
    });
  }
  
  // ESERCIZIO 12: Cambiare il colore del prezzo di ogni prodotto
  function changePriceColor(color) {
    const prices = document.querySelectorAll('.card span');
    prices.forEach(price => {
      price.style.color = color;
    });
  }
  

  changeH1Content('Benvenuto nel nostro negozio!');
  changeBackgroundColor('#f0f0f0');
  changeFooterAddress('Smartphone Store, Via Virtuale 789, Torino');
  addClassToAmazonLinks('highlight-link');
  changePriceColor('red');
  toggleImageVisibility('hidden-image');
  