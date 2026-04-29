const input = document.getElementById('username-input');
  const btn = document.getElementById('start-btn');

  input.addEventListener('input', () => {
    const val = input.value.trim();
    const isValid = val.length >= 3;

    btn.disabled = !isValid;
    btn.classList.toggle('ready', isValid);
  });

