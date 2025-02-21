function changeH1Content(newContent) {
    document.querySelector('h1').textContent = newContent;
  }
  
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  function changeFooterAddress(newAddress) {
    document.querySelector('footer p').textContent = newAddress;
  }
  
  function addClassToAmazonLinks(className) {
    const amazonLinks = document.querySelectorAll('.amazon-link');
    amazonLinks.forEach(link => link.classList.add(className));
  }
  
  function toggleImageVisibility(className) {
    const images = document.querySelectorAll('img');
    images.forEach(image => image.classList.toggle(className));
  }
  
  function changePriceColor(color) {
    const prices = document.querySelectorAll('.card span');
    prices.forEach(price => price.style.color = color);
  }
  