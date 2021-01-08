const alertBanner = document.getElementById("alert");

////create the html for the banner ////

alertBanner.innerHTML = 
`
  <div class="alert-banner">
 
  <p><strong>Thank you for visting<strong></strong></p>
  <p class="alert-banner-close">x</p>
  </div>
`
;

////alert banner event listener to turn display off when clicked ///

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});