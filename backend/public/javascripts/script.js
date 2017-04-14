$(document).ready(function() {


// Hide and show nurse modals for "generate report"
$('#modal-report').modal('show');
$('.btn-report-next').on('click', function(e) {
  e.preventDefault();
  $('#modal-report').modal('hide');
  $('#modal-report2').modal('show');
});

$('.btn-vitals-next').on('click', function(e) {
  e.preventDefault();
  vitals = $('#vitals-textarea').val();
  console.log('vitals: ', vitals);

  if (!vitals) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report2').modal('hide');
    $('#modal-report3').modal('show');
  }

});

$('.btn-symptoms-next').on('click', function(e) {
  e.preventDefault();
  symptoms = $('#symptoms-textarea').val();
  console.log('symptoms: ', symptoms);
  if (!symptoms) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report3').modal('hide');
    $('#modal-report4').modal('show');
  }

$('.btn-notes-next').on('click', function(e) {
  e.preventDefault();
  notes = $('#notes-textarea').val();
  console.log('notes: ', notes);
  if (!notes) {
    sweetAlert("Oops...", "Please fill out form!", "error");
  } else {
    $('#modal-report4').modal('hide');
    $('#modal-report5').modal('show');
  }
  // put information on the last modul to verify
  $('#report-vitals').text(vitals);
  $('#report-symptoms').text(symptoms);
  $('#report-notes').text(notes);
});

});
});
