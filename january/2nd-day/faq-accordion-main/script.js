const text = document.querySelectorAll('.question');

text.forEach(function(text) {
  text.addEventListener('mouseover', function() {
  changeColor(this);
});
  text.addEventListener('mouseout', function() {
    restoreColor(this);
  });
});

  function changeColor(element) {
    element.style.color = 'hsl(283, 69%, 47%)';
  }

  function restoreColor(element) {
    element.style.color = '';
  }

const questionText = document.querySelectorAll('.question');

questionText.forEach(question => {
  question. addEventListener('click', function() {
    const section = this.closest('.section');
    const answer = section.querySelector('.answer');

    section.classList.toggle('show-answer');
  });
});

