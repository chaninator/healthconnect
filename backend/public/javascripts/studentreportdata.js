//this is the code that allows a modul to pop up with the
//a particular report
$(document).ready(function() {
console.log(window.location);


$('.show-student-report').on('click',function(e){
  e.preventDefault();
  $('#myModal').modal('show');
  var index = $(this).attr('id');
  console.log(index);

  $.ajax({
    url: window.location.href,
    method: 'POST',
    data: {
      index: index
    }
  })
  .done(function(results){
    console.log('RESULTS: ', results);
    $('.reportlist').html('');
    $('.reportlist').append('<li>' + results.date + '</li>');
    $('.reportlist').append('<li>' + results.vitals + '</li>');
    $('.reportlist').append('<li>' + results.symptoms + '</li>');
    $('.reportlist').append('<li>' + results.notes + '</li>');
  })
  .fail(function(error){
    console.log(error);
  });
})

});
