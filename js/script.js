// full function
$(function () {
  
  var plans = [];
  var currentHour = dayjs().format('HH');

  $('.btn').click(function () { //event listener to save text entry
    var date = dayjs().format('dddd, MMMM D');
    var block = $(this).parent().attr('id');
    var planText = $(this).siblings('textarea').val().trim();

    plans.push({date, block, planText}); // adds data to plans array
    
    localStorage.setItem('planData', JSON.stringify(plans)); // pushes plans array to local storage
  });
 
  // code to display the current date in the header of the page.
  
  setInterval(function () {
    var timeEl = 0;
    timeEl++;
    $('#currentDay').text(dayjs().format('dddd, MMMM D')); //checks current date and adds date to the top of the page

    for (var i = 0; i < $('[id*="hour"]').length; i++) { // loops to check calendar block against the current hour
      var hour = $('[id*="hour"]').eq(i).attr('id')[4] + $('[id*="hour"]').eq(i).attr('id')[5];
      if (hour < currentHour) {
        $('[id*="hour"]').eq(i).removeClass('present future').addClass('past');
      } else if (hour == currentHour) {
        $('[id*="hour"]').eq(i).removeClass('future past').addClass('present');
      } else if (hour > currentHour) {
        $('[id*="hour"]').eq(i).removeClass('present past').addClass('future');
      };
    };  
    
  }, 1000);

  function populateBlocks() { // function to pull data from local storage and have it displayed on-screen
    plans = JSON.parse(localStorage.getItem('planData'));

    for (var i = 0; i < plans.length; i++) {
       var blockID = '#' + plans[i].block;
       $(blockID).children('textarea').text(plans[i].planText);
    }
  };

populateBlocks(); // calls function to populate text fields

});
