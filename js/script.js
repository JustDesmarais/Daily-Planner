// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 
  var plans = [];
  var currentHour = dayjs().format('HH');

  $('.btn').click(function () {
    console.log($(this).siblings('textarea').val());
    console.log($(this).parent().attr('id')); 
    console.log(currentHour);
  });

  var hour = $('[id*="hour-"]').eq(0).attr('id')[5] + $('[id*="hour-"]').eq(0).attr('id')[6];

  console.log(hour < currentHour);
  console.log($('[id*="hour-"]').length);
  console.log($('[id*="hour-"]').eq(2).attr('id')[5] + $('[id*="hour-"]').eq(2).attr('id')[6]);
  console.log(currentHour);
  /**
   * variables to store once clicked:
   * text value
   * id ('hour-x) of the time-block chosen
   * calendar day of when the save was logged
   */
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // code to display the current date in the header of the page.
  
  

  setInterval(function () {
    var timeEl = 0;
    timeEl++;
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    for (var i = 0; i < $('[id*="hour-"]').length; i++) {
      var hour = $('[id*="hour-"]').eq(i).attr('id')[5] + $('[id*="hour-"]').eq(i).attr('id')[6];
      if (hour < currentHour) {
        $('[id*="hour-"]').eq(i).removeClass('present future').addClass('past');
      } else if (hour == currentHour) {
        $('[id*="hour-"]').eq(i).removeClass('future past').addClass('present');
      } else if (hour > currentHour) {
        $('[id*="hour-"]').eq(i).removeClass('present past').addClass('future');
      };
    };
  }, 6000);



});
