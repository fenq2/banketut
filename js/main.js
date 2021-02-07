
  var sandwich = function sandwich() {
    var sandwichButton = document.querySelector('.sandwich__open-btn');
    var sandwichClose = document.querySelector('.sandwich__close-btn');
    var menu = document.querySelector('.sandwich__content');
    sandwichButton.addEventListener('click', function () {
      menu.classList.add('sandwich__content--opened');
    });
    sandwichClose.addEventListener('click', function () {
      menu.classList.remove('sandwich__content--opened');
    });
  };

  sandwich();