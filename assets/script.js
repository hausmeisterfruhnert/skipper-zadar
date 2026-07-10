// Skipper Zadar — kleine UI-Helfer
(function(){
  // Mobile-Menü
  var burger = document.querySelector('.hamburger');
  var links = document.querySelector('.nav-links');
  if(burger && links){
    burger.addEventListener('click', function(){
      links.classList.toggle('open');
    });
  }

  // Kontaktformular -> öffnet vorbereitete E-Mail (kein Server nötig)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var to = form.getAttribute('data-mailto') || '';
      var f = function(id){ var el = form.querySelector('[name="'+id+'"]'); return el ? el.value : ''; };
      var subjPrefix = form.getAttribute('data-subject') || 'Anfrage Website';
      var subject = subjPrefix + ' – ' + (f('topic')||'') + (f('name') ? ' ('+f('name')+')' : '');
      var bodyLines = [
        (form.getAttribute('data-l-name')||'Name')+': '+f('name'),
        'E-Mail: '+f('email'),
        (form.getAttribute('data-l-phone')||'Telefon')+': '+f('phone'),
        (form.getAttribute('data-l-topic')||'Thema')+': '+f('topic'),
        (form.getAttribute('data-l-date')||'Wunschdatum')+': '+f('date'),
        (form.getAttribute('data-l-people')||'Personen')+': '+f('people'),
        '',
        (form.getAttribute('data-l-msg')||'Nachricht')+':',
        f('message')
      ];
      var href = 'mailto:'+encodeURIComponent(to)
        +'?subject='+encodeURIComponent(subject)
        +'&body='+encodeURIComponent(bodyLines.join('\n'));
      window.location.href = href;
      var ok = document.getElementById('formNote');
      if(ok){ ok.style.display='block'; }
    });
  }

  // Bild-Fallback: bei Ladefehler Platzhalter zeigen
  document.querySelectorAll('img[data-fallback]').forEach(function(img){
    img.addEventListener('error', function(){
      img.style.display='none';
      var ph = img.parentElement && img.parentElement.querySelector('.img-fallback');
      if(ph) ph.style.display='grid';
    });
  });
})();
