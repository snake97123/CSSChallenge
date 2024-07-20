const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('focus', function() {
  this.placeholder = '';
});

searchBar.addEventListener('blur', function() {
  this.placeholder = 'Search...';
});