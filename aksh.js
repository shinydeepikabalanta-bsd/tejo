
const input = document.getElementById('username-input');
  const btn = document.getElementById('startBtn');

//VALIDATION OF USERNAME
  input.addEventListener('input', () => {
    const val = input.value.trim();
    const isValid = val.length >= 3;

    btn.disabled = !isValid;
    btn.classList.toggle('ready', isValid);
  });

  // click event
  //transition from homepage to grid

  const canvas = document.getElementById("gameCanvas");
  btn.addEventListener("click", () => {
    canvas.style.display = "block"; 

      const elements = document.querySelectorAll(".entry");
    elements.forEach(el => {
        el.style.display = "none";
    });

    const props = document.querySelectorAll(".game-wrapper");
     props.forEach(el =>{
        el.style.display="flex";
    });                       
});


