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
    var vitals = $('#vitals-textarea').val();
    console.log('vitals: ', vitals);
    /* Act on the event */
    $('#modal-report2').modal('hide');
    $('#modal-report3').modal('show');
  });
  $('.btn-symptoms-next').on('click', function(e) {
    e.preventDefault();
    var symptoms = $('#symptoms-textarea').val();
    console.log('symptoms: ', symptoms);
    /* Act on the event */
    $('#modal-report3').modal('hide');
    $('#modal-report4').modal('show');
  });
  $('.btn-notes-next').on('click', function(e) {
    e.preventDefault();
    var notes = $('#notes-textarea').val();
    console.log('notes: ', notes);

    /* Act on the event */
    $('#modal-report4').modal('hide');
    $('#modal-report5').modal('show');
  });


});
