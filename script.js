document.addEventListener('DOMContentLoaded', function () {

  // Form submission via Formsubmit.co (homepage only)
  var form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var consent = document.getElementById('consent');
    if (!consent.checked) {
      consent.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    var data = new FormData(form);
    data.delete('consent');

    fetch('https://formsubmit.co/ajax/whitedovecleaningco@gmail.com', {
      method: 'POST',
      body: data
    })
    .then(function (response) { return response.json(); })
    .then(function () {
      form.innerHTML = '<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3>Thank You!</h3><p>We\'ve received your request and will get back to you within a few hours.</p></div>';
    })
    .catch(function () {
      btn.textContent = 'Send Request';
      btn.disabled = false;
      alert('Something went wrong. Please call us at (765) 358-5028 or try again.');
    });
  });
});
