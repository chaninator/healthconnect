$(document).ready(function() {


// Hide and show nurse modals for "generate report"
$('#modal-report').modal('show');
$('.btn-report-next').on('click', function(e) {
  e.preventDefault();
  /* Act on the event */
  $('#modal-report').modal('hide');
  $('#modal-report2').modal('show');
});

$('.btn-vitals-next').on('click', function(e) {
  e.preventDefault();
  vitals = $('#vitals-textarea').val();
  console.log('vitals: ', vitals);
  /* Act on the event */
  if (!vitals) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report2').modal('hide');
    $('#modal-report3').modal('show');
  }
  // $('#report-vitals').text(vitals);
});

$('.btn-symptoms-next').on('click', function(e) {
  e.preventDefault();
  symptoms = $('#symptoms-textarea').val();
  console.log('symptoms: ', symptoms);
  /* Act on the event */
  if (!symptoms) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report3').modal('hide');
    $('#modal-report4').modal('show');
  }
  // $('#report-symptoms').text(symptoms);

});

$('.btn-notes-next').on('click', function(e) {
  e.preventDefault();
  notes = $('#notes-textarea').val();
  console.log('notes: ', notes);
  /* Act on the event */
  if (!notes) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report4').modal('hide');
    $('#modal-report5').modal('show');
  }
  $('#report-vitals').text(vitals);
  $('#report-symptoms').text(symptoms);
  $('#report-notes').text(notes);
});

$('#show-student-report').on('click', function(e){
  e.preventDefault();
  $('#myModal').modal('show');
});

});





//   $('#show-student-report').on('click', function(e) {
//     e.preventDefault();
//     $('#show-this-report').modal('show');
//     /* Act on the event */
//     $('#modal-report').modal('hide');
//     $('#modal-report2').modal('show');
//   });
// }
