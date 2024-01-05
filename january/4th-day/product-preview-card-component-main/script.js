const cartBtn = document.querySelector('.cart-section');

cartBtn.addEventListener('mouseover', function changeColor() {
  cartBtn.style.background = 'rgb(33, 84, 66)';
});

cartBtn.addEventListener('mouseout', function restoreColor() {
  cartBtn.style.background = '';
});