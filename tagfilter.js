// riktig blog index — client-side tag filter. Clicking a tag shows only
// posts carrying that tag; clicking "all" (or the active tag again)
// clears the filter. No server, no build step beyond copying this file
// alongside index.html — see Makefile's public/blog/index.html rule.
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.getElementById('tagbar');
  var list = document.getElementById('postlist');
  if (!bar || !list) return;

  var items = list.querySelectorAll('li');
  var buttons = bar.querySelectorAll('button.tag');

  function applyFilter(tag) {
    buttons.forEach(function (b) {
      b.classList.toggle('active', b.dataset.tag === tag);
    });
    items.forEach(function (li) {
      if (!tag) {
        li.style.display = '';
        return;
      }
      var tags = (li.dataset.tags || '').split(/\s+/);
      li.style.display = tags.indexOf(tag) !== -1 ? '' : 'none';
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      applyFilter(b.classList.contains('active') ? '' : b.dataset.tag);
    });
  });
});
