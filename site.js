// Spis treści dla długich dokumentów (Regulamin, Polityka). Bez JS strona działa tak samo, tylko bez spisu.
(function () {
  var card = document.querySelector('.doc-card');
  if (!card) return;
  var hs = card.querySelectorAll('h2');
  if (hs.length < 4) return;
  var ol = document.createElement('ol');
  hs.forEach(function (h, i) {
    if (!h.id) h.id = 'sek-' + (i + 1);
    var li = document.createElement('li'), a = document.createElement('a');
    a.href = '#' + h.id; a.textContent = h.textContent; li.appendChild(a); ol.appendChild(li);
  });
  var d = document.createElement('details');
  d.className = 'toc'; d.open = window.innerWidth > 700;
  var s = document.createElement('summary'); s.textContent = 'Spis treści';
  d.appendChild(s); d.appendChild(ol);
  card.parentNode.insertBefore(d, card);
})();
