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

  // Kontaktformular -> sendet direkt per FormSubmit an das Postfach (kein Mailprogramm)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!form.checkValidity()){ form.reportValidity(); return; }
      var f = function(id){ var el = form.querySelector('[name="'+id+'"]'); return el ? el.value.trim() : ''; };
      // Honeypot: von Bots ausgefüllt -> still abbrechen, so tun als ob ok
      var ok = document.getElementById('formNote');
      var err = document.getElementById('formErr');
      var btn = form.querySelector('button[type="submit"]');
      if(err) err.style.display='none';
      if(f('_honey')){ if(ok) ok.style.display='block'; form.reset(); return; }

      var L = function(a,d){ return form.getAttribute(a) || d; };
      var payload = {};
      payload[L('data-l-name','Name')]        = f('name');
      payload['E-Mail']                       = f('email');
      payload[L('data-l-phone','Telefon')]    = f('phone');
      payload[L('data-l-topic','Thema')]      = f('topic');
      payload[L('data-l-date','Wunschdatum')] = f('date');
      payload[L('data-l-people','Personen')]  = f('people');
      payload[L('data-l-msg','Nachricht')]    = f('message');
      payload._subject  = L('data-subject','Anfrage Website') + (f('name') ? ' – ' + f('name') : '');
      payload._replyto  = f('email');
      payload._template = 'table';

      var endpoint = form.getAttribute('data-endpoint');
      if(!endpoint){ if(err) err.style.display='block'; return; }

      var sending = form.getAttribute('data-sending') || '…';
      var sendLbl = form.getAttribute('data-send') || (btn ? btn.textContent : '');
      if(btn){ btn.disabled = true; btn.textContent = sending; }

      fetch(endpoint, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify(payload)
      })
      .then(function(r){ return r.json().catch(function(){ return {}; }).then(function(d){ return { status:r.status, d:d }; }); })
      .then(function(res){
        var success = res.status >= 200 && res.status < 300 && String(res.d.success) !== 'false';
        if(success){
          if(ok) ok.style.display='block';
          form.reset();
        } else {
          if(err) err.style.display='block';
        }
      })
      .catch(function(){ if(err) err.style.display='block'; })
      .then(function(){ if(btn){ btn.disabled = false; btn.textContent = sendLbl; } });
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
