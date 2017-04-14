$(document).ready(function() {


// Hide and show nurse modals for "generate report"
$('#modal-report').modal({backdrop: 'static',
keyboard: false},'show');
$('.btn-report-next').on('click', function(e) {
  e.preventDefault();
  /* Act on the event */
  $('#modal-report').modal('hide');
  $('#modal-report2').modal({backdrop: 'static',
  keyboard: false},'show');

});

$('.btn-vitals-next').on('click', function(e) {
  e.preventDefault();
  vitals = $('#vitals-textarea').val();
  console.log('vitals: ', vitals);

  /* Act on the event */
  if (!vitals) {
    sweetAlert("Oops...", "Please fill out the form!", "error");
  } else {
    $('#modal-report2').modal('hide');
    $('#modal-report3').modal({backdrop: 'static',
    keyboard: false},'show');
  }
});

$('.btn-symptoms-next').on('click', function(e) {
  e.preventDefault();
  symptoms = $('#symptoms-textarea').val();
  console.log('symptoms: ', symptoms);
  /* Act on the event */
  if (!symptoms) {
  sweetAlert("Oops...", "Please fill out the form!", "error");
  } else {
    $('#modal-report3').modal('hide');
    $('#modal-report4').modal({backdrop: 'static',
    keyboard: false},'show');
  }
  // $('#report-symptoms').text(symptoms);

});

$('.btn-notes-next').on('click', function(e) {
  e.preventDefault();
  notes = $('#notes-textarea').val();
  console.log('notes: ', notes);
  /* Act on the event */
  if (!notes) {
  sweetAlert("Oops...", "Please fill out the form!", "error");
  } else {
    $('#modal-report4').modal('hide');
    $('#modal-report5').modal({backdrop: 'static',
    keyboard: false},'show');
  }
  $('#report-vitals').text(vitals);
  $('#report-symptoms').text(symptoms);
  $('#report-notes').text(notes);
});


});
