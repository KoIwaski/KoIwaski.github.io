// Mostra a versão do texto no idioma escolhido (padrão: idioma do navegador). Sem JavaScript, as três versões aparecem.
(function () {
  var secs = document.querySelectorAll('section[data-lang]');
  var btns = document.querySelectorAll('.langs button');
  var codes = ['pt', 'en', 'es'];
  function pick(code) {
    secs.forEach(function (s) { s.classList.toggle('on', s.getAttribute('data-lang') === code); });
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-go') === code ? 'true' : 'false'); });
    document.documentElement.lang = code;
    try { localStorage.setItem('lang', code); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  var start = codes.indexOf(saved) >= 0 ? saved : codes.indexOf(nav) >= 0 ? nav : 'pt';
  document.body.classList.remove('nojs');
  btns.forEach(function (b) { b.addEventListener('click', function () { pick(b.getAttribute('data-go')); }); });
  pick(start);
})();
