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
          alert('Please make sure to fill out text');
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
          alert('Please make sure to fill out text');
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
          alert('Please make sure to fill out text');
        } else {
          $('#modal-report4').modal('hide');
          $('#modal-report5').modal('show');
        }
        $('#report-vitals').text(vitals);
        $('#report-symptoms').text(symptoms);
        $('#report-notes').text(notes);
      });

      // $('#submitreportbtn').submit(function(){
      //   vitals: vitals,
      //   symptoms: symoptoms,
      //   notes:notes
      // });




      // function submitReport() {
      //   var url = 'DATABASE###$%^&';
      //   var submitReport = $.ajax({
      //     url: url,
      //     method: 'POST',
      //     dataType: 'json',
      //     data: {
      //       vitals: vitals,
      //       symoptoms: symptoms,
      //       notes: notes
      //     }
      //   })
      //
      //   submitReport.done(function(response) {
      //     console.log('success: ', response);
      //   })
      //   submitReport.fail(function(error) {
      //     console.log('error', error);
      //   })
      //   submitReport.always(function() {
      //     console.log('I always work');
      //   })
        // $(function() {
        //   $('#createreport').on('submit', function() {
        //
        //   })
        // })
      });
