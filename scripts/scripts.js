const body = document.body;
const buttonA = document.getElementById('phone-icon');
const buttonB = document.getElementById('mail-icon');
const buttonC = document.getElementById('linkedin-icon');
const buttonD = document.getElementById('github-icon');
const customAlert = document.getElementById('customAlert');
const alertContent = document.getElementById('alertContent');
const closeBtn = document.getElementById('closeBtn');

//For changing to light mode style.
document.getElementById('id-sun').onclick = function(){
    body.classList.toggle('dark-theme');
    document.getElementById('id-moon').classList.remove('active');
    this.classList.add('active');
}

//For changing to dark mode style.
document.getElementById('id-moon').onclick = function(){
    body.classList.toggle('dark-theme');
    document.getElementById('id-sun').classList.remove('active');
    this.classList.add('active');
}


// Function to display custom alert messages.
function displayCustomAlert(message, link = null) {
    if (link) {
      alertContent.innerHTML = `${message} <a href="${link}" target="_blank">Link</a>`;
    } else {
      alertContent.innerText = message;
    }
    customAlert.style.display = 'block';
  }

// Add click event listeners to each button.
buttonA.addEventListener('click', () => {
  displayCustomAlert('Mi telefono: 299-4-585-403');
});

buttonB.addEventListener('click', () => {
  displayCustomAlert('Mi correo: Lahuelroman@gmail.com');
});

buttonC.addEventListener('click', () => {
  displayCustomAlert('Mi Linkedin:', 'https://www.linkedin.com/in/lahuel-rom%C3%A1n-stella/');
});

buttonD.addEventListener('click', () => {
  displayCustomAlert('Mi Github:','https://www.github.com/LahuelRS');
});

// Close the custom alert box when clicking the close button.
closeBtn.addEventListener('click', () => {
  customAlert.style.display = 'none';
});