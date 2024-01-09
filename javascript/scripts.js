let rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("loader").style.display = "inline-block";

  let fname = document.getElementById("fname");
  let attending = document.getElementById("attending");
  let plus1 = document.getElementById("plusOne");
  if (plus1.value == "") {
    plus1.value = "no";
  }
  let diet = document.getElementById("diet");
  if (diet.value == "") {
    diet.value = "No Special Requirements";
  }
  let day2 = document.getElementById("attending-day2")


  var data = {
    service_id: 'service_zsgk6wo',
    template_id: 'template_piq0a0i',
    user_id: 'ZPFY-OuTM3Pv0VrTR',
    template_params: {
      'fullName': fname.value,
      'att': attending.value,
      'plusOne': plus1.value,
      'diet': diet.value,
      'day2': day2.value
    }
  };

  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    let myModal = document.getElementById('rsvp');
    let modal = bootstrap.Modal.getInstance(myModal)
    modal.hide();
    fname.value = "";
    plus1.value = "";
    diet.value = "";
    document.getElementById("loader").style.display = "none";
    setTimeout(() => {
      alert('Your RSVP has been sent successfully');
    }, "1500");

  }).fail(function(error) {
    alert('Error please try again: ' + JSON.stringify(error));
  });

});
