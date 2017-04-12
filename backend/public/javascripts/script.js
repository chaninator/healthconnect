$(document).ready(function() {
  // Hide and show nurse modals for "generate report"
  $('#modal-report').modal('show');
  $('.btn-report-next').on('click', function(e) {
    e.preventDefault();
    /* Act on the event */
    $('#modal-report').modal('hide');
    $('#modal-report2').modal('show');
  });
  $('.btn-date-next').on('click', function(e) {
    e.preventDefault();
    var date = $('#date-textarea').val();
    console.log('date: ', date);
    /* Act on the event */
    if (!date) {

      alert('Please make sure to fill out text');

      // alert('Please make sure to fill out text');
      sweetAlert("Oops...", "Please fill out form!", "error");

    } else {
      $('#modal-report2').modal('hide');
      $('#modal-report3').modal('show');
    }
  });
  $('.btn-vitals-next').on('click', function(e) {
    e.preventDefault();
    var vitals = $('#vitals-textarea').val();
    console.log('vitals: ', vitals);
    /* Act on the event */
    if (!vitals) {
      alert('Please make sure to fill out text');
    } else {
      $('#modal-report3').modal('hide');
      $('#modal-report4').modal('show');
    }
  });
  $('.btn-symptoms-next').on('click', function(e) {
    e.preventDefault();
    var symptoms = $('#symptoms-textarea').val();
    console.log('symptoms: ', symptoms);
    /* Act on the event */
    if (!symptoms) {
      alert('Please make sure to fill out text');
    } else {
      $('#modal-report4').modal('hide');
      $('#modal-report5').modal('show');
    }
  });
  $('.btn-notes-next').on('click', function(e) {
    e.preventDefault();
    var notes = $('#notes-textarea').val();
    console.log('notes: ', notes);

    /* Act on the event */
    if (!notes) {
      alert('Please make sure to fill out text');
    } else {
      $('#modal-report5').modal('hide');
      $('#modal-report6').modal('show');
    }
  });
});
