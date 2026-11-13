// template_zdpcp2c
// service_n4n0iek
// DEyzF26-BDXLcpeuw

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      'service_n4n0iek',
      'template_zdpcp2c',
      event.target,
      'DEyzF26-BDXLcpeuw'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email server is temporarily unavailable. Please contact me directly on martinezabdias@gmail.com"
    );
  }) 
} 

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}