
let myToast = new bootstrap.Toast(document.getElementById('liveToast'));
let toastButton = document.getElementById('liveToastBtn');

  toastButton.addEventListener('click', function () {
    myToast.show()
  })
